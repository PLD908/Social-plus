import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contact";

export async function loader({ params }) {
	const contact = await getContact(params.contactId);
	return { contact };
};

const Favorite = () => {
	const { contact } = useLoaderData();
	let favorite = contact.favorite;
	return (
		<Form method='post'>
			<button
				name='favorite'
				value={favorite ? "false" : "true"}
				aria-label={favorite ? "Remove from favorites" : "Add to favorites"}>
				{favorite ? "🧡" : "♥︎"}
			</button>
		</Form>
	);
};

const Contact = () => {
    const { contact } = useLoaderData();
	return (
		<div id='contact'>
			<div>
				<img
					key={contact.avatar}
					src={contact.avatar || null}
				/>
			</div>
			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No name</i>
					)}
					<Favorite />
				</h1>

				{contact.twitter && (
					<p>
						<a
							target='_blank'
							href={`https://twitter.com/${contact.twitter}`}>
							{contact.twitter}
						</a>
					</p>
				)}
				{contact.notes && <p>{contact.notes}</p>}
				<div>
					<Form action='edit'>
						<button type='submit'>Edit</button>
					</Form>
					<Form
						action='destroy'
						method='post'
						onSubmit={(event) => {
							if (!confirm("Please confirm you want to delete this comment")) {
								event.preventDefault();
							}
						}}>
						<button type='submit'>Delete</button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Contact;