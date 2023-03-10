/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "www.pexels.com",
      "images.pexels.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
