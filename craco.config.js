/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              'primary-color': '#41e0e8',
              'link-color': '#41e0e8',
              'border-radius-base': '5px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};