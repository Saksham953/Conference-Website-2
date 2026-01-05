/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // 🔑 creates /out folder
  trailingSlash: true,       // 🔑 folder-based routing for Apache
  images: {
    unoptimized: true,       // 🔑 required for static hosting
  },
};

export default nextConfig;