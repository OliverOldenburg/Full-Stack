import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";


// Deletes a contact then redirects the user
export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}
