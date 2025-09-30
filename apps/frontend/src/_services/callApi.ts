'use server';
import { auth0 } from '@/lib/auth0';
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { headers } from 'next/headers';

export async function getHistoryApi(): Promise<string> {
  const { token } = await auth0.getAccessToken()

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/client/history`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.history;
}

export async function setHistoryApi(history: string): Promise<void> {
  const { token } = await auth0.getAccessToken()

  await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/client/update`,
    { history: history },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

