import { getSession } from '@auth0/nextjs-auth0';

export default async function ServerJourneyLabel() {
  const session = await getSession();
  return session?.user ? "Resume My Journey" : "Start My Journey";
} 