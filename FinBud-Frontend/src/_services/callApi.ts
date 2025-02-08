"use server";
import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

export async function getHistoryApi(): Promise<string> {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/client/history`,
      {
        headers: {
          Authorization: `Bearer ${accessToken?.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // return response.data.history;
    return response.data.history;
  } catch (error) {
    throw error;
  }
}

export async function setHistoryApi(history: string): Promise<void> {
  try {
    const accessToken = await getAccessToken();

    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/client/update`,
      { history: history },
      {
        headers: {
          Authorization: `Bearer ${accessToken?.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return;
  } catch (error) {
    throw error;
  }
}
