module.exports = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
	  "@babel/preset-env",
	  "@babel/preset-react"	  
  ].map(require.resolve),
  plugins: [
    "syntax-jsx",
    "transform-react-jsx",
    "transform-react-display-name"
  ].map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }]
  ])
};
