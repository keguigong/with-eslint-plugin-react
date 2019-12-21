# Changelog

- Add `__test__` folder for jest testing
- Add `actions.text.js` and `color.text.js` for testing redux
- Add `babel.config.js`
  
  ```javascript
  //babel.config.js
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
      ['@babel/preset-react']
    ],
  }
  ```