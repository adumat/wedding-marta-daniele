const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

// Set base path if your static app does not start from root
const basePath = '/wedding-marta-daniele'; // '/wedding-marta-daniele'

// Set any other dynamic routes in pages
const dynamicRoutes = {
  // Pointing `/cute-cats` path to `pages/cats.js`
  // `pages/cats.js` will also serve `/cats` path 
  '/cute-cats': { page: '/cats' },
}

/*****************************************************************************
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : ''

module.exports = {
  publicRuntimeConfig: {
    basePath: webpackBasePath,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: webpackBasePath,
  exportPathMap: async function(defaultPathMap) {
    return Object.assign({}, defaultPathMap, dynamicRoutes);
  },
  webpack: function(config) {
    // config.module.rules.push({
    //   test: /\.(png|jpg|jpeg|ico|gif|svg|gif)$/i,
    //   use: [
    //     {
    //       loader: "url-loader",
    //       options: {
    //         limit: 8192,
    //       },
    //     },
    //   ],
    // });

    // config.plugins.push(new CompressionPlugin());

    return config;
  }
};