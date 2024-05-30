const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'skilly-theme',
    getThemePath() {
      return path.resolve(__dirname, './theme');
    },
    getPathsToWatch() {
      return [path.resolve(__dirname, './theme')];
    },
  };
};
