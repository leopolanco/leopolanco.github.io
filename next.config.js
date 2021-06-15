module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.glsl$/,
      loader: 'webpack-glsl-loader'
    })
    return config
  },
  future: {
    webpack5: true
  }
}
