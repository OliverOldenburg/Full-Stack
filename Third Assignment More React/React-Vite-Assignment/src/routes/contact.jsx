import {
    useLoaderData,
    Form,
    useFetcher,
} from "react-router-dom";
import { getContact, updateContact } from "../contacts";

// Grabs contactId and fetches contact details as well as showing an error if there is no result
export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    if (!contact) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return { contact };
  }  

// Manages the submission of forms and the updating of the contact's favourite status
export async function action({ request, params }) {
    let formData = await request.formData();
    return updateContact(params.contactId, {
      favorite: formData.get("favorite") === "true",
    });
  }
  
// Displays information about the contacts.
export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div id="contact">
      {/* Display contact avatar */}
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      {/* Displays name, favorite, X link, notes as well as the edit and delete buttons */}
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        {/* Edit and Delete buttons */}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}


// Favorite component renders a button to toggle the favorite status of a contact, the favorite can be marked by clicking on the star.
function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }
  
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
