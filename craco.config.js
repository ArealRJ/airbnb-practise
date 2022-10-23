const path = require('path');
const CracoLessPlugin = require('craco-less');
const BabelPluginStyledWindicss = require('babel-plugin-styled-windicss');


const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  babel:{
    plugins: [['babel-plugin-styled-windicss', {preprocess: true}]]
  },
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      // options: {
      //   lessLoaderOptions: {
      //     lessOptions: {
      //       modifyVars: { '@primary-color': '#1DA57A' },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
    {
      plugin: BabelPluginStyledWindicss,
    }
  ],
  // webpack
  webpack: {
    alias:{
      '@': resolve('src'),
      "components":resolve('src/components'),
      "utils":resolve('src/utils'),
      "hooks":resolve('src/hooks'),
      // '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  }
}