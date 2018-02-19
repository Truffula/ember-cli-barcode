/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-barcode',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/jsbarcode.all.js');
  },

  treeForVendor(vendorTree) {    
    var jsbarcodeTree = new Funnel(path.dirname(require.resolve('jsbarcode/dist/jsbarcode.all.js')), {
      files: ['jsbarcode.all.js'],
    });

    return new MergeTrees([vendorTree, jsbarcodeTree]);
  },

  isDevelopingAddon() {
    return true;
  }
};