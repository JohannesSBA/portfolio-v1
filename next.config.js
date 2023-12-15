/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }, // Adjust this according to your project structure
      // Add other paths as needed
    };
  },
}

module.exports = nextConfig
