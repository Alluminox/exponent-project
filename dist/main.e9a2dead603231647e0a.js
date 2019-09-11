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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function banner() {\n  var frases = [{\n    span1: \"<span>Seja um padrão de <strong class='mark'>qualidade</strong>.</span>\",\n    span2: \"<span>As pessoas estão aconstumadas a um ambiente onde o melhor é o esperado</span>\",\n    span3: \"<span><cite>Steve Jobs</cite></span>\"\n  }, {\n    span1: \"<span>A qualidade nunca se obtém por acaso;</span>\",\n    span2: \"<span>Ela é sempre resultado do esforço inteligente.</span>\",\n    span3: \"<span><cite>John Ruskin</cite></span>\"\n  }, {\n    span1: \"<span>Qualidade significa fazer certo</span>\",\n    span2: \"<span>quando ninguém está olhando.</span>\",\n    span3: \"<span><cite>Henry Ford</cite></span>\"\n  }, {\n    span1: \"<span>A qualidade de seu trabalho</span>\",\n    span2: \"<span>tem a ver com a qualidade de sua vida.</span>\",\n    span3: \"<span><cite>Orison Swett Marden</cite></span>\"\n  }];\n  var banner = document.querySelector(\".banner__title\");\n  setInterval(function () {\n    if (banner.classList.contains('banner__title--change')) {\n      console.log('contains');\n      banner.classList.remove('banner__title--change');\n    }\n\n    var random = Math.floor(Math.random() * frases.length);\n    var fraseSelecionada = frases[random];\n    var template = [];\n\n    for (var span in fraseSelecionada) {\n      template.push(fraseSelecionada[span]);\n    }\n\n    banner.classList.add('banner__title--change');\n    setTimeout(function () {\n      banner.innerHTML = template.join('');\n    }, 2000);\n  }, 6000);\n}\n\nbanner(); // <span>Seja um padrão de qualidade.</span>\n//         <span>As pessoas estão aconstumadas a um ambiente onde o melhor é o esperado.</span>\n//         <span style=\"font-size: 1.4rem\">Steve Jobs .</span>\n\nmenu();\n\nfunction toggleMenu() {\n  var body = document.querySelector(\"body\");\n  body.classList.toggle('menu-active');\n}\n\nfunction closeMenu() {\n  var body = document.querySelector(\"body\");\n  body.classList.remove('menu-active');\n}\n\nfunction menu() {\n  document.querySelector(\"#menu-btn\").addEventListener('click', function () {\n    event.preventDefault();\n    event.stopPropagation();\n    var body = document.querySelector(\"body\");\n    toggleMenu();\n    body.addEventListener('click', function () {\n      closeMenu();\n    });\n  });\n  document.querySelector('#close-menu').addEventListener('click', function (e) {\n    e.preventDefault();\n    toggleMenu();\n  });\n} // menu('.menu')\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });