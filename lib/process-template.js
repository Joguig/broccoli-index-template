/* jshint node: true */
'use strict';

var Filter = require('broccoli-filter'),
  Handlebars = require('handlebars');

var UpdateRemotes = function(inputTree, options) {
  if (!(this instanceof UpdateRemotes)) {
    return new UpdateRemotes(inputTree, options);
  }
  
  options = options || {}; 

  this.data = options.data;

  Filter.call(this, inputTree, options);
};

UpdateRemotes.prototype = Object.create(Filter.prototype);
UpdateRemotes.prototype.consturctor = UpdateRemotes;

UpdateRemotes.prototype.processString = function (string, relativePath) {
  var template = Handlebars.compile(string);

  return template(this.data);
};

module.exports = UpdateRemotes;
