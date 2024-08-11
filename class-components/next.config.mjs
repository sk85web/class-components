/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './next',
  images: {
    domains: ['starwars-visualguide.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
