import {Form, useLoaderData} from "react-router-dom"
import { getContacts } from "../contact";

export async function loader({params}) {
    const contact = await getContact(params.contactId);
    return{ contact }
}


function Favorite() {
    const { contact } = useLoaderData();
    let favorite = contact.favorite;

    return (
        <Form method="post">
            <button 
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            >
                {favorite ? "💛" : "🤍"}
            </button>
        </Form>
    )
}

export default function Contact() {
    return (
        <div id="contact">
            <div>
                <img 
                    key={loader.avatar} 
                    src={loader.avatar || null}  
                />
            </div>
            <div>
                <h1>
                    {loader.firstName || loader.lastName ? (
                        <>
                            {loader.firstName} {loader.lastName}
                        </>
                    ):
                    (
                        <i>No name</i>
                    )}
                    <Favorite />
                </h1>

                {loader.x && (
                    <p><a href={`http://twitter.com/${loader.x}`} target="_blank">{loader.x}</a></p>
                )}
                {loader.bio && <p>{loader.bio}</p> }
                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form 
                        action="destroy" 
                        method="post" 
                        onSubmit={(e) => {if(!comfirm("Please comfirm you want to delete this comment")){
                        e.preventDefault()
                    }}}>
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}