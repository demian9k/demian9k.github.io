/** @type {import('next').NextConfig} */
const isDevEnv = process.env.NODE_ENV !== "production";

const webpackConfigProducer = require('./webpackConfigProducer')

//repository가 xx.github.io로 이면 주소는 asset에 root path로 접근한다.

// const repositoryName = "";

// production 일때 prefix 경로
// const assetPrefix = isDevEnv ? "" : `/${repositoryName}`
const assetPrefix = ""

const nextConfig = webpackConfigProducer({		// <<- `withTwin` 함수 적용
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  assetPrefix,
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
});

module.exports = nextConfig
