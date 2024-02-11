import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// Delete contact: Calls deleteContact function for specified contactID and redirects to root.
export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}
