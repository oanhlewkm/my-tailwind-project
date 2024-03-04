/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.myalbum.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "static.myalbum.io",
        port: "",
        pathname: "/_static/**",
      },
    ],
  },
};

export default nextConfig;
