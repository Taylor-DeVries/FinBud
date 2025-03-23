export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Debug Check PROOF",
      env: process.env.AUTH0_BASE_URL,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}