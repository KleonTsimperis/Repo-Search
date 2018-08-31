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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/fetch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/fetch.js":
/*!*********************!*\
  !*** ./js/fetch.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import testProfile from './script1';\r\n\r\n\r\nfunction results(){\r\n  fetch('https://api.github.com/users/'+document.getElementById('user').value)\r\n   .then(res=> {\r\n       if(res.ok){\r\n         return res.json()\r\n       } else {\r\n         document.getElementById('results').style.visibility = \"visible\";\r\n         // document.getElementById('results').classList.add(\"boxShadow\");\r\n         document.getElementById('form').style.borderTopLeftRadius = \"20px/3px\";\r\n         document.getElementById('form').style.borderTopRightRadius = \"20px/3px\";\r\n         document.getElementById('form').style.borderBottomRightRadius = \"0\";\r\n         document.getElementById('form').style.borderBottomLeftRadius = \"0\";\r\n\r\n\r\n\r\n         document.getElementById('completed').classList.add(\"radius2\");\r\n         document.getElementById('completed').classList.add(\"boxShadow\");\r\n\r\n\r\n\r\n         document.getElementById('completed').style.visibility = \"visible\";\r\n         document.getElementById('completed').style.height = \"180px\";\r\n\r\n\r\n       }})\r\n   .then(data=>{\r\n    let output =\r\n       `\r\n        <img src=${data.avatar_url} width=76 height=76>\r\n        <div class=\"loginInfo\">\r\n          <p class=\"userName\">@${data.login}</p>\r\n          <p class=\"fullName\">${data.login}</p>\r\n          <p class=\"bio\">this is the bio...</p>\r\n        </div>\r\n        <break></break>\r\n       `\r\n    document.getElementById('results').innerHTML = output;\r\n    document.getElementById('list').style.display = \"block\";\r\n    document.getElementById('form').style.borderRadius = \"10px 10px 0 0\";\r\n    document.getElementById('results').style.visibility = \"visible\";\r\n    document.getElementById('results').style.borderRadius = \"0\";\r\n    document.getElementById('completed').classList.add(\"boxShadow\");\r\n    document.getElementById('completed').classList.add(\"radius2\");\r\n    document.getElementById('form').style.boxShadow = \"none\";\r\n\r\n    document.getElementById('completed').style.height = \"470px\";\r\n }).catch(error=>console.log(error));\r\n\r\n  fetch('https://api.github.com/users/'+document.getElementById('user').value+'/repos')\r\n  .then(res=>res.json())\r\n  .then(data=>{\r\n    console.log(data)\r\n      var repos = '<div class=\"static\">Repositories</div>';\r\n      data.forEach(repo=>{\r\n      repos +=\r\n        `\r\n         <li>\r\n           <div class=\"name\">\r\n             ${repo.name}\r\n           </div>\r\n           <div>\r\n             <i class=\"fas fa-star\" style=\"margin-right: 10px\"></i>${repo.stargazers_count}\r\n           </div>\r\n           <div>\r\n             <i class=\"fas fa-code-branch\" style=\"margin-right:5px; margin-left: -20px\"></i>${repo.forks_count}\r\n           </div>\r\n         </li>\r\n       `;\r\n     });\r\n  document.getElementById('list').innerHTML = repos;\r\n  document.getElementById('list').style.visibility = \"visible\";\r\n  document.getElementById('completed').style.visibility = \"visible\";\r\n  document.getElementById('completed').style.borderRadius = \"10px\";\r\n  }).catch(error=>console.log(error));\r\n};\r\n\r\n\r\n// console.log(testProfile);\r\n\n\n//# sourceURL=webpack:///./js/fetch.js?");

/***/ })

/******/ });