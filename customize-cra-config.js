import { theme } from './src/config/theme/themeVariables';
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Desactivar el source-map-loader
      webpackConfig.module.rules = webpackConfig.module.rules.filter(
        (rule) => !(rule.loader && rule.loader.includes('source-map-loader'))
      );

      // Otras configuraciones de webpack
      webpackConfig.resolve = {
        fallback: {
          path: false,
        },
      };

      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...theme
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
