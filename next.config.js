// next.config.js
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withMDX = require('@next/mdx')

module.exports = withCSS(withFonts(withMDX()))