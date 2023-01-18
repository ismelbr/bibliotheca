import { Link, useRouteError } from 'react-router-dom';
import { getErrorMessage } from '../helpers/error.js';
import NotFound from '../pages/notFound.jsx';

function ErrorBoundary() {
  const error = useRouteError();
  const message = getErrorMessage(error);

  return (
    <>
      {(() => {
        switch (error.response?.status) {
          case 403:
            return (
              <div>
                You must sign in before using the app.
                <Link to="/signin">Sign in</Link>
              </div>
            );
          case 404:
            return <NotFound />;

          default:
            return <div>Dang! {message} </div>;
        }
      })()}
    </>
  );
}

export default ErrorBoundary;
