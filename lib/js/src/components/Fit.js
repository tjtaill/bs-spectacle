// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Spectacle   = require("spectacle");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

function make(children) {
  var partial_arg = Spectacle.Fit;
  return (function (param) {
      var param$1 = param;
      var param$2 = children;
      return ReasonReact.wrapJsForReason(partial_arg, param$1, param$2);
    });
}

exports.make = make;
/* spectacle Not a pure module */