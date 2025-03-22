export const GET = (req, res) => {
  res.json({
    message: "Debug Check",
    env: process.env.AUTH0_BASE_URL,
  });
};