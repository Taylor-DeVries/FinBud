'use server';
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { headers } from 'next/headers';

export async function getHistoryApi(): Promise<string> {
  const accessToken = await getAccessToken();

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/client/history`,
    {
      headers: {
        Authorization: `Bearer ${accessToken?.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  // return response.data.history;
  return response.data.history;
}

export async function setHistoryApi(history: string): Promise<void> {
  const accessToken = await getAccessToken();

  await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/client/update`,
    { history: history },
    {
      headers: {
        Authorization: `Bearer ${accessToken?.accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return;
}

export async function setProfileImageApi(imageData: string): Promise<void> {
  const res = await fetch('/api/profile-image', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageData }),
  });

  if (!res.ok) {
    throw new Error('Failed to update profile image');
  }
}


