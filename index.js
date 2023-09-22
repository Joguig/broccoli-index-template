/* jshint node: true */
'use strict';

var processTemplate = require('./lib/process-template');

module.exports = {
  name: 'broccoli-index-template',
  initializeOptions: function() {
    var templateOptions = this.app.options.template || {};
    this.options = {
      extensions: templateOptions.extensions || ['html'],
      data: templateOptions.data || {},
    };
  },

  included: function(app) {
    this.app = app;
    this.initializeOptions();
  },

  postprocessTree: function(type, tree) {
    if (type === 'all') {
      tree = processTemplate(tree, this.options);
    }

    return tree;
  }
};
