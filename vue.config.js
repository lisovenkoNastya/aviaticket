module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/aviaticket/' : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/variables.scss";',
      },
    },
  },
};
