// eslint-disable-next-line no-undef
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(tsx|ts)x?$/,
      },
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
