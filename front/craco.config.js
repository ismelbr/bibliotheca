const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@logos': path.resolve(__dirname, process.env.REACT_APP_LOGO_DIR),
      '@biblologo': path.resolve(__dirname, process.env.REACT_APP_LOGO),
    },
  },
};
