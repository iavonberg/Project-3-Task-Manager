import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

return (
    <div id="error-page">
        <h1>Oh no!</h1>
        <p>An unexpected error occured.</p>
        <br/>
        <i>{error.stausText || error.message}</i>
    </div>
)
}

export default ErrorPage;

