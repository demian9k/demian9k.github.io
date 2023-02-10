/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "github-page";

const webpackConfigProducer = require('./webpackConfigProducer')

const nextConfig = webpackConfigProducer({		// <<- `withTwin` 함수 적용
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
});

module.exports = nextConfig
