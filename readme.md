# Laravel Elixir

## Introduction

Laravel Elixir provides a clean, fluent API for defining basic Gulp tasks for your Laravel application. Elixir supports several common CSS and JavaScript pre-processors, and even testing tools.

If you've ever been confused about how to get started with Gulp and asset compliation, you will love Laravel Elixir!

## Official Documentation

Documentation for Elixir can be found on the [Laravel website](http://laravel.com/docs/elixir).

## Recipes

### copyFiles

Copy every png images to the css directory using copyFiles.

```javascript
elixir(function (mix) {
    mix.copyFiles('*.png', './public/css');
});
```

### asyncGroup (_BETA_)

Add recipes to elixir to execute them asynchronous. Example below

```javascript
elixir(function (mix) {
    mix.asyncGroup(function (async) {
            async.browserify('**/*.js')
                .imagemin();
        })
        .sass('**/*.scss');
});
```

This will execute browserify and imagemin asynchronously. When this group has
finished running it will execute the sass task.

### License

Laravel Elixir is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
