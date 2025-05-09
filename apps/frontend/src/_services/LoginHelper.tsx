import { useUser } from '@auth0/nextjs-auth0/client';

export  function isLoggedIn() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return "Loading...";
  if (error) return error.message;
  return (
    user ? true : false
  );
}


export  function getUser() {
  if (isLoggedIn()) {
  const { user, error, isLoading } = useUser();
  return (
    user
  );
  } else {
    return null;
  }
  
}
