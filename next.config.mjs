/** @type {import('next').NextConfig} */
// src="https://images.unsplash.com/photo-1554629947-334ff61d85dc"
// https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1024px-Google_Images_2015_logo.svg.png

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
