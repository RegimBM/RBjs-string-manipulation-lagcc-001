'use strict';

var encoder = function(phrase){
  var encoded = phrase;

  encoded = encoded.replace(/a/g, '1');
  encoded = encoded.replace(/b/g, '2');
  encoded = encoded.replace(/c/g, '3');
  encoded = encoded.replace(/d/g, '4');
  encoded = encoded.replace(/e/g, '5');
  encoded = encoded.replace(/f/g, '6');
  encoded = encoded.replace(/g/g, '7');
  encoded = encoded.replace(/z/g, '8');
  encoded = encoded.replace(/ /gi, '$');

  encoded =encoded .split('').reverse().join('');

  return encoded;

};

module.exports = encoder;
