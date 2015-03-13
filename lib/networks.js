var DEFAULT_KEY = 'default';
var DB = require('./_networks-db');

var KEYS = Object.keys(DB);
var KEYS_REGEX = new RegExp(`.*(${KEYS.join('|')}).*`);

const iconFor = (key) => {
  return DB[key] ? DB[key].icon : null;
};

const maskFor = (key) => {
  return DB[key] ? DB[key].mask : null;
};

const keyFor = (url) => {
  if (!url) return DEFAULT_KEY;

  var key = url.replace(KEYS_REGEX, '$1');
  return key === url ? DEFAULT_KEY : key;
};

const keysFor = (urls) => {
  if (!urls || !Array.isArray(urls) || urls.length === 0) return [];

  return urls.map(keyFor);
};

exports.iconFor = iconFor
exports.maskFor = maskFor
exports.keyFor = keyFor
exports.keysFor = keysFor