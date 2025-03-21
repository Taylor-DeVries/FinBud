//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the workspace root
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    images: {
        domains: [
            's.gravatar.com',
            'cdn.auth0.com',
            'lh3.googleusercontent.com'
        ], // Add allowed image domains here
    },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);