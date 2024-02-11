import { useRouteError } from "react-router-dom";

// Component to display error page for routing errors.
export default function ErrorPage() {
  const error = useRouteError();

  // Log the error to console.
  console.error(error);

  // Render error page with title and message.
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
