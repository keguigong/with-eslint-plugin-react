// next.config.js
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withImages = require('next-images')
require('dotenv').config()

const serverPrefix = (env = process.env.WELKIN_ENV) => {
  switch (env) {
    case 'dev':
      return '10.110.18.244'
    case 'test':
      return '10.125.130.246'
    case 'stg':
      return '10.110.93.35'
    case 'pro':
      return '10.128.144.213'
    default:
      return '10.110.93.35'
  }
}

module.exports = withMDX(withImages(withLess(withCSS({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  env: {
    WELKIN_ENV: process.env.WELKIN_ENV,
    SERVER_URL: `http://${serverPrefix()}:8083`,
    WEBSOCKET: process.env.WELKIN_ENV === 'dev' ? 'http://10.110.93.35:8082/ws' : `http://${serverPrefix()}:8082/ws`,
    HISTORY: `http://${serverPrefix()}:1989`,
  }
}))))