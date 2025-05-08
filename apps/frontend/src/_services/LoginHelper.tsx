import { useUser } from '@auth0/nextjs-auth0/client';

export default function isLoggedIn() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return "Loading...";
  if (error) return error.message;
  return (
    user
  );
}