// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function extendProps(italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, moreProps) {
  var tmp = { };
  if (italic !== undefined) {
    tmp.italic = Js_primitive.valFromOption(italic);
  }
  if (bold !== undefined) {
    tmp.bold = Js_primitive.valFromOption(bold);
  }
  if (caps !== undefined) {
    tmp.caps = Js_primitive.valFromOption(caps);
  }
  if (margin !== undefined) {
    tmp.margin = Js_primitive.valFromOption(margin);
  }
  if (padding !== undefined) {
    tmp.padding = Js_primitive.valFromOption(padding);
  }
  if (textColor !== undefined) {
    tmp.textColor = Js_primitive.valFromOption(textColor);
  }
  if (textSize !== undefined) {
    tmp.textSize = Js_primitive.valFromOption(textSize);
  }
  if (textAlign !== undefined) {
    tmp.textAlign = Js_primitive.valFromOption(textAlign);
  }
  if (textFont !== undefined) {
    tmp.textFont = Js_primitive.valFromOption(textFont);
  }
  if (bgColor !== undefined) {
    tmp.bgColor = Js_primitive.valFromOption(bgColor);
  }
  if (bgImage !== undefined) {
    tmp.bgImage = Js_primitive.valFromOption(bgImage);
  }
  if (bgSize !== undefined) {
    tmp.bgSize = Js_primitive.valFromOption(bgSize);
  }
  if (bgPosition !== undefined) {
    tmp.bgPosition = Js_primitive.valFromOption(bgPosition);
  }
  if (bgRepeat !== undefined) {
    tmp.bgRepeat = Js_primitive.valFromOption(bgRepeat);
  }
  if (bgDarken !== undefined) {
    tmp.bgDarken = Js_primitive.valFromOption(bgDarken);
  }
  if (overflow !== undefined) {
    tmp.overflow = Js_primitive.valFromOption(overflow);
  }
  if (height !== undefined) {
    tmp.height = Js_primitive.valFromOption(height);
  }
  return Object.assign({ }, tmp, moreProps);
}

function MakeBaseComponent(BaseComponent) {
  var make = function (italic, bold, caps, margin, padding, textColor, textSize, textAlign, textFont, bgColor, bgImage, bgSize, bgPosition, bgRepeat, bgDarken, overflow, height, children) {
    var tmp = { };
    if (italic !== undefined) {
      tmp.italic = Js_primitive.valFromOption(italic);
    }
    if (bold !== undefined) {
      tmp.bold = Js_primitive.valFromOption(bold);
    }
    if (caps !== undefined) {
      tmp.caps = Js_primitive.valFromOption(caps);
    }
    if (margin !== undefined) {
      tmp.margin = Js_primitive.valFromOption(margin);
    }
    if (padding !== undefined) {
      tmp.padding = Js_primitive.valFromOption(padding);
    }
    if (textColor !== undefined) {
      tmp.textColor = Js_primitive.valFromOption(textColor);
    }
    if (textSize !== undefined) {
      tmp.textSize = Js_primitive.valFromOption(textSize);
    }
    if (textAlign !== undefined) {
      tmp.textAlign = Js_primitive.valFromOption(textAlign);
    }
    if (textFont !== undefined) {
      tmp.textFont = Js_primitive.valFromOption(textFont);
    }
    if (bgColor !== undefined) {
      tmp.bgColor = Js_primitive.valFromOption(bgColor);
    }
    if (bgImage !== undefined) {
      tmp.bgImage = Js_primitive.valFromOption(bgImage);
    }
    if (bgSize !== undefined) {
      tmp.bgSize = Js_primitive.valFromOption(bgSize);
    }
    if (bgPosition !== undefined) {
      tmp.bgPosition = Js_primitive.valFromOption(bgPosition);
    }
    if (bgRepeat !== undefined) {
      tmp.bgRepeat = Js_primitive.valFromOption(bgRepeat);
    }
    if (bgDarken !== undefined) {
      tmp.bgDarken = Js_primitive.valFromOption(bgDarken);
    }
    if (overflow !== undefined) {
      tmp.overflow = Js_primitive.valFromOption(overflow);
    }
    if (height !== undefined) {
      tmp.height = Js_primitive.valFromOption(height);
    }
    return ReasonReact.wrapJsForReason(BaseComponent[/* reactClass */0], tmp, children);
  };
  return /* module */[/* make */make];
}

exports.extendProps = extendProps;
exports.MakeBaseComponent = MakeBaseComponent;
/* ReasonReact Not a pure module */
