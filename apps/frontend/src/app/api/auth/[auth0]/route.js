import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

// export const GET = handleAuth({
//   onError(req, res, error) {
//     console.error('Auth0 error:', error); // Log error details
//     res.status(error.status || 500).end(error.message);
//   },
// });
