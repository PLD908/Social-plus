import {Form} from "react-router-dom"

const contact = {
    firstName: "John",
    lastName: "Deo",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    x: "@elon",
    bio: "something about",
    favorite: true,
}

export function Favorite() {
    let favorite = contact.favorite;

    return (
        <Form method="post">
            <button 
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            >
                {favorite ? "💛" : "💙"}
            </button>
        </Form>
    )
}

export default function Contact() {
    return (
        <div id="contact">
            <div>
                <img 
                    key={contact.avatar} 
                    src={contact.avatar || null} 
                    alt="" 
                />
            </div>
            <div>
                <h1>
                    {contact.firstName || contact.last ? (
                        <>
                            {contact.firstName} {contact.last}
                        </>
                    ):
                    (
                        <i>No name</i>
                    )}
                    <Favorite contact={contact} />
                </h1>

                {contact.x && (
                    <p><a href={`http://twitter.com/${contact.x}`} target="_blank">{contact.x}</a></p>
                )}
                {contact.bio && <p>{contact.bio}</p> }
            </div>
        </div>
    )
}