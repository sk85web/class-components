/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  images: {
    domains: ['starwars-visualguide.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
