"use strict";

var loadPlugins = require('gulp-load-plugins');

var Elixir = function (recipe) {
    require('require-dir')('./ingredients');
    recipe(Elixir.config);
};

Elixir.config = require('./Config');
Elixir.config.setDefaultsFrom('elixir.json');
Elixir.plugins = loadPlugins();
Elixir._ = require('underscore');

Elixir.extend = function (name, callback) {
    Elixir.config[name] = callback;
};

module.exports = Elixir;
