// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -922086728,
    "none"
  ],
  /* tuple */[
    -476456824,
    "pacman"
  ],
  /* tuple */[
    4895187,
    "bar"
  ],
  /* tuple */[
    561678025,
    "number"
  ]
];

function progressToJs(param) {
  return Js_mapperRt.binarySearch(4, param, jsMapperConstantArray);
}

function progressFromJs(param) {
  return Js_mapperRt.revSearch(4, jsMapperConstantArray, param);
}

var mapProgressToJs = progressToJs;

function transitionToJs(transition) {
  if (typeof transition === "number") {
    switch (transition) {
      case 0 : 
          return "slide";
      case 1 : 
          return "zoom";
      case 2 : 
          return "fade";
      case 3 : 
          return "spin";
      
    }
  } else {
    var f = transition[0];
    return (function (transitioning, forward) {
        return Curry._3(f, transitioning, forward, /* () */0);
      });
  }
}

function mapTransitionsToJs(transition) {
  return Js_option.map((function (transitions) {
                return $$Array.map(transitionToJs, transitions);
              }), transition);
}

exports.progressToJs = progressToJs;
exports.progressFromJs = progressFromJs;
exports.mapProgressToJs = mapProgressToJs;
exports.transitionToJs = transitionToJs;
exports.mapTransitionsToJs = mapTransitionsToJs;
/* No side effect */
