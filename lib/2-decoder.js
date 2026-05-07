'use strict';

var decoder = function(encoded){
  var decoded = encoded.split('').reverse().join('');

  decoded = decoded.replace(/1/g, 'a');
  decoded = decoded.replace(/2/g, 'b');
  decoded = decoded.replace(/3/g, 'c');
  decoded = decoded.replace(/4/g, 'd');
  decoded = decoded.replace(/5/g, 'e');
  decoded = decoded.replace(/6/g, 'f');
  decoded = decoded.replace(/7/g, 'g');
  decoded = decoded.replace(/8/g, 'z');
  decoded = decoded.replace(/\$/gi, ' ');

  
  return decoded;
};

module.exports = decoder;

