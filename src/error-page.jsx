import {useRouteError} from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oooops 😢</h1>
            <p>Sorry, Page not found</p>
            <p>
                <em>{error.statusText || error.message}</em>
            </p>
        </div>
    )
}