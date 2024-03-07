import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation } from "react-router-dom";
import { getContacts, createContact } from "../contact";

export async function action() {
	const contact = await createContact();
	return redirect(`/contacts/${contact.id}/edit`);
}
export async function loader() {
	const contacts = await getContacts();
	return { contacts };
}
const Root = () => {
	const { contacts } = useLoaderData();
	const navigation = useNavigation();

	return (
		<>
			<div id='sidebar'>
				<div>
					<form
						id='search-form'
						role='search'>
						<input
							id='q'
							aria-label='Search contacts'
							placeholder='Search'
							type='search'
							name='q'
						/>
						<div
							className='sr-only'
							aria-hidden
							hidden={true}></div>
						<div
							className='sr-only'
							aria-live='polite'></div>
					</form>
					<Form method='post'>
						<button type='submit'>New</button>
					</Form>
				</div>
				<nav>
					{contacts.length ? (
						<ul>
							{contacts.map((contact) => (
								<li key={contact.id}>
									<NavLink to={`contacts/${contact.id}`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
										{contact.first || contact.last ? (
											<>
												{contact.first} {contact.last}
											</>
										) : (
											<i>No Name</i>
										)}{" "}
										{contact.favorite && <span>★</span>}
									</NavLink>
								</li>
							))}
						</ul>
					) : (
						<p>
							<i>No contacts</i>
						</p>
					)}
				</nav>
			</div>
			<div id='detail' className={navigation.state == "loading" ? "loading" : ""}>
				<Outlet />
			</div>
		</>
	);
};
export default Root;