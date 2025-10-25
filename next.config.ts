/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add image configuration here
  images: {
    // This allows Next.js Image component to fetch images from any domain.
    // WARNING: Do NOT use this in production.
    // In production, specify explicit domains for security reasons.
    remotePatterns: [
      {
        protocol: "http", // Allow http
        hostname: "**", // Allow any hostname
      },
      {
        protocol: "https", // Allow https
        hostname: "**", // Allow any hostname
      },
    ],
    // If you were on an older Next.js version (before 13.x), you might have used domains: []
    // domains: ['*'], // This is for older Next.js versions and is less granular
  },
  /* other config options here */
};

export default nextConfig;
