const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/aviaticket/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/variables.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.merge({
      resolve: {
        alias: {
          '@tests': path.resolve(__dirname, './tests'),
        },
      },
    });
  },
};
