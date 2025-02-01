import axios from "axios";

export async function getVanessa(): Promise<string> {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
    return response.data as string; // Assuming the API returns a string
  } catch (error) {
    console.error("Axios error:", error);
    return "Error fetching data"; // Handle errors gracefully
  }
}
