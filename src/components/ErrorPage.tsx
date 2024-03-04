import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorPage() {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <div id='error-page' className='text-center'>
      <h1 className='bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <code>{errorMessage}</code>
      </p>
    </div>
  );
};

export default ErrorPage;