'use server';
import { auth0 } from '@/lib/auth0';
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { headers } from 'next/headers';

export async function getHistoryApi(): Promise<number[]> {
  const { token } = await auth0.getAccessToken()
  const response = await axios.get(
    `${process.env.USER_HISTORY_API_URL}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.userHistory;
}

export async function setHistoryApi(history: number[]): Promise<void> {
  const { token } = await auth0.getAccessToken()

  await axios.put(
    `${process.env.USER_HISTORY_API_URL}`,
    { userHistory: history },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

export async function createHistoryApi(history: number[]): Promise<void> {
  const { token } = await auth0.getAccessToken()

  await axios.post(
    `${process.env.USER_HISTORY_API_URL}`,
    { userHistory: history },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}
