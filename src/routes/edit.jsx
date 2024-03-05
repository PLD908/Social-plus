import { Form, redirect, useLoaderData } from "react-router-dom";
import {updateContact} from "../contact";

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
    const {contact} = useLoaderData();
    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input 
                type="text"
                placeholder="First"
                aria-label="First name"
                name="first"
                defaultValue={contact.firstname}
                />
                <input 
                type="text"
                placeholder="Last"
                aria-label="Last name"
                name="last"
                defaultValue={contact.lastname}
                />
            </p>
            <label>
                <span>X</span>
                <input 
                type="text"
                placeholder="@john"
                name="twitter"
                defaultValue={contact.x}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input 
                type="text" 
                placeholder="https://xyz.com/avatar.jpg"
                aria-label="Avatar URL"
                name="avatar"
                defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                name="notes"
                defaultValue={contact.bio}
                rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    )
}