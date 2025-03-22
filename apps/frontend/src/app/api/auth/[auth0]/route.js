import { handleAuth } from '@auth0/nextjs-auth0';

// export const GET = handleAuth();

export const GET = handleAuth({
  onError(req, res, error) {
    console.error('❌ Auth0 Error: ', {
      message: error.message,
      stack: error.stack,
      status: error.status,
    });

    res.status(error.status || 500).json({
      error: 'Authentication Error',
      message: error.message,
    });
  },
});
