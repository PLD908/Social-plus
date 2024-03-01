import { Outlet, Link, useLoaderData } from "react-router-dom"; 
import { getContact } from "../contact";

export async function loader() {
    const contacts = await getContact();
    return {contacts};
}
export default function Root() {
    const {contacts} = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <div>
                    <form action="" id="search-form" role="search">
                        <input type="search"
                        id="q"
                        aria-label= "search contacts"
                        placeholder= "Search" 
                        name = "q"/>
                        <div 
                            className="sr-only"
                            aria-hidden
                            hidden= {true}>
                        </div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    {contacts.length ? (
                    <ul>
                        <li>
                            <Link to={`/contacts/1`}>Updates</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/1`}>Your friends</Link>
                        </li>
                    </ul>
                ) : (
                    <p>
                        <i>No contacts yet</i>
                    </p>
                    )}
                </nav>   
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
} 