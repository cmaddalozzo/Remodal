// package metadata file for Meteor.js
'use strict';

var packageName = 'remodal:remodal';  // https://atmospherejs.com/hammer/hammer
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'Remodal - Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal.',
  version: packageJson.version,
  git: 'https://github.com/VodkaBears/Remodal.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.use('jquery', 'client');
  api.addFiles([
      'dist/remodal.js',
      'dist/remodal.css',
      'dist/remodal-default-theme.css',
    ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
