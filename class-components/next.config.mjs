/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './next',
  images: {
    domains: ['starwars-visualguide.com'],
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
