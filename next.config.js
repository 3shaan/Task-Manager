/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
};

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/*/**",
      },
    ],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://task-manager:gAk3VgyZjTBjCMYh@cluster0.00o20sl.mongodb.net/Task_manager/?retryWrites=true&w=majority",
  },
};
