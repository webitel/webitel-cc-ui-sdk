module.exports = {
    publicPath: '/',
    // transpileDependencies: ['@webitel/ui-sdk/src'],
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
              implementation: require('sass'),
              prependData: `
                      @import '@/css/main.scss';
                    `,
            },
        },
    },
    chainWebpack: (config) => {
      config.module
        .rule('svg')
        .exclude.add(/^(.*sprite).*\.svg/); // same as in svg-sprite-loader

      config.module
        .rule('svg-sprite')
        .test(/^(.*sprite).*\.svg/) // same as in svg-url-loader
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader');
    },
};
