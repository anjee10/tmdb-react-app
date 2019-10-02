import { configure } from '@storybook/react';

let req;

if (process.env.NODE_ENV === 'test') {
  req = require('require-all')({
    dirname: `${__dirname}/..`,
    filter: /(.+stories)\.js$/,
    excludeDirs: /^\.(git|svn)$/,
    recursive: true
  });
} else {
  req = require.context('../', true, /.*\.stories.js$/);
}

function loadStories () {
  if (process.env.NODE_ENV === 'test') {
    Object.keys(req).forEach(filename => req[filename]);
  } else {
    req.keys().forEach(filename => req(filename));
  }
}

configure(loadStories, module);
