/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            's.gravatar.com',
            'cdn.auth0.com',
            'lh3.googleusercontent.com'
        ], // Add allowed image domains here
    },
};

export default nextConfig;
