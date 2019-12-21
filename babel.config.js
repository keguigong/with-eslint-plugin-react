// babel.config.js
module.exports = {
  presets: [
    //babel-jest
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    //jsx
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true
      }
    ]
  ]
}