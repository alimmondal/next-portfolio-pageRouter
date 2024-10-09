/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: [
      'images.pexels.com',
      'https://next-agency-lama-qeca9fn15-italim.vercel.app',
    ],
  },
  loader: 'imgix',
  path: '',
};

module.exports = nextConfig;
