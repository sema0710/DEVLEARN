// eslint-disable-next-line no-undef
module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.png$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['url-loader'],
      },
    );

    return config;
  },
};
