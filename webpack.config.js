const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

//const root    = path.resolve('.');
const root    = resolve(__dirname);

const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const getConfig = require('hjs-webpack');

const dotenv = require('dotenv');

const dotEnvVars = dotenv.config();

const environmentEnv = dotenv.config({
  path: join(root, 'config', `${NODE_ENV}.config.js`),
  silent: true,
});

const envVariables =
  Object.assign({}, dotEnvVars, environmentEnv);

const defines =
  Object.keys(envVariables)
  .reduce((memo, key) => {
    const val = JSON.stringify(envVariables[key]);
    memo[`__${key.toUpperCase()}__`] = val;
    return memo;
  }, {
    __NODE_ENV__: JSON.stringify(NODE_ENV)
  });

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})

module.exports = config;

config.plugins = [
  new webpack.DefinePlugin(defines)
].concat(config.plugins);

const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

/*
// TODO filter undefined, something todo with the array type
const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l &&
      l.loader && l.loader.match(match));
  return found ? found[0] : null;
}*/
/*
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);
*/

/*
const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader
    .replace(matchCssLoaders,
    `$1$2?modules&localIdentName=${cssModulesNames}$3`)
})
config.module.loaders.push(newloader);
cssloader.test =
  new RegExp(`[^module]${cssloader.test.source}`)
cssloader.loader = newloader.loader
*/

/*
config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
})*/

/*
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
])*/

