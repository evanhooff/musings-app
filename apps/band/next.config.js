/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    localPatterns: [
      {
        pathname: '/api/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
}
