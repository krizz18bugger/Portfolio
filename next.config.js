/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: undefined,
  outputFileTracingRoot: path.join(__dirname, '../../'),
  images: {
    domains: [],
  },
}

module.exports = nextConfig
