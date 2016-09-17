# soyidom

> A NodeJS module wrapper for [SoyToIncrementalDomSrcCompiler.jar](https://github.com/google/closure-templates/blob/master/java/src/com/google/template/soy/SoyToIncrementalDomSrcCompiler.java)

## Install
```bash
npm i --save soyidom
```

## Usage
```js
var soyidom = require('soyidom');

soyidom.compile({
  srcs: 'hello.soy',
  outputPathFormat: 'hello.js'
}).then(function () {
  console.log('done');
});
```

Input (hello.soy)
```soy
{namespace examples}

/**
 * Says hello to a person.
 * @param name The name of the person to say hello to.
 */
{template .hello}
  Hello {$name}!
{/template}
```

Output (hello.js)
```js
// This file was automatically generated from hello.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace examples.
 * @public
 */

goog.module('examples.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $hello(opt_data, opt_ignored, opt_ijData) {
  itext('Hello ');
  var dyn0 = opt_data.name;
  if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
  itext('!');
}
exports.hello = $hello;
if (goog.DEBUG) {
  $hello.soyTemplateName = 'examples.hello';
}
```
