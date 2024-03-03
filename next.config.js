/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.elle.vn"],
  },
  async rewrites() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
      },
      // Thêm các quy tắc rewrites khác nếu cần

      //Trang chu khach san
      {
        source: "/hotel",
        destination: "/hotel/",
      },
    ];
  },
};

module.exports = nextConfig;
