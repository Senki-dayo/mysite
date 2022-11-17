/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// サーバに上げるとき
// module.exports = {
//   basePath: '/test2',
// }