const path = require('path');
const env = require('dotenv');
// const CompressionPlugin = require('compression-webpack-plugin');

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/


// Set base path if your static app does not start from root
const basePath = env.NODE_ENV === undefined ? '/wedding-marta-daniele' : ''; // '/wedding-marta-daniele'

// Set any other dynamic routes in pages
const dynamicRoutes = {
  // Pointing `/cute-cats` path to `pages/cats.js`
  // `pages/cats.js` will also serve `/cats` path 
  '/cute-cats': { page: '/cats' },
}

/*****************************************************************************
 *****************************************************************************/

module.exports = {
  publicRuntimeConfig: {
    basePath: basePath,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: basePath,
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