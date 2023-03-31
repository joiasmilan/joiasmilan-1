// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/alpix/APrices.html'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/alpix/APrices.js'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/alpix/TheProduct.html'),
      
    }
  }
})
