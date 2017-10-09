//require('babel-polyfill');
// some setup first

const NODE_ENV = process.env.NODE_ENV;
const isDev  = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

var chai = require('chai');
//var chaiEnzyme = require('chai-enzyme');

//chai.use(chaiEnzyme())

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
