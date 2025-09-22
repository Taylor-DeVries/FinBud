import { useUser } from '@auth0/nextjs-auth0';

export function isLoggedIn() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return false;
  if (error) return false;
  return !!user;
}
