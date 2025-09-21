import { useUser } from '@auth0/nextjs-auth0';

export  function isLoggedIn() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return "Loading...";
  if (error) return error.message;
  return (
    user ? true : false
  );
}


