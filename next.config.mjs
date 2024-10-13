
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'upload.wikimedia.org'], // Add your image host domains here
  },
};

export default nextConfig;
