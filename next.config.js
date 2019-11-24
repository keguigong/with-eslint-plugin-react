// next.config.js
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withImages = require('next-images')

module.exports = withMDX(withCSS(withFonts(withImages(
  {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ]
    }
  }
))))