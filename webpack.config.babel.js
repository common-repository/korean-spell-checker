/* eslint-disable */
import path from 'path';
import merge from 'webpack-merge';
import parts from './webpack.config.parts';

const dist = path.resolve(__dirname, 'assets', 'dist');

const config = [
  merge.smart(
    {
      // Entry points, resolver path, and output path
      entry: {
        script: path.resolve(__dirname, 'assets', 'scripts', 'korean-spell-checker.js'),
        gutenberg: path.resolve(__dirname, 'assets', 'scripts', 'gutenberg.js'),
        style: path.resolve(__dirname, 'assets', 'scss', 'style.scss'),
      },
    },
    parts.setBase(dist),
    parts.setResolve(),
    parts.clean([], dist),
  ),
];

module.exports = config;
