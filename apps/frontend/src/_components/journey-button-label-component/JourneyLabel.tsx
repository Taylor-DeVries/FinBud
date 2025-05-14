import { getSession } from '@auth0/nextjs-auth0';

export default async function JourneyLabel() {
  try {
    const session = await getSession();
    return session?.user ? "Resume My Journey" : "Start My Journey";
  } catch (error) {
    console.error('Error getting session:', error);
    return "Start My Journey";
  }
} 