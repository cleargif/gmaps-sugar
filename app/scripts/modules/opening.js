/*global $, jQuery, alert, require, window, Backbone, define, Handlebars */
/*jslint browser:true, devel:true, unused:false */

define([
  'backbone'
],

function(Backbone) {
  'use strict';

  var Opening = {};

  Opening.View = Backbone.View.extend({

    render: function () {
      console.log('opening view render');
    }

  });

  return Opening;

});