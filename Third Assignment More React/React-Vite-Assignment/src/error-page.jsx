import { useRouteError } from "react-router-dom";

// Shows the page if there is a routing error
export default function ErrorPage() {
  const error = useRouteError();

  // Adds an error log to the console
  console.error(error);



  // Shows a specific error pge, with custom input
  return (
    <div id="error-page">
      <h1>What..?</h1>
      <p>You're not supposed to be here!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
