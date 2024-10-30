/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/gutenberg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/gutenberg.js":
/*!*************************************!*\
  !*** ./assets/scripts/gutenberg.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koreanSpellChecker = __webpack_require__(/*! ./korean-spell-checker */ "./assets/scripts/korean-spell-checker.js");

var _koreanSpellChecker2 = _interopRequireDefault(_koreanSpellChecker);

var _icon = __webpack_require__(/*! ./icon */ "./assets/scripts/icon.jsx");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (wp) {
  var withSelect = wp.data.withSelect;
  var _wp$compose = wp.compose,
      ifCondition = _wp$compose.ifCondition,
      compose = _wp$compose.compose;
  var createElement = wp.element.createElement;


  var Component = function Component(props) {
    return createElement(wp.editor.RichTextToolbarButton, {
      icon: (0, _icon2.default)(),
      title: '한글 맞춤법 검사기',
      onClick: function onClick() {
        (0, _koreanSpellChecker2.default)(props.selectedBlock.attributes.content);
      }
    });
  };

  var Container = compose(withSelect(function (select) {
    return {
      selectedBlock: select('core/editor').getSelectedBlock()
    };
  }), ifCondition(function (props) {
    return props.selectedBlock && props.selectedBlock.name === 'core/paragraph';
  }))(Component);

  wp.richText.registerFormatType('korean-spell-checer/check-spell', {
    title: '한글 맞춤법 검사기',
    tagName: 'check-spell',
    className: null,
    edit: Container
  });
})(window.wp);

/***/ }),

/***/ "./assets/scripts/icon.jsx":
/*!*********************************!*\
  !*** ./assets/scripts/icon.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIcon;
function getIcon() {
  var _window$wp$components = window.wp.components,
      SVG = _window$wp$components.SVG,
      Path = _window$wp$components.Path;

  /* eslint-disable */

  var icon = wp.element.createElement(
    SVG,
    { className: "korean-spell-checker-icon", xmlns: "http://www.w3.org/2000/svg", width: "452px", height: "452px", viewBox: "0 0 452 452" },
    wp.element.createElement(Path, { d: "M446.907,318.833 C443.838,319.861 438.516,320.371 430.945,320.371 L350.060,320.371 C343.402,320.371 338.830,317.850 336.351,312.800 C334.784,309.647 334.001,305.229 334.001,299.550 L334.001,243.003 C334.001,239.376 330.702,236.105 324.111,233.184 C317.516,230.267 314.220,228.334 314.220,227.387 C314.220,226.286 314.970,225.376 316.473,224.667 C317.972,223.957 320.224,223.602 323.229,223.602 C327.406,223.602 331.388,223.997 335.176,224.785 C339.093,225.890 343.074,226.914 347.123,227.861 L370.037,227.861 C377.087,227.861 385.509,226.877 395.301,224.903 C405.093,222.933 415.146,220.844 425.462,218.633 C429.115,218.633 431.891,219.225 433.785,220.408 C435.676,221.591 436.625,223.602 436.625,226.441 C436.625,228.807 435.906,230.622 434.471,231.883 C433.032,233.147 430.226,233.776 426.049,233.776 L391.384,235.195 L346.339,238.034 L346.339,304.046 C346.339,305.939 346.829,307.795 347.808,309.606 C348.787,311.421 349.797,312.327 350.844,312.327 L402.939,312.327 C407.508,312.327 414.298,310.593 423.307,307.122 C427.876,305.388 432.053,304.519 435.842,304.519 C440.019,304.519 443.675,305.033 446.809,306.057 C449.943,307.085 451.509,309.173 451.509,312.327 C451.509,315.639 449.973,317.809 446.907,318.833 ZM99.000,-0.000 L203.000,98.000 L418.000,7.000 L182.000,161.000 L99.000,-0.000 ZM113.398,218.160 C115.748,218.160 117.673,218.556 119.176,219.343 C120.675,220.134 121.428,221.554 121.428,223.602 C121.428,225.180 121.165,226.678 120.645,228.097 C119.206,232.042 118.490,234.881 118.490,236.615 L118.490,287.484 C117.835,294.268 117.184,300.970 116.532,307.595 C114.965,319.111 112.939,324.867 110.461,324.867 C108.762,324.867 107.553,323.528 106.837,320.845 C106.118,318.164 105.760,314.615 105.760,310.197 L105.760,228.334 L96.555,228.334 L47.202,231.883 L19.587,236.615 C17.366,236.615 14.364,235.395 10.578,232.948 C6.790,230.504 3.332,227.387 0.198,223.602 L0.198,221.236 L3.136,221.236 C6.270,221.236 8.880,221.472 10.970,221.946 C13.057,222.419 14.428,222.655 15.083,222.655 L57.190,222.655 C57.319,222.500 65.024,221.709 80.300,220.289 C85.392,219.816 93.094,219.106 103.410,218.160 L113.398,218.160 ZM157.111,224.075 C158.678,223.447 160.569,223.129 162.791,223.129 C172.452,223.129 179.371,223.997 183.551,225.731 C186.553,226.996 188.055,228.729 188.055,230.936 L186.684,264.297 L186.684,302.153 C186.684,303.891 187.303,305.347 188.545,306.530 C189.784,307.713 191.057,308.305 192.364,308.305 L241.326,308.305 C243.413,308.305 246.810,307.477 251.510,305.820 C256.210,304.164 260.975,302.471 265.807,300.733 L277.753,300.733 C280.495,300.733 283.008,301.443 285.294,302.863 C287.576,304.282 288.721,306.257 288.721,308.778 C288.721,311.303 287.674,313.155 285.587,314.338 C283.497,315.521 281.279,316.113 278.929,316.113 L188.447,316.113 C183.092,316.113 179.273,313.865 176.990,309.369 C174.704,304.874 173.563,299.395 173.563,292.926 L173.563,251.757 C173.563,246.238 173.333,242.412 172.877,240.282 C172.418,238.153 171.017,236.301 168.666,234.722 C165.401,232.356 162.268,230.663 159.266,229.635 C156.261,228.611 154.761,227.546 154.761,226.441 C154.761,225.495 155.545,224.707 157.111,224.075 Z" })
  );
  /* eslint-enable */

  return icon;
}

/***/ }),

/***/ "./assets/scripts/korean-spell-checker.js":
/*!************************************************!*\
  !*** ./assets/scripts/korean-spell-checker.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openSpeller;
function openSpeller(text) {
  jQuery('<form />', {
    id: 'korean_spell_checker',
    target: '_blank',
    action: 'http://speller.cs.pusan.ac.kr/results',
    method: 'post',
    html: '<textarea name="text1"></textarea>'
  }).appendTo('body');

  jQuery('form#korean_spell_checker textarea').html(text);
  jQuery('form#korean_spell_checker').submit();
  jQuery('form#korean_spell_checker').remove();
}

jQuery(document).ready(function () {
  window.tinymce.create('tinymce.plugins.koreanSpellChecker', {
    init: function init(editor) {
      editor.addCommand('open_korean_spell_checker', function () {
        var text = editor.getContent({ format: 'text' });
        openSpeller(text);
      });

      // Register buttons
      editor.addButton('korean-spell-checker', {
        title: '한국어 맞춤법 검사기를 열어요.',
        cmd: 'open_korean_spell_checker'
      });
    },
    getInfo: function getInfo() {
      return {
        longname: 'Korean Spell Checker',
        author: 'sujin',
        authorurl: 'http://www.sujinc.com',
        infourl: '',
        version: '1.0'
      };
    }
  });

  // Register plugin
  window.tinymce.PluginManager.add('korean-spell-checker', window.tinymce.plugins.koreanSpellChecker);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZ3V0ZW5iZXJnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2ljb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2tvcmVhbi1zcGVsbC1jaGVja2VyLmpzIl0sIm5hbWVzIjpbIndwIiwid2l0aFNlbGVjdCIsImRhdGEiLCJjb21wb3NlIiwiaWZDb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsIkNvbXBvbmVudCIsImVkaXRvciIsIlJpY2hUZXh0VG9vbGJhckJ1dHRvbiIsImljb24iLCJ0aXRsZSIsIm9uQ2xpY2siLCJwcm9wcyIsInNlbGVjdGVkQmxvY2siLCJhdHRyaWJ1dGVzIiwiY29udGVudCIsIkNvbnRhaW5lciIsInNlbGVjdCIsImdldFNlbGVjdGVkQmxvY2siLCJuYW1lIiwicmljaFRleHQiLCJyZWdpc3RlckZvcm1hdFR5cGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiZWRpdCIsIndpbmRvdyIsImdldEljb24iLCJjb21wb25lbnRzIiwiU1ZHIiwiUGF0aCIsIm9wZW5TcGVsbGVyIiwidGV4dCIsImpRdWVyeSIsImlkIiwidGFyZ2V0IiwiYWN0aW9uIiwibWV0aG9kIiwiaHRtbCIsImFwcGVuZFRvIiwic3VibWl0IiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRpbnltY2UiLCJjcmVhdGUiLCJpbml0IiwiYWRkQ29tbWFuZCIsImdldENvbnRlbnQiLCJmb3JtYXQiLCJhZGRCdXR0b24iLCJjbWQiLCJnZXRJbmZvIiwibG9uZ25hbWUiLCJhdXRob3IiLCJhdXRob3J1cmwiLCJpbmZvdXJsIiwidmVyc2lvbiIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJwbHVnaW5zIiwia29yZWFuU3BlbGxDaGVja2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QU5ILENBTVksTUFOWjs7QUFRQU4sU0FBTyxvQ0FBUCxFQUE2Q0ssSUFBN0MsQ0FBa0ROLElBQWxEO0FBQ0FDLFNBQU8sMkJBQVAsRUFBb0NPLE1BQXBDO0FBQ0FQLFNBQU8sMkJBQVAsRUFBb0NRLE1BQXBDO0FBQ0Q7O0FBRURSLE9BQU9TLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFlBQU07QUFDM0JqQixTQUFPa0IsT0FBUCxDQUFlQyxNQUFmLENBQXNCLG9DQUF0QixFQUE0RDtBQUMxREMsVUFBTSxjQUFDdEMsTUFBRCxFQUFZO0FBQ2hCQSxhQUFPdUMsVUFBUCxDQUFrQiwyQkFBbEIsRUFBK0MsWUFBTTtBQUNuRCxZQUFNZixPQUFPeEIsT0FBT3dDLFVBQVAsQ0FBa0IsRUFBRUMsUUFBUSxNQUFWLEVBQWxCLENBQWI7QUFDQWxCLG9CQUFZQyxJQUFaO0FBQ0QsT0FIRDs7QUFLQTtBQUNBeEIsYUFBTzBDLFNBQVAsQ0FBaUIsc0JBQWpCLEVBQXlDO0FBQ3ZDdkMsZUFBTyxtQkFEZ0M7QUFFdkN3QyxhQUFLO0FBRmtDLE9BQXpDO0FBSUQsS0FaeUQ7QUFhMURDLGFBQVM7QUFBQSxhQUFPO0FBQ2RDLGtCQUFVLHNCQURJO0FBRWRDLGdCQUFRLE9BRk07QUFHZEMsbUJBQVcsdUJBSEc7QUFJZEMsaUJBQVMsRUFKSztBQUtkQyxpQkFBUztBQUxLLE9BQVA7QUFBQTtBQWJpRCxHQUE1RDs7QUFzQkE7QUFDQS9CLFNBQU9rQixPQUFQLENBQWVjLGFBQWYsQ0FBNkJDLEdBQTdCLENBQ0Usc0JBREYsRUFFRWpDLE9BQU9rQixPQUFQLENBQWVnQixPQUFmLENBQXVCQyxrQkFGekI7QUFJRCxDQTVCRCxFIiwiZmlsZSI6Imd1dGVuYmVyZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NjcmlwdHMvZ3V0ZW5iZXJnLmpzXCIpO1xuIiwiaW1wb3J0IG9wZW5TcGVsbGVyIGZyb20gJy4va29yZWFuLXNwZWxsLWNoZWNrZXInO1xuaW1wb3J0IGdldEljb24gZnJvbSAnLi9pY29uJztcblxuKCh3cCkgPT4ge1xuICBjb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG4gIGNvbnN0IHsgaWZDb25kaXRpb24sIGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XG4gIGNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudDtcblxuICBjb25zdCBDb21wb25lbnQgPSBwcm9wcyA9PiAoXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIHdwLmVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sIHtcbiAgICAgICAgaWNvbjogZ2V0SWNvbigpLFxuICAgICAgICB0aXRsZTogJ+2VnOq4gCDrp57stqTrspUg6rKA7IKs6riwJyxcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIG9wZW5TcGVsbGVyKHByb3BzLnNlbGVjdGVkQmxvY2suYXR0cmlidXRlcy5jb250ZW50KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKVxuICApO1xuXG4gIGNvbnN0IENvbnRhaW5lciA9IGNvbXBvc2UoXG4gICAgd2l0aFNlbGVjdChzZWxlY3QgPT4gKHtcbiAgICAgIHNlbGVjdGVkQmxvY2s6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRTZWxlY3RlZEJsb2NrKCksXG4gICAgfSkpLFxuICAgIGlmQ29uZGl0aW9uKHByb3BzID0+IHByb3BzLnNlbGVjdGVkQmxvY2sgJiYgcHJvcHMuc2VsZWN0ZWRCbG9jay5uYW1lID09PSAnY29yZS9wYXJhZ3JhcGgnKSxcbiAgKShDb21wb25lbnQpO1xuXG4gIHdwLnJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZShcbiAgICAna29yZWFuLXNwZWxsLWNoZWNlci9jaGVjay1zcGVsbCcsIHtcbiAgICAgIHRpdGxlOiAn7ZWc6riAIOunnuy2pOuylSDqsoDsgqzquLAnLFxuICAgICAgdGFnTmFtZTogJ2NoZWNrLXNwZWxsJyxcbiAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgIGVkaXQ6IENvbnRhaW5lcixcbiAgICB9LFxuICApO1xufSkod2luZG93LndwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEljb24oKSB7XG4gIGNvbnN0IHsgU1ZHLCBQYXRoIH0gPSB3aW5kb3cud3AuY29tcG9uZW50cztcblxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBjb25zdCBpY29uID0gKFxuICAgIDxTVkcgY2xhc3NOYW1lPVwia29yZWFuLXNwZWxsLWNoZWNrZXItaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ1MnB4XCIgaGVpZ2h0PVwiNDUycHhcIiB2aWV3Qm94PVwiMCAwIDQ1MiA0NTJcIj5cbiAgICAgIDxQYXRoIGQ9XCJNNDQ2LjkwNywzMTguODMzIEM0NDMuODM4LDMxOS44NjEgNDM4LjUxNiwzMjAuMzcxIDQzMC45NDUsMzIwLjM3MSBMMzUwLjA2MCwzMjAuMzcxIEMzNDMuNDAyLDMyMC4zNzEgMzM4LjgzMCwzMTcuODUwIDMzNi4zNTEsMzEyLjgwMCBDMzM0Ljc4NCwzMDkuNjQ3IDMzNC4wMDEsMzA1LjIyOSAzMzQuMDAxLDI5OS41NTAgTDMzNC4wMDEsMjQzLjAwMyBDMzM0LjAwMSwyMzkuMzc2IDMzMC43MDIsMjM2LjEwNSAzMjQuMTExLDIzMy4xODQgQzMxNy41MTYsMjMwLjI2NyAzMTQuMjIwLDIyOC4zMzQgMzE0LjIyMCwyMjcuMzg3IEMzMTQuMjIwLDIyNi4yODYgMzE0Ljk3MCwyMjUuMzc2IDMxNi40NzMsMjI0LjY2NyBDMzE3Ljk3MiwyMjMuOTU3IDMyMC4yMjQsMjIzLjYwMiAzMjMuMjI5LDIyMy42MDIgQzMyNy40MDYsMjIzLjYwMiAzMzEuMzg4LDIyMy45OTcgMzM1LjE3NiwyMjQuNzg1IEMzMzkuMDkzLDIyNS44OTAgMzQzLjA3NCwyMjYuOTE0IDM0Ny4xMjMsMjI3Ljg2MSBMMzcwLjAzNywyMjcuODYxIEMzNzcuMDg3LDIyNy44NjEgMzg1LjUwOSwyMjYuODc3IDM5NS4zMDEsMjI0LjkwMyBDNDA1LjA5MywyMjIuOTMzIDQxNS4xNDYsMjIwLjg0NCA0MjUuNDYyLDIxOC42MzMgQzQyOS4xMTUsMjE4LjYzMyA0MzEuODkxLDIxOS4yMjUgNDMzLjc4NSwyMjAuNDA4IEM0MzUuNjc2LDIyMS41OTEgNDM2LjYyNSwyMjMuNjAyIDQzNi42MjUsMjI2LjQ0MSBDNDM2LjYyNSwyMjguODA3IDQzNS45MDYsMjMwLjYyMiA0MzQuNDcxLDIzMS44ODMgQzQzMy4wMzIsMjMzLjE0NyA0MzAuMjI2LDIzMy43NzYgNDI2LjA0OSwyMzMuNzc2IEwzOTEuMzg0LDIzNS4xOTUgTDM0Ni4zMzksMjM4LjAzNCBMMzQ2LjMzOSwzMDQuMDQ2IEMzNDYuMzM5LDMwNS45MzkgMzQ2LjgyOSwzMDcuNzk1IDM0Ny44MDgsMzA5LjYwNiBDMzQ4Ljc4NywzMTEuNDIxIDM0OS43OTcsMzEyLjMyNyAzNTAuODQ0LDMxMi4zMjcgTDQwMi45MzksMzEyLjMyNyBDNDA3LjUwOCwzMTIuMzI3IDQxNC4yOTgsMzEwLjU5MyA0MjMuMzA3LDMwNy4xMjIgQzQyNy44NzYsMzA1LjM4OCA0MzIuMDUzLDMwNC41MTkgNDM1Ljg0MiwzMDQuNTE5IEM0NDAuMDE5LDMwNC41MTkgNDQzLjY3NSwzMDUuMDMzIDQ0Ni44MDksMzA2LjA1NyBDNDQ5Ljk0MywzMDcuMDg1IDQ1MS41MDksMzA5LjE3MyA0NTEuNTA5LDMxMi4zMjcgQzQ1MS41MDksMzE1LjYzOSA0NDkuOTczLDMxNy44MDkgNDQ2LjkwNywzMTguODMzIFpNOTkuMDAwLC0wLjAwMCBMMjAzLjAwMCw5OC4wMDAgTDQxOC4wMDAsNy4wMDAgTDE4Mi4wMDAsMTYxLjAwMCBMOTkuMDAwLC0wLjAwMCBaTTExMy4zOTgsMjE4LjE2MCBDMTE1Ljc0OCwyMTguMTYwIDExNy42NzMsMjE4LjU1NiAxMTkuMTc2LDIxOS4zNDMgQzEyMC42NzUsMjIwLjEzNCAxMjEuNDI4LDIyMS41NTQgMTIxLjQyOCwyMjMuNjAyIEMxMjEuNDI4LDIyNS4xODAgMTIxLjE2NSwyMjYuNjc4IDEyMC42NDUsMjI4LjA5NyBDMTE5LjIwNiwyMzIuMDQyIDExOC40OTAsMjM0Ljg4MSAxMTguNDkwLDIzNi42MTUgTDExOC40OTAsMjg3LjQ4NCBDMTE3LjgzNSwyOTQuMjY4IDExNy4xODQsMzAwLjk3MCAxMTYuNTMyLDMwNy41OTUgQzExNC45NjUsMzE5LjExMSAxMTIuOTM5LDMyNC44NjcgMTEwLjQ2MSwzMjQuODY3IEMxMDguNzYyLDMyNC44NjcgMTA3LjU1MywzMjMuNTI4IDEwNi44MzcsMzIwLjg0NSBDMTA2LjExOCwzMTguMTY0IDEwNS43NjAsMzE0LjYxNSAxMDUuNzYwLDMxMC4xOTcgTDEwNS43NjAsMjI4LjMzNCBMOTYuNTU1LDIyOC4zMzQgTDQ3LjIwMiwyMzEuODgzIEwxOS41ODcsMjM2LjYxNSBDMTcuMzY2LDIzNi42MTUgMTQuMzY0LDIzNS4zOTUgMTAuNTc4LDIzMi45NDggQzYuNzkwLDIzMC41MDQgMy4zMzIsMjI3LjM4NyAwLjE5OCwyMjMuNjAyIEwwLjE5OCwyMjEuMjM2IEwzLjEzNiwyMjEuMjM2IEM2LjI3MCwyMjEuMjM2IDguODgwLDIyMS40NzIgMTAuOTcwLDIyMS45NDYgQzEzLjA1NywyMjIuNDE5IDE0LjQyOCwyMjIuNjU1IDE1LjA4MywyMjIuNjU1IEw1Ny4xOTAsMjIyLjY1NSBDNTcuMzE5LDIyMi41MDAgNjUuMDI0LDIyMS43MDkgODAuMzAwLDIyMC4yODkgQzg1LjM5MiwyMTkuODE2IDkzLjA5NCwyMTkuMTA2IDEwMy40MTAsMjE4LjE2MCBMMTEzLjM5OCwyMTguMTYwIFpNMTU3LjExMSwyMjQuMDc1IEMxNTguNjc4LDIyMy40NDcgMTYwLjU2OSwyMjMuMTI5IDE2Mi43OTEsMjIzLjEyOSBDMTcyLjQ1MiwyMjMuMTI5IDE3OS4zNzEsMjIzLjk5NyAxODMuNTUxLDIyNS43MzEgQzE4Ni41NTMsMjI2Ljk5NiAxODguMDU1LDIyOC43MjkgMTg4LjA1NSwyMzAuOTM2IEwxODYuNjg0LDI2NC4yOTcgTDE4Ni42ODQsMzAyLjE1MyBDMTg2LjY4NCwzMDMuODkxIDE4Ny4zMDMsMzA1LjM0NyAxODguNTQ1LDMwNi41MzAgQzE4OS43ODQsMzA3LjcxMyAxOTEuMDU3LDMwOC4zMDUgMTkyLjM2NCwzMDguMzA1IEwyNDEuMzI2LDMwOC4zMDUgQzI0My40MTMsMzA4LjMwNSAyNDYuODEwLDMwNy40NzcgMjUxLjUxMCwzMDUuODIwIEMyNTYuMjEwLDMwNC4xNjQgMjYwLjk3NSwzMDIuNDcxIDI2NS44MDcsMzAwLjczMyBMMjc3Ljc1MywzMDAuNzMzIEMyODAuNDk1LDMwMC43MzMgMjgzLjAwOCwzMDEuNDQzIDI4NS4yOTQsMzAyLjg2MyBDMjg3LjU3NiwzMDQuMjgyIDI4OC43MjEsMzA2LjI1NyAyODguNzIxLDMwOC43NzggQzI4OC43MjEsMzExLjMwMyAyODcuNjc0LDMxMy4xNTUgMjg1LjU4NywzMTQuMzM4IEMyODMuNDk3LDMxNS41MjEgMjgxLjI3OSwzMTYuMTEzIDI3OC45MjksMzE2LjExMyBMMTg4LjQ0NywzMTYuMTEzIEMxODMuMDkyLDMxNi4xMTMgMTc5LjI3MywzMTMuODY1IDE3Ni45OTAsMzA5LjM2OSBDMTc0LjcwNCwzMDQuODc0IDE3My41NjMsMjk5LjM5NSAxNzMuNTYzLDI5Mi45MjYgTDE3My41NjMsMjUxLjc1NyBDMTczLjU2MywyNDYuMjM4IDE3My4zMzMsMjQyLjQxMiAxNzIuODc3LDI0MC4yODIgQzE3Mi40MTgsMjM4LjE1MyAxNzEuMDE3LDIzNi4zMDEgMTY4LjY2NiwyMzQuNzIyIEMxNjUuNDAxLDIzMi4zNTYgMTYyLjI2OCwyMzAuNjYzIDE1OS4yNjYsMjI5LjYzNSBDMTU2LjI2MSwyMjguNjExIDE1NC43NjEsMjI3LjU0NiAxNTQuNzYxLDIyNi40NDEgQzE1NC43NjEsMjI1LjQ5NSAxNTUuNTQ1LDIyNC43MDcgMTU3LjExMSwyMjQuMDc1IFpcIiAvPlxuICAgIDwvU1ZHPlxuICApO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIGljb247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuU3BlbGxlcih0ZXh0KSB7XG4gIGpRdWVyeSgnPGZvcm0gLz4nLCB7XG4gICAgaWQ6ICdrb3JlYW5fc3BlbGxfY2hlY2tlcicsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICBhY3Rpb246ICdodHRwOi8vc3BlbGxlci5jcy5wdXNhbi5hYy5rci9yZXN1bHRzJyxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBodG1sOiAnPHRleHRhcmVhIG5hbWU9XCJ0ZXh0MVwiPjwvdGV4dGFyZWE+JyxcbiAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuICBqUXVlcnkoJ2Zvcm0ja29yZWFuX3NwZWxsX2NoZWNrZXIgdGV4dGFyZWEnKS5odG1sKHRleHQpO1xuICBqUXVlcnkoJ2Zvcm0ja29yZWFuX3NwZWxsX2NoZWNrZXInKS5zdWJtaXQoKTtcbiAgalF1ZXJ5KCdmb3JtI2tvcmVhbl9zcGVsbF9jaGVja2VyJykucmVtb3ZlKCk7XG59XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICB3aW5kb3cudGlueW1jZS5jcmVhdGUoJ3RpbnltY2UucGx1Z2lucy5rb3JlYW5TcGVsbENoZWNrZXInLCB7XG4gICAgaW5pdDogKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmFkZENvbW1hbmQoJ29wZW5fa29yZWFuX3NwZWxsX2NoZWNrZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogJ3RleHQnIH0pO1xuICAgICAgICBvcGVuU3BlbGxlcih0ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWdpc3RlciBidXR0b25zXG4gICAgICBlZGl0b3IuYWRkQnV0dG9uKCdrb3JlYW4tc3BlbGwtY2hlY2tlcicsIHtcbiAgICAgICAgdGl0bGU6ICftlZzqta3slrQg66ee7Lak67KVIOqygOyCrOq4sOulvCDsl7TslrTsmpQuJyxcbiAgICAgICAgY21kOiAnb3Blbl9rb3JlYW5fc3BlbGxfY2hlY2tlcicsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEluZm86ICgpID0+ICh7XG4gICAgICBsb25nbmFtZTogJ0tvcmVhbiBTcGVsbCBDaGVja2VyJyxcbiAgICAgIGF1dGhvcjogJ3N1amluJyxcbiAgICAgIGF1dGhvcnVybDogJ2h0dHA6Ly93d3cuc3VqaW5jLmNvbScsXG4gICAgICBpbmZvdXJsOiAnJyxcbiAgICAgIHZlcnNpb246ICcxLjAnLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBSZWdpc3RlciBwbHVnaW5cbiAgd2luZG93LnRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoXG4gICAgJ2tvcmVhbi1zcGVsbC1jaGVja2VyJyxcbiAgICB3aW5kb3cudGlueW1jZS5wbHVnaW5zLmtvcmVhblNwZWxsQ2hlY2tlcixcbiAgKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==