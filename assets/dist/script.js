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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/korean-spell-checker.js");
/******/ })
/************************************************************************/
/******/ ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMva29yZWFuLXNwZWxsLWNoZWNrZXIuanMiXSwibmFtZXMiOlsib3BlblNwZWxsZXIiLCJ0ZXh0IiwialF1ZXJ5IiwiaWQiLCJ0YXJnZXQiLCJhY3Rpb24iLCJtZXRob2QiLCJodG1sIiwiYXBwZW5kVG8iLCJzdWJtaXQiLCJyZW1vdmUiLCJkb2N1bWVudCIsInJlYWR5Iiwid2luZG93IiwidGlueW1jZSIsImNyZWF0ZSIsImluaXQiLCJlZGl0b3IiLCJhZGRDb21tYW5kIiwiZ2V0Q29udGVudCIsImZvcm1hdCIsImFkZEJ1dHRvbiIsInRpdGxlIiwiY21kIiwiZ2V0SW5mbyIsImxvbmduYW1lIiwiYXV0aG9yIiwiYXV0aG9ydXJsIiwiaW5mb3VybCIsInZlcnNpb24iLCJQbHVnaW5NYW5hZ2VyIiwiYWRkIiwicGx1Z2lucyIsImtvcmVhblNwZWxsQ2hlY2tlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ2xGd0JBLFc7QUFBVCxTQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN4Q0MsU0FBTyxVQUFQLEVBQW1CO0FBQ2pCQyxRQUFJLHNCQURhO0FBRWpCQyxZQUFRLFFBRlM7QUFHakJDLFlBQVEsdUNBSFM7QUFJakJDLFlBQVEsTUFKUztBQUtqQkMsVUFBTTtBQUxXLEdBQW5CLEVBTUdDLFFBTkgsQ0FNWSxNQU5aOztBQVFBTixTQUFPLG9DQUFQLEVBQTZDSyxJQUE3QyxDQUFrRE4sSUFBbEQ7QUFDQUMsU0FBTywyQkFBUCxFQUFvQ08sTUFBcEM7QUFDQVAsU0FBTywyQkFBUCxFQUFvQ1EsTUFBcEM7QUFDRDs7QUFFRFIsT0FBT1MsUUFBUCxFQUFpQkMsS0FBakIsQ0FBdUIsWUFBTTtBQUMzQkMsU0FBT0MsT0FBUCxDQUFlQyxNQUFmLENBQXNCLG9DQUF0QixFQUE0RDtBQUMxREMsVUFBTSxjQUFDQyxNQUFELEVBQVk7QUFDaEJBLGFBQU9DLFVBQVAsQ0FBa0IsMkJBQWxCLEVBQStDLFlBQU07QUFDbkQsWUFBTWpCLE9BQU9nQixPQUFPRSxVQUFQLENBQWtCLEVBQUVDLFFBQVEsTUFBVixFQUFsQixDQUFiO0FBQ0FwQixvQkFBWUMsSUFBWjtBQUNELE9BSEQ7O0FBS0E7QUFDQWdCLGFBQU9JLFNBQVAsQ0FBaUIsc0JBQWpCLEVBQXlDO0FBQ3ZDQyxlQUFPLG1CQURnQztBQUV2Q0MsYUFBSztBQUZrQyxPQUF6QztBQUlELEtBWnlEO0FBYTFEQyxhQUFTO0FBQUEsYUFBTztBQUNkQyxrQkFBVSxzQkFESTtBQUVkQyxnQkFBUSxPQUZNO0FBR2RDLG1CQUFXLHVCQUhHO0FBSWRDLGlCQUFTLEVBSks7QUFLZEMsaUJBQVM7QUFMSyxPQUFQO0FBQUE7QUFiaUQsR0FBNUQ7O0FBc0JBO0FBQ0FoQixTQUFPQyxPQUFQLENBQWVnQixhQUFmLENBQTZCQyxHQUE3QixDQUNFLHNCQURGLEVBRUVsQixPQUFPQyxPQUFQLENBQWVrQixPQUFmLENBQXVCQyxrQkFGekI7QUFJRCxDQTVCRCxFIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NjcmlwdHMva29yZWFuLXNwZWxsLWNoZWNrZXIuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuU3BlbGxlcih0ZXh0KSB7XG4gIGpRdWVyeSgnPGZvcm0gLz4nLCB7XG4gICAgaWQ6ICdrb3JlYW5fc3BlbGxfY2hlY2tlcicsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICBhY3Rpb246ICdodHRwOi8vc3BlbGxlci5jcy5wdXNhbi5hYy5rci9yZXN1bHRzJyxcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBodG1sOiAnPHRleHRhcmVhIG5hbWU9XCJ0ZXh0MVwiPjwvdGV4dGFyZWE+JyxcbiAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuICBqUXVlcnkoJ2Zvcm0ja29yZWFuX3NwZWxsX2NoZWNrZXIgdGV4dGFyZWEnKS5odG1sKHRleHQpO1xuICBqUXVlcnkoJ2Zvcm0ja29yZWFuX3NwZWxsX2NoZWNrZXInKS5zdWJtaXQoKTtcbiAgalF1ZXJ5KCdmb3JtI2tvcmVhbl9zcGVsbF9jaGVja2VyJykucmVtb3ZlKCk7XG59XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICB3aW5kb3cudGlueW1jZS5jcmVhdGUoJ3RpbnltY2UucGx1Z2lucy5rb3JlYW5TcGVsbENoZWNrZXInLCB7XG4gICAgaW5pdDogKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLmFkZENvbW1hbmQoJ29wZW5fa29yZWFuX3NwZWxsX2NoZWNrZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogJ3RleHQnIH0pO1xuICAgICAgICBvcGVuU3BlbGxlcih0ZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZWdpc3RlciBidXR0b25zXG4gICAgICBlZGl0b3IuYWRkQnV0dG9uKCdrb3JlYW4tc3BlbGwtY2hlY2tlcicsIHtcbiAgICAgICAgdGl0bGU6ICftlZzqta3slrQg66ee7Lak67KVIOqygOyCrOq4sOulvCDsl7TslrTsmpQuJyxcbiAgICAgICAgY21kOiAnb3Blbl9rb3JlYW5fc3BlbGxfY2hlY2tlcicsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEluZm86ICgpID0+ICh7XG4gICAgICBsb25nbmFtZTogJ0tvcmVhbiBTcGVsbCBDaGVja2VyJyxcbiAgICAgIGF1dGhvcjogJ3N1amluJyxcbiAgICAgIGF1dGhvcnVybDogJ2h0dHA6Ly93d3cuc3VqaW5jLmNvbScsXG4gICAgICBpbmZvdXJsOiAnJyxcbiAgICAgIHZlcnNpb246ICcxLjAnLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBSZWdpc3RlciBwbHVnaW5cbiAgd2luZG93LnRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoXG4gICAgJ2tvcmVhbi1zcGVsbC1jaGVja2VyJyxcbiAgICB3aW5kb3cudGlueW1jZS5wbHVnaW5zLmtvcmVhblNwZWxsQ2hlY2tlcixcbiAgKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==