// { "framework": "Vue"} 

webpackJsonp([1],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=108);/******/})(/************************************************************************//******/[/* 0 *//***/function(module,exports){/* globals __VUE_SSR_CONTEXT__ */// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.
module.exports=function normalizeComponent(rawScriptExports,compiledTemplate,functionalTemplate,injectStyles,scopeId,moduleIdentifier/* server only */){var esModule;var scriptExports=rawScriptExports=rawScriptExports||{};// ES6 modules interop
var type=_typeof2(rawScriptExports.default);if(type==='object'||type==='function'){esModule=rawScriptExports;scriptExports=rawScriptExports.default;}// Vue.extend constructor export interop
var options=typeof scriptExports==='function'?scriptExports.options:scriptExports;// render functions
if(compiledTemplate){options.render=compiledTemplate.render;options.staticRenderFns=compiledTemplate.staticRenderFns;options._compiled=true;}// functional template
if(functionalTemplate){options.functional=true;}// scopedId
if(scopeId){options._scopeId=scopeId;}var hook;if(moduleIdentifier){// server build
hook=function hook(context){// 2.3 injection
context=context||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;// functional
// 2.2 with runInNewContext: true
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__;}// inject component styles
if(injectStyles){injectStyles.call(this,context);}// register component module identifier for async chunk inferrence
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier);}};// used by ssr in case component is cached and beforeCreate
// never gets called
options._ssrRegister=hook;}else if(injectStyles){hook=injectStyles;}if(hook){var functional=options.functional;var existing=functional?options.render:options.beforeCreate;if(!functional){// inject component registration as beforeCreate hook
options.beforeCreate=existing?[].concat(existing,hook):[hook];}else{// for template-only hot-reload because in that case the render fn doesn't
// go through the normalizer
options._injectStyles=hook;// register for functioal component in vue file
options.render=function renderWithStyleInjection(h,context){hook.call(context);return existing(h,context);};}}return{esModule:esModule,exports:scriptExports,options:options};};/***/},/* 1 *//***/function(module,exports){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/// css base code, injected by the css-loader
module.exports=function(useSourceMap){var list=[];// return the list of modules as css string
list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media "+item[2]+"{"+content+"}";}else{return content;}}).join("");};// import a list of modules into the list
list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return'/*# sourceURL='+cssMapping.sourceRoot+source+' */';});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}return[content].join('\n');}// Adapted from convert-source-map (MIT)
function toComment(sourceMap){// eslint-disable-next-line no-undef
var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;return'/*# '+data+' */';}/***/},/* 2 *//***/function(module,exports,__webpack_require__){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/var hasDocument=typeof document!=='undefined';if(typeof DEBUG!=='undefined'&&DEBUG){if(!hasDocument){throw new Error('vue-style-loader cannot be used in a non-browser environment. '+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");}}var listToStyles=__webpack_require__(122);/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/var stylesInDom={/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/};var head=hasDocument&&(document.head||document.getElementsByTagName('head')[0]);var singletonElement=null;var singletonCounter=0;var isProduction=false;var noop=function noop(){};var options=null;var ssrIdKey='data-vue-ssr-id';// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE=typeof navigator!=='undefined'&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction,_options){isProduction=_isProduction;options=_options||{};var styles=listToStyles(parentId,list);addStylesToDom(styles);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle);}if(newList){styles=listToStyles(parentId,newList);addStylesToDom(styles);}else{styles=[];}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j]();}delete stylesInDom[domStyle.id];}}};};function addStylesToDom(styles/* Array<StyleObject> */){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j]);}for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j]));}if(domStyle.parts.length>item.parts.length){domStyle.parts.length=item.parts.length;}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j]));}stylesInDom[item.id]={id:item.id,refs:1,parts:parts};}}}function createStyleElement(){var styleElement=document.createElement('style');styleElement.type='text/css';head.appendChild(styleElement);return styleElement;}function addStyle(obj/* StyleObjectPart */){var update,remove;var styleElement=document.querySelector('style['+ssrIdKey+'~="'+obj.id+'"]');if(styleElement){if(isProduction){// has SSR styles and in production mode.
// simply do nothing.
return noop;}else{// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement);}}if(isOldIE){// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement());update=applyToSingletonTag.bind(null,styleElement,styleIndex,false);remove=applyToSingletonTag.bind(null,styleElement,styleIndex,true);}else{// use multi-style-tag mode in all other cases
styleElement=createStyleElement();update=applyToTag.bind(null,styleElement);remove=function remove(){styleElement.parentNode.removeChild(styleElement);};}update(obj);return function updateStyle(newObj/* StyleObjectPart */){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}var replaceText=function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?'':obj.css;if(styleElement.styleSheet){styleElement.styleSheet.cssText=replaceText(index,css);}else{var cssNode=document.createTextNode(css);var childNodes=styleElement.childNodes;if(childNodes[index])styleElement.removeChild(childNodes[index]);if(childNodes.length){styleElement.insertBefore(cssNode,childNodes[index]);}else{styleElement.appendChild(cssNode);}}}function applyToTag(styleElement,obj){var css=obj.css;var media=obj.media;var sourceMap=obj.sourceMap;if(media){styleElement.setAttribute('media',media);}if(options.ssrId){styleElement.setAttribute(ssrIdKey,obj.id);}if(sourceMap){// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+='\n/*# sourceURL='+sourceMap.sources[0]+' */';// http://stackoverflow.com/a/26603875
css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}if(styleElement.styleSheet){styleElement.styleSheet.cssText=css;}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild);}styleElement.appendChild(document.createTextNode(css));}}/***/},/* 3 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_url_parse__=__webpack_require__(114);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_url_parse___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_parse__);/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */var Utils={UrlParser:__WEBPACK_IMPORTED_MODULE_0_url_parse___default.a,_typeof:function _typeof(obj){return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();},isPlainObject:function isPlainObject(obj){return Utils._typeof(obj)==='object';},isString:function isString(obj){return typeof obj==='string';},isNonEmptyArray:function isNonEmptyArray(){var obj=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return obj&&obj.length>0&&Array.isArray(obj)&&typeof obj!=='undefined';},isObject:function isObject(item){return item&&(typeof item==='undefined'?'undefined':_typeof2(item))==='object'&&!Array.isArray(item);},isEmptyObject:function isEmptyObject(obj){return Object.keys(obj).length===0&&obj.constructor===Object;},decodeIconFont:function decodeIconFont(text){// 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
var regExp=/&#x[a-z|0-9]{4,5};?/g;if(regExp.test(text)){return text.replace(new RegExp(regExp,'g'),function(iconText){var replace=iconText.replace(/&#x/,'0x').replace(/;$/,'');return String.fromCharCode(replace);});}else{return text;}},mergeDeep:function mergeDeep(target){for(var _len=arguments.length,sources=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){sources[_key-1]=arguments[_key];}if(!sources.length)return target;var source=sources.shift();if(Utils.isObject(target)&&Utils.isObject(source)){for(var key in source){if(Utils.isObject(source[key])){if(!target[key]){Object.assign(target,_defineProperty({},key,{}));}Utils.mergeDeep(target[key],source[key]);}else{Object.assign(target,_defineProperty({},key,source[key]));}}}return Utils.mergeDeep.apply(Utils,[target].concat(sources));},appendProtocol:function appendProtocol(url){if(/^\/\//.test(url)){var bundleUrl=weex.config.bundleUrl;return'http'+(/^https:/.test(bundleUrl)?'s':'')+':'+url;}return url;},encodeURLParams:function encodeURLParams(url){var parsedUrl=new __WEBPACK_IMPORTED_MODULE_0_url_parse___default.a(url,true);return parsedUrl.toString();},goToH5Page:function goToH5Page(jumpUrl){var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var callback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var Navigator=weex.requireModule('navigator');var jumpUrlObj=new Utils.UrlParser(jumpUrl,true);var url=Utils.appendProtocol(jumpUrlObj.toString());Navigator.push({url:Utils.encodeURLParams(url),animated:animated.toString()},callback);},env:{isTaobao:function isTaobao(){var appName=weex.config.env.appName;return /(tb|taobao|淘宝)/i.test(appName);},isTrip:function isTrip(){var appName=weex.config.env.appName;return appName==='LX';},isBoat:function isBoat(){var appName=weex.config.env.appName;return appName==='Boat'||appName==='BoatPlayground';},isWeb:function isWeb(){var platform=weex.config.env.platform;return(typeof window==='undefined'?'undefined':_typeof2(window))==='object'&&platform.toLowerCase()==='web';},isIOS:function isIOS(){var platform=weex.config.env.platform;return platform.toLowerCase()==='ios';},/**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */isIPhoneX:function isIPhoneX(){var deviceHeight=weex.config.env.deviceHeight;if(Utils.env.isWeb()){return(typeof window==='undefined'?'undefined':_typeof2(window))!==undefined&&window.screen&&window.screen.width&&window.screen.height&&(parseInt(window.screen.width,10)===375&&parseInt(window.screen.height,10)===812||parseInt(window.screen.width,10)===414&&parseInt(window.screen.height,10)===896);}return Utils.env.isIOS()&&(deviceHeight===2436||deviceHeight===2688||deviceHeight===1792||deviceHeight===1624);},isAndroid:function isAndroid(){var platform=weex.config.env.platform;return platform.toLowerCase()==='android';},isTmall:function isTmall(){var appName=weex.config.env.appName;return /(tm|tmall|天猫)/i.test(appName);},isAliWeex:function isAliWeex(){return Utils.env.isTmall()||Utils.env.isTrip()||Utils.env.isTaobao();},/**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */getPageHeight:function getPageHeight(){var env=weex.config.env;var navHeight=Utils.env.isWeb()?0:Utils.env.isIPhoneX()?176:132;return env.deviceHeight/env.deviceWidth*750-navHeight;},/**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */getScreenHeight:function getScreenHeight(){var env=weex.config.env;return env.deviceHeight/env.deviceWidth*750;}},/**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */compareVersion:function compareVersion(){var currVer=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'0.0.0';var promoteVer=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'0.0.0';if(currVer===promoteVer)return true;var currVerArr=currVer.split('.');var promoteVerArr=promoteVer.split('.');var len=Math.max(currVerArr.length,promoteVerArr.length);for(var i=0;i<len;i++){var proVal=~~promoteVerArr[i];var curVal=~~currVerArr[i];if(proVal<curVal){return true;}else if(proVal>curVal){return false;}}return false;},/**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */arrayChunk:function arrayChunk(){var arr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:4;var groups=[];if(arr&&arr.length>0){groups=arr.map(function(e,i){return i%size===0?arr.slice(i,i+size):null;}).filter(function(e){return e;});}return groups;},/*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */truncateString:function truncateString(str,len){var hasDot=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var newLength=0;var newStr='';var singleChar='';var chineseRegex=/[^\x00-\xff]/g;var strLength=str.replace(chineseRegex,'**').length;for(var i=0;i<strLength;i++){singleChar=str.charAt(i).toString();if(singleChar.match(chineseRegex)!==null){newLength+=2;}else{newLength++;}if(newLength>len){break;}newStr+=singleChar;}if(hasDot&&strLength>len){newStr+='...';}return newStr;},/*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */objToParams:function objToParams(obj){var str='';for(var key in obj){if(str!==''){str+='&';}str+=key+'='+encodeURIComponent(obj[key]);}return str;},/*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */paramsToObj:function paramsToObj(str){var obj={};try{obj=JSON.parse('{"'+decodeURI(str).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');}catch(e){console.log(e);}return obj;},animation:{/**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */pageTransitionAnimation:function pageTransitionAnimation(ref,transform,status,callback){var animation=weex.requireModule('animation');animation.transition(ref,{styles:{transform:transform},duration:status?250:300,// ms
timingFunction:status?'ease-in':'ease-out',delay:0// ms
},function(){callback&&callback();});}},uiStyle:{/**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */pageTransitionAnimationStyle:function pageTransitionAnimationStyle(animationType){if(animationType==='push'){return{left:'750px',top:'0px',height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+'px'};}else if(animationType==='model'){return{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+'px',left:'0px',height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+'px'};}return{};}}};/* harmony default export */__webpack_exports__["a"]=Utils;/***/},/* 4 *//***/function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _assign=__webpack_require__(123);var _assign2=_interopRequireDefault(_assign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_assign2.default||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/***/},/* 5 *//***/function(module,exports){var core=module.exports={version:'2.6.11'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef
/***/},/* 6 *//***/function(module,exports,__webpack_require__){var store=__webpack_require__(32)('wks');var uid=__webpack_require__(24);var _Symbol=__webpack_require__(8).Symbol;var USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)('Symbol.'+name));};$exports.store=store;/***/},/* 7 *//***/function(module,exports,__webpack_require__){;(function(fn){if(true){module.exports=fn();}else if(typeof define==="function"){define("index",function(require,exports,module){module.exports=fn();});}else{var root;if(typeof window!=="undefined"){root=window;}else if(typeof self!=="undefined"){root=self;}else if(typeof global!=="undefined"){root=global;}else{// NOTICE: In JavaScript strict mode, this is null
root=this;}root["index"]=fn();}})(function(){return(/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){"use strict";/**
 Copyright 2018 Alibaba Group

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};var _bindingxParser=__webpack_require__(1);var isWeb=false;var isWeex=true;function requireModule(moduleName){try{if((typeof weex==='undefined'?'undefined':_typeof(weex))!==undefined&&weex.requireModule){// eslint-disable-line
return weex.requireModule(moduleName);// eslint-disable-line
}}catch(err){}return window.require('@weex-module/'+moduleName);}var isSupportNewBinding=true;var isSupportBinding=true;var WeexBinding=void 0;var WebBinding={};try{WeexBinding=requireModule('bindingx');isSupportNewBinding=true;}catch(e){isSupportNewBinding=false;}if(!WeexBinding||!WeexBinding.bind){try{WeexBinding=requireModule('binding');isSupportNewBinding=true;}catch(e){isSupportNewBinding=false;}}isSupportNewBinding=!!(WeexBinding&&WeexBinding.bind&&WeexBinding.unbind);if(!isSupportNewBinding){try{WeexBinding=requireModule('expressionBinding');isSupportBinding=true;}catch(err){isSupportBinding=false;}}isSupportBinding=!!(WeexBinding&&(WeexBinding.bind||WeexBinding.createBinding));function formatExpression(expression){if(expression===undefined)return;try{expression=JSON.parse(expression);}catch(err){}var resultExpression={};if(typeof expression==='string'){resultExpression.origin=expression;}else if(expression){resultExpression.origin=expression.origin;resultExpression.transformed=expression.transformed;}if(!resultExpression.transformed&&!resultExpression.origin)return;resultExpression.transformed=resultExpression.transformed||(0,_bindingxParser.parse)(resultExpression.origin);return resultExpression;}// 统一回调参数
function fixCallback(callback){return function(){var params=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(typeof callback==='function'){return callback({state:params.state==='end'?'exit':params.state,t:params.t!==undefined?params.t:params.deltaT});}};}exports.default={// 是否支持新版本的binding
isSupportNewBinding:isSupportNewBinding,// 是否支持binding
isSupportBinding:isSupportBinding,_bindingInstances:[],/**
   * 绑定
   * @param options 参数
   * @example
   {
     anchor:blockRef,
     eventType:'pan',
     props: [
     {
       element:blockRef,
       property:'transform.translateX',
       expression:{
         origin:"x+1",
         transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
       }
     }
    ]
   }
   */bind:function bind(options){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};if(!options){throw new Error('should pass options for binding');}options.exitExpression=formatExpression(options.exitExpression);if(options.props){options.props.forEach(function(prop){prop.expression=formatExpression(prop.expression);});}if(WeexBinding&&isSupportBinding){if(isSupportNewBinding){return WeexBinding.bind(options,options&&options.eventType==='timing'?fixCallback(callback):callback);}else{WeexBinding.enableBinding(options.anchor,options.eventType);// 处理expression的参数格式
var expressionArgs=options.props.map(function(prop){return{element:prop.element,property:prop.property,expression:prop.expression.transformed};});WeexBinding.createBinding(options.anchor,options.eventType,'',expressionArgs,callback);}}},/**
   *  @param {object} options
   *  @example
   *  {eventType:'pan',
   *   token:self.gesToken}
   */unbind:function unbind(options){if(!options){throw new Error('should pass options for binding');}if(WeexBinding&&isSupportBinding){if(isSupportNewBinding){return WeexBinding.unbind(options);}else{return WeexBinding.disableBinding(options.anchor,options.eventType);}}},unbindAll:function unbindAll(){if(WeexBinding&&isSupportBinding){if(isSupportNewBinding){return WeexBinding.unbindAll();}else{return WeexBinding.disableAll();}}},prepare:function prepare(options){if(WeexBinding&&isSupportBinding){if(isSupportNewBinding){return WeexBinding.prepare(options);}else{return WeexBinding.enableBinding(options.anchor,options.eventType);}}},getComputedStyle:function getComputedStyle(el){if(isSupportNewBinding){return WeexBinding.getComputedStyle(el);}else{return{};}}};module.exports=exports['default'];/***/},/* 1 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(2);/***/},/* 2 *//***/function(module,exports,__webpack_require__){"use strict";var lex={InputElementDiv:'<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',InputElementRegExp:'<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',ReservedWord:'<Keyword>|<NullLiteral>|<BooleanLiteral>',WhiteSpace:/[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,LineTerminator:/[\n\r\u2028\u2029]/,Keyword:/new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,NullLiteral:/null(?![_$a-zA-Z0-9])/,BooleanLiteral:/(?:true|false)(?![_$a-zA-Z0-9])/,Identifier:/[_$a-zA-Z][_$a-zA-Z0-9]*/,Punctuator:/\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,DivPunctuator:/\/=|\//,NumericLiteral:/(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,StringLiteral:/"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,RegularExpressionLiteral:/\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/};function XRegExp(xregexps,rootname,flag){var expnames=[rootname];function buildRegExp(source){var regexp=new RegExp();regexp.compile(source.replace(/<([^>]+)>/g,function(all,expname){if(!xregexps[expname])return'';expnames.push(expname);if(xregexps[expname]instanceof RegExp)return'('+xregexps[expname].source+')';return'('+buildRegExp(xregexps[expname]).source+')';}),flag);return regexp;}var regexp=buildRegExp(xregexps[rootname]);this.exec=function(string){var matches=regexp.exec(string);if(matches==null)return null;var result=new String(matches[0]);for(var i=0;i<expnames.length;i++){if(matches[i])result[expnames[i]]=matches[i];}return result;};Object.defineProperty(this,'lastIndex',{'get':function get(){return regexp.lastIndex;},'set':function set(v){regexp.lastIndex=v;}});}function LexicalParser(){var inputElementDiv=new XRegExp(lex,'InputElementDiv','g');var inputElementRegExp=new XRegExp(lex,'InputElementRegExp','g');var source;Object.defineProperty(this,'source',{'get':function get(){return source;},'set':function set(v){source=v;inputElementDiv.lastIndex=0;inputElementRegExp.lastIndex=0;}});this.reset=function(){inputElementDiv.lastIndex=0;inputElementRegExp.lastIndex=0;};this.getNextToken=function(useDiv){var lastIndex=inputElementDiv.lastIndex;var inputElement;if(useDiv)inputElement=inputElementDiv;else inputElement=inputElementRegExp;var token=inputElement.exec(source);if(token&&inputElement.lastIndex-lastIndex>token.length){throw new SyntaxError('Unexpected token ILLEGAL');}inputElementDiv.lastIndex=inputElement.lastIndex;inputElementRegExp.lastIndex=inputElement.lastIndex;return token;};}var rules={'IdentifierName':[['Identifier']],'Literal':[['NullLiteral'],['BooleanLiteral'],['NumericLiteral'],['StringLiteral'],['RegularExpressionLiteral']],'PrimaryExpression':[['Identifier'],['Literal'],['(','Expression',')']],'CallExpression':[['PrimaryExpression','Arguments'],['CallExpression','Arguments']],'Arguments':[['(',')'],['(','ArgumentList',')']],'ArgumentList':[['ConditionalExpression'],['ArgumentList',',','ConditionalExpression']],'LeftHandSideExpression':[['PrimaryExpression'],['CallExpression']],'UnaryExpression':[['LeftHandSideExpression'],['void','UnaryExpression'],['+','UnaryExpression'],['-','UnaryExpression'],['~','UnaryExpression'],['!','UnaryExpression']],'ExponentiationExpression':[['UnaryExpression'],['ExponentiationExpression','**','UnaryExpression']],'MultiplicativeExpression':[['MultiplicativeExpression','/','ExponentiationExpression'],['ExponentiationExpression'],['MultiplicativeExpression','*','ExponentiationExpression'],['MultiplicativeExpression','%','ExponentiationExpression']],'AdditiveExpression':[['MultiplicativeExpression'],['AdditiveExpression','+','MultiplicativeExpression'],['AdditiveExpression','-','MultiplicativeExpression']],'ShiftExpression':[['AdditiveExpression'],['ShiftExpression','<<','AdditiveExpression'],['ShiftExpression','>>','AdditiveExpression'],['ShiftExpression','>>>','AdditiveExpression']],'RelationalExpression':[['ShiftExpression'],['RelationalExpression','<','ShiftExpression'],['RelationalExpression','>','ShiftExpression'],['RelationalExpression','<=','ShiftExpression'],['RelationalExpression','>=','ShiftExpression'],['RelationalExpression','instanceof','ShiftExpression'],['RelationalExpression','in','ShiftExpression']],'EqualityExpression':[['RelationalExpression'],['EqualityExpression','==','RelationalExpression'],['EqualityExpression','!=','RelationalExpression'],['EqualityExpression','===','RelationalExpression'],['EqualityExpression','!==','RelationalExpression']],'BitwiseANDExpression':[['EqualityExpression'],['BitwiseANDExpression','&','EqualityExpression']],'BitwiseXORExpression':[['BitwiseANDExpression'],['BitwiseXORExpression','^','BitwiseANDExpression']],'BitwiseORExpression':[['BitwiseXORExpression'],['BitwiseORExpression','|','BitwiseXORExpression']],'LogicalANDExpression':[['BitwiseORExpression'],['LogicalANDExpression','&&','BitwiseORExpression']],'LogicalORExpression':[['LogicalANDExpression'],['LogicalORExpression','||','LogicalANDExpression']],'ConditionalExpression':[['LogicalORExpression'],['LogicalORExpression','?','LogicalORExpression',':','LogicalORExpression']],'Expression':[['ConditionalExpression'],['Expression',',','ConditionalExpression']],'Program':[['Expression']]};function _Symbol2(symbolName,token){this.name=symbolName;this.token=token;this.childNodes=[];this.toString=function(indent){if(!indent)indent='';if(this.childNodes.length==1)return this.childNodes[0].toString(indent);var str=indent+this.name+(this.token!=undefined&&this.name!=this.token?':'+this.token:'')+'\n';for(var i=0;i<this.childNodes.length;i++){str+=this.childNodes[i].toString(indent+'    ');}return str;};}function SyntacticalParser(){var currentRule;var root={Program:'$'};var hash={};function closureNode(node){hash[JSON.stringify(node)]=node;var queue=Object.getOwnPropertyNames(node);while(queue.length){var symbolName=queue.shift();if(!rules[symbolName])continue;rules[symbolName].forEach(function(rule){if(!node[rule[0]])queue.push(rule[0]);var rulenode=node;var lastnode=null;rule.forEach(function(symbol){if(!rulenode[symbol])rulenode[symbol]={};lastnode=rulenode;rulenode=rulenode[symbol];});if(node[symbolName].$div)rulenode.$div=true;rulenode.$reduce=symbolName;rulenode.$count=rule.length;});}for(var p in node){if(_typeof2(node[p])!='object'||p.charAt(0)=='$'||node[p].$closure)continue;if(hash[JSON.stringify(node[p])])node[p]=hash[JSON.stringify(node[p])];else{closureNode(node[p]);}}node.$closure=true;}closureNode(root);var symbolStack=[];var statusStack=[root];var current=root;this.insertSymbol=function insertSymbol(symbol,haveLineTerminator){while(!current[symbol.name]&&current.$reduce){var count=current.$count;var newsymbol=new _Symbol2(current.$reduce);while(count--){newsymbol.childNodes.push(symbolStack.pop()),statusStack.pop();}current=statusStack[statusStack.length-1];this.insertSymbol(newsymbol);}current=current[symbol.name];symbolStack.push(symbol),statusStack.push(current);if(!current)throw new Error();return current.$div;};this.reset=function(){current=root;symbolStack=[];statusStack=[root];};Object.defineProperty(this,'grammarTree',{'get':function get(){try{while(current.$reduce){var count=current.$count;var newsymbol=new _Symbol2(current.$reduce);while(count--){newsymbol.childNodes.push(symbolStack.pop()),statusStack.pop();}current=statusStack[statusStack.length-1];this.insertSymbol(newsymbol);}if(symbolStack.length>0&&current[';']){this.insertSymbol(new _Symbol2(';',';'));return this.grammarTree;}if(symbolStack.length!=1||symbolStack[0].name!='Program')throw new Error();}catch(e){throw new SyntaxError('Unexpected end of input');}return symbolStack[0];}});}function Parser(){this.lexicalParser=new LexicalParser();this.syntacticalParser=new SyntacticalParser();var terminalSymbols=['NullLiteral','BooleanLiteral','NumericLiteral','StringLiteral','RegularExpressionLiteral','Identifier','**','=>','{','}','(',')','[',']','.',';',',','<','>','<=','>=','==','!=','===','!==','+','-','*','%','++','--','<<','>>','>>>','&','|','^','!','~','&&','||','?',':','=','+=','-=','*=','%=','<<=','>>=','>>>=','&=','|=','^=','/','/=','instanceof','typeof','new','void','debugger','this','delete','in'];var terminalSymbolIndex={};terminalSymbols.forEach(function(e){Object.defineProperty(terminalSymbolIndex,e,{});});this.reset=function(){this.lexicalParser.reset();this.syntacticalParser.reset();};this.parse=function(source,onInputElement){var _this9=this;var token;var haveLineTerminator=false;this.lexicalParser.source=source;var useDiv=false;while(token=this.lexicalParser.getNextToken(useDiv)){if(onInputElement)onInputElement(token);try{if(Object.getOwnPropertyNames(token).some(function(e){if(terminalSymbolIndex.hasOwnProperty(e)){useDiv=_this9.syntacticalParser.insertSymbol(new _Symbol2(e,token),haveLineTerminator);haveLineTerminator=false;return true;}else return false;}))continue;if((token.Keyword||token.Punctuator||token.DivPunctuator)&&terminalSymbolIndex.hasOwnProperty(token.toString())){useDiv=this.syntacticalParser.insertSymbol(new _Symbol2(token.toString(),token),haveLineTerminator);}}catch(e){throw new SyntaxError('Unexpected token '+token);}}return this.syntacticalParser.grammarTree;};}var parser=new Parser();function JavaScriptExpression(text){parser.reset();this.tree=parser.parse(text);this.paths=[];var context=Object.create(null);var me=this;var pathIndex=Object.create(null);this.isSimple;this.isConst;walk(this.tree);checkSimple(this.tree);if(this.paths.length===0){this.isConst=true;}this.setter=function(path){var curr=context;for(var i=0;i<path.length-1;i++){if(!curr[path[i]])curr[path[i]]=Object.create(null);curr=curr[path[i]];}return{isCompleted:function isCompleted(){for(var p in pathIndex){if(!pathIndex[p])return false;}return true;},set:function set(value){if(!pathIndex[path.join('.')]){pathIndex[path.join('.')]=true;}curr[path[i]]=value;if(this.isCompleted()){return me.exec();}else{return undefined;}}};};this.valueOf=this.exec=function(){try{return function(){return eval(text);}.call(context);}catch(e){}};function checkSimple(symbol){var curr=symbol;while(curr.childNodes.length<=1&&curr.name!=='MemberExpression'){curr=curr.childNodes[0];}// TODO: need to point out "[……]"
if(curr.name==='MemberExpression'){me.isSimple=true;}else{me.isSimple=false;}}function walk(symbol){if(symbol.name==='CallExpression'&&symbol.childNodes[symbol.childNodes.length-1].name!=='CallExpression'){var path=getPath(symbol.childNodes[1]);walk(symbol.childNodes[0]);}else if(symbol.name==='NewExpression'&&symbol.childNodes.length===1){var path=getPath(symbol.childNodes[0]);}else if(symbol.name==='MemberExpression'&&symbol.childNodes.length===1){var path=getPath(symbol);}else{for(var i=0;i<symbol.childNodes.length;i++){walk(symbol.childNodes[i]);}}}function getPath(symbol){// [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],
if(symbol.childNodes[0].name==='IdentifierName'){// MemberExpression : MemberExpression "." IdentifierName
var path=getPath(symbol.childNodes[2]);if(path)path=path.concat(symbol.childNodes[0].childNodes[0].token.toString());createPath(path);return path;}else if(symbol.childNodes[0].name==='PrimaryExpression'){// MemberExpression : PrimaryExpression
if(symbol.childNodes[0].childNodes[0].name==='Identifier'){var path=[symbol.childNodes[0].childNodes[0].token.toString()];createPath(path);return path;}else{return null;}}else if(symbol.childNodes[0].name===']'){// MemberExpression : MemberExpression "[" Expression "]"
getPath(symbol.childNodes[3]);walk(symbol.childNodes[1]);return null;}else if(symbol.childNodes[0].name==='Arguments'){// MemberExpression : "new" MemberExpression Arguments
walk(symbol.childNodes[0]);walk(symbol.childNodes[1]);return null;}else{for(var i=0;i<symbol.childNodes.length;i++){walk(symbol.childNodes[i]);}}}function createPath(path){var curr=context;for(var i=0;i<path.length-1;i++){if(!curr[path[i]])curr[path[i]]=Object.create(null);curr=curr[path[i]];}me.paths.push(path);pathIndex[path.join('.')]=false;}}function visit(tree){var childNodes=tree.childNodes.slice().reverse();var children=childNodes.filter(function(e){return!e.token||!e.token.Punctuator;});if(tree.name==='UnaryExpression'){// negative number support
if(childNodes.length===2&&childNodes[0].name==='-'&&children.length===1){var res=visit(children[0]);res.value=-res.value;return res;}}if(tree.name==='Arguments'){var argumentList=[];var listNode=children[0];while(listNode){if(listNode.childNodes.length===3){argumentList.unshift(listNode.childNodes[0]);listNode=listNode.childNodes[2];}if(listNode.childNodes.length===1){argumentList.unshift(listNode.childNodes[0]);listNode=null;}}return{type:'Arguments',children:argumentList.map(function(e){return visit(e);})};}if(children&&children.length===1){var res=visit(children[0]);return res;}if(tree.token&&['NullLiteral','BooleanLiteral','NumericLiteral','StringLiteral','Identifier'].some(function(e){return tree.token[e];})){var type=Object.keys(tree.token).filter(function(e){return e.match(/Literal/)||e.match(/Identifier/);})[0];var value={'NullLiteral':null,'BooleanLiteral':Boolean(tree.token),'NumericLiteral':Number(tree.token),'StringLiteral':tree.token,'Identifier':tree.token}[type];return{type:type,value:value};}if(tree.name==='CallExpression')return{type:'CallExpression',children:[visit(childNodes[0]),visit(childNodes[1])]};return{type:childNodes.filter(function(e){return e.token&&e.token.Punctuator;})[0].name,children:childNodes.filter(function(e){return!e.token||!e.token.Punctuator;}).map(function(e){return visit(e);})};}function parse(originExp){var exp=new JavaScriptExpression(originExp);return JSON.stringify(visit(exp.tree),null);}module.exports={parse:parse};/***/}]/******/));});;/***/},/* 8 *//***/function(module,exports){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self// eslint-disable-next-line no-new-func
:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef
/***/},/* 9 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__index__=__webpack_require__(3);/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */var BindEnv={supportsEB:function supportsEB(){return __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default.a.isSupportBinding&&!__WEBPACK_IMPORTED_MODULE_1__index__["a"/* default */].env.isWeb();},/**
   * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
   * @returns {boolean}
   */supportsEBForAndroid:function supportsEBForAndroid(){return __WEBPACK_IMPORTED_MODULE_1__index__["a"/* default */].env.isAndroid()&&BindEnv.supportsEB();},/**
   * 判断IOS容器是否支持是否支持expressionBinding
   * @returns {boolean}
   */supportsEBForIos:function supportsEBForIos(){return __WEBPACK_IMPORTED_MODULE_1__index__["a"/* default */].env.isIOS()&&BindEnv.supportsEB();}};/* harmony default export */__webpack_exports__["a"]=BindEnv;/***/},/* 10 *//***/function(module,exports,__webpack_require__){var anObject=__webpack_require__(17);var IE8_DOM_DEFINE=__webpack_require__(44);var toPrimitive=__webpack_require__(27);var dP=Object.defineProperty;exports.f=__webpack_require__(11)?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};/***/},/* 11 *//***/function(module,exports,__webpack_require__){// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(14)(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});/***/},/* 12 *//***/function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};/***/},/* 13 *//***/function(module,exports,__webpack_require__){var dP=__webpack_require__(10);var createDesc=__webpack_require__(19);module.exports=__webpack_require__(11)?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};/***/},/* 14 *//***/function(module,exports){module.exports=function(exec){try{return!!exec();}catch(e){return true;}};/***/},/* 15 *//***/function(module,exports,__webpack_require__){// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(47);var defined=__webpack_require__(29);module.exports=function(it){return IObject(defined(it));};/***/},/* 16 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(8);var core=__webpack_require__(5);var ctx=__webpack_require__(43);var hide=__webpack_require__(13);var has=__webpack_require__(12);var PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type&$export.F;var IS_GLOBAL=type&$export.G;var IS_STATIC=type&$export.S;var IS_PROTO=type&$export.P;var IS_BIND=type&$export.B;var IS_WRAP=type&$export.W;var exports=IS_GLOBAL?core:core[name]||(core[name]={});var expProto=exports[PROTOTYPE];var target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];var key,own,out;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;if(own&&has(exports,key))continue;// export native or passed
out=own?target[key]:source[key];// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&typeof target[key]!='function'?source[key]// bind timers to global for call from export context
:IS_BIND&&own?ctx(out,global)// wrap global constructors for prevent change them in library
:IS_WRAP&&target[key]==out?function(C){var F=function F(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C();case 1:return new C(a);case 2:return new C(a,b);}return new C(a,b,c);}return C.apply(this,arguments);};F[PROTOTYPE]=C[PROTOTYPE];return F;// make static versions for prototype methods
}(out):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
if(IS_PROTO){(exports.virtual||(exports.virtual={}))[key]=out;// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
if(type&$export.R&&expProto&&!expProto[key])hide(expProto,key,out);}}};// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library`
module.exports=$export;/***/},/* 17 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(18);module.exports=function(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};/***/},/* 18 *//***/function(module,exports){module.exports=function(it){return(typeof it==='undefined'?'undefined':_typeof2(it))==='object'?it!==null:typeof it==='function';};/***/},/* 19 *//***/function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};/***/},/* 20 *//***/function(module,exports,__webpack_require__){// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(46);var enumBugKeys=__webpack_require__(33);module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys);};/***/},/* 21 *//***/function(module,exports,__webpack_require__){// 7.1.13 ToObject(argument)
var defined=__webpack_require__(29);module.exports=function(it){return Object(defined(it));};/***/},/* 22 *//***/function(module,exports){module.exports={};/***/},/* 23 *//***/function(module,exports){module.exports=true;/***/},/* 24 *//***/function(module,exports){var id=0;var px=Math.random();module.exports=function(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};/***/},/* 25 *//***/function(module,exports){exports.f={}.propertyIsEnumerable;/***/},/* 26 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(198);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 27 *//***/function(module,exports,__webpack_require__){// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(18);// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};/***/},/* 28 *//***/function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};/***/},/* 29 *//***/function(module,exports){// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};/***/},/* 30 *//***/function(module,exports){// 7.1.4 ToInteger
var ceil=Math.ceil;var floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};/***/},/* 31 *//***/function(module,exports,__webpack_require__){var shared=__webpack_require__(32)('keys');var uid=__webpack_require__(24);module.exports=function(key){return shared[key]||(shared[key]=uid(key));};/***/},/* 32 *//***/function(module,exports,__webpack_require__){var core=__webpack_require__(5);var global=__webpack_require__(8);var SHARED='__core-js_shared__';var store=global[SHARED]||(global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:core.version,mode:__webpack_require__(23)?'pure':'global',copyright:'© 2019 Denis Pushkarev (zloirock.ru)'});/***/},/* 33 *//***/function(module,exports){// IE 8- don't enum bug keys
module.exports='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');/***/},/* 34 *//***/function(module,exports){exports.f=Object.getOwnPropertySymbols;/***/},/* 35 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(132);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 36 *//***/function(module,exports,__webpack_require__){var def=__webpack_require__(10).f;var has=__webpack_require__(12);var TAG=__webpack_require__(6)('toStringTag');module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});};/***/},/* 37 *//***/function(module,exports,__webpack_require__){exports.f=__webpack_require__(6);/***/},/* 38 *//***/function(module,exports,__webpack_require__){var global=__webpack_require__(8);var core=__webpack_require__(5);var LIBRARY=__webpack_require__(23);var wksExt=__webpack_require__(37);var defineProperty=__webpack_require__(10).f;module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});};/***/},/* 39 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_text_vue__=__webpack_require__(94);/* empty harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_516245bf_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_text_vue__=__webpack_require__(333);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(331);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-516245bf";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_text_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_516245bf_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_text_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-rich-text/wxc-rich-text-text.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-516245bf",Component.options);}else{hotAPI.reload("data-v-516245bf",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["default"]=Component.exports;/***/},/* 40 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(110);/* harmony default export */__webpack_exports__["a"]={name:"aui-button",props:{/**
     * 按钮类型
     * @values default / primary / info / warning / danger
     */type:{type:String,default:"default"},/**
     * 尺寸
     * @values large / small / mini
     */size:{type:String,default:"small"},/**
     * 按钮内容
     */text:{type:[String,Number],default:"按钮"},/**
     * 禁用状态
     * @values true / false
     */disabled:{type:Boolean,default:false},/**
     * 按钮中的图标
     */icon:{type:String},/**
     * 按钮中的class
     */classList:{type:String,default:""}},methods:{click:function click(event){this.$emit("onClickCallback",event);}},watch:{},render:function render(createElement){var text=this.text,type=this.type,size=this.size,disabled=this.disabled,icon=this.icon,classList=this.classList,click=this.click,touchstart=this.touchstart;return createElement("van-button",{props:{type:type,size:size,disabled:disabled,icon:icon,classList:classList},on:{click:click,touchstart:touchstart}},text);}};/***/},/* 41 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_ui__=__webpack_require__(112);/* harmony default export */__webpack_exports__["a"]={name:"aui-tabBar",components:{WxcTabBar:__WEBPACK_IMPORTED_MODULE_0_weex_ui__["a"/* WxcTabBar */]},props:{tabs:{type:Array,default:[]},titleType:{type:"",default:""}},methods:{onChange:function onChange(e){this.$emit("handleChange",e);}},watch:{},render:function render(createElement){var tabs=this.tabs,onChange=this.onChange,titleType=this.titleType;return createElement("wxc-tab-bar",{props:{"tab-titles":tabs,"title-type":titleType},on:{wxcTabBarCurrentTabSelected:onChange}},this.$slots.default);}};/***/},/* 42 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__type__=__webpack_require__(130);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{text:{type:String,default:'确认'},size:{type:String,default:'full'},type:{type:String,default:'red'},disabled:{type:Boolean,default:false},isHighlight:{type:Boolean,default:false},btnStyle:Object,textStyle:Object,disabledStyle:Object},computed:{mrBtnStyle:function mrBtnStyle(){var type=this.type,disabled=this.disabled,btnStyle=this.btnStyle,size=this.size,disabledStyle=this.disabledStyle;var mrBtnStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},__WEBPACK_IMPORTED_MODULE_1__type__["b"/* STYLE_MAP */][type],__WEBPACK_IMPORTED_MODULE_1__type__["a"/* BUTTON_STYLE_MAP */][size],btnStyle);var disabledInStyle={opacity:0.2};if(type==='white'){disabledInStyle={backgroundColor:'rgba(0, 0, 0, 0.1)'};}return disabled?__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},mrBtnStyle,disabledInStyle,disabledStyle,{borderWidth:0}):mrBtnStyle;},mrTextStyle:function mrTextStyle(){var type=this.type,disabled=this.disabled,textStyle=this.textStyle,size=this.size;var mrTextStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},__WEBPACK_IMPORTED_MODULE_1__type__["d"/* TEXT_STYLE_MAP */][type],__WEBPACK_IMPORTED_MODULE_1__type__["c"/* TEXT_FONTSIZE_STYLE_MAP */][size],textStyle);return disabled?__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},mrTextStyle,{color:'#FFFFFF'}):mrTextStyle;}},methods:{onClicked:function onClicked(e){var type=this.type,disabled=this.disabled;this.$emit('wxcButtonClicked',{e:e,type:type,disabled:disabled});}}};/***/},/* 43 *//***/function(module,exports,__webpack_require__){// optional / simple context binding
var aFunction=__webpack_require__(126);module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};/***/},/* 44 *//***/function(module,exports,__webpack_require__){module.exports=!__webpack_require__(11)&&!__webpack_require__(14)(function(){return Object.defineProperty(__webpack_require__(45)('div'),'a',{get:function get(){return 7;}}).a!=7;});/***/},/* 45 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(18);var document=__webpack_require__(8).document;// typeof document.createElement is 'object' in old IE
var is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{};};/***/},/* 46 *//***/function(module,exports,__webpack_require__){var has=__webpack_require__(12);var toIObject=__webpack_require__(15);var arrayIndexOf=__webpack_require__(128)(false);var IE_PROTO=__webpack_require__(31)('IE_PROTO');module.exports=function(object,names){var O=toIObject(object);var i=0;var result=[];var key;for(key in O){if(key!=IE_PROTO)has(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};/***/},/* 47 *//***/function(module,exports,__webpack_require__){// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(28);// eslint-disable-next-line no-prototype-builtins
module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it)=='String'?it.split(''):Object(it);};/***/},/* 48 *//***/function(module,exports,__webpack_require__){// 7.1.15 ToLength
var toInteger=__webpack_require__(30);var min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};/***/},/* 49 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{label:{type:String,default:''},title:{type:String,default:''},extraContent:{type:String,default:''},desc:{type:String,default:''},link:{type:String,default:''},hasTopBorder:{type:Boolean,default:false},hasMargin:{type:Boolean,default:false},hasBottomBorder:{type:Boolean,default:true},hasArrow:{type:Boolean,default:false},arrowIcon:{type:String,default:'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'},hasVerticalIndent:{type:Boolean,default:true},cellStyle:{type:Object,default:function _default(){return{};}},autoAccessible:{type:Boolean,default:true}},methods:{cellClicked:function cellClicked(e){var link=this.link;this.$emit('wxcCellClicked',{e:e});link&&__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].goToH5Page(link,true);}}};/***/},/* 50 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(51);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ee7986a6_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(155);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(137);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-ee7986a6";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ee7986a6_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-checkbox/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-ee7986a6",Component.options);}else{hotAPI.reload("data-v-ee7986a6",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 51 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__=__webpack_require__(139);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__wxc_cell__=__webpack_require__(35);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__type__=__webpack_require__(154);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcCell:__WEBPACK_IMPORTED_MODULE_1__wxc_cell__["a"/* default */]},props:{hasTopBorder:{type:Boolean,default:false},hasBottomBorder:{type:Boolean,default:true},title:{type:String,require:true},value:{type:[String,Number,Object],require:true},disabled:{type:Boolean,default:false},checked:{type:Boolean,default:false},config:{type:Object,default:function _default(){return{};}}},data:function data(){return{icon:[__WEBPACK_IMPORTED_MODULE_2__type__["a"/* CHECKED */],__WEBPACK_IMPORTED_MODULE_2__type__["c"/* UNCHECKED */],__WEBPACK_IMPORTED_MODULE_2__type__["b"/* CHECKED_DISABLED */],__WEBPACK_IMPORTED_MODULE_2__type__["d"/* UNCHECKED_DISABLED */]],color:'#3D3D3D',innerChecked:false};},computed:{checkIcon:function checkIcon(){var icon=this.icon,disabled=this.disabled,innerChecked=this.innerChecked,config=this.config;var mergeIcon=[].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(icon));config.checkedIcon&&(mergeIcon[0]=config.checkedIcon);config.unCheckedIcon&&(mergeIcon[1]=config.unCheckedIcon);config.checkedDisabledIcon&&(mergeIcon[2]=config.checkedDisabledIcon);config.unCheckedDisabledIcon&&(mergeIcon[3]=config.unCheckedDisabledIcon);if(disabled){return mergeIcon[innerChecked?2:3];}else{return mergeIcon[innerChecked?0:1];}},textColor:function textColor(){var innerChecked=this.innerChecked,disabled=this.disabled,config=this.config;var checkedColor=config.checkedColor?config.checkedColor:'#EE9900';return innerChecked&&!disabled?checkedColor:'#3D3D3D';}},watch:{checked:function checked(newChecked){this.innerChecked=newChecked;}},created:function created(){var checked=this.checked;this.innerChecked=checked;},methods:{wxcCellClicked:function wxcCellClicked(){var disabled=this.disabled,innerChecked=this.innerChecked,value=this.value;if(!disabled){this.innerChecked=!innerChecked;this.$emit('wxcCheckBoxItemChecked',{value:value,checked:this.innerChecked});}}}};/***/},/* 52 *//***/function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(142)(true);// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(53)(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t;var index=this._i;var point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});/***/},/* 53 *//***/function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(23);var $export=__webpack_require__(16);var redefine=__webpack_require__(54);var hide=__webpack_require__(13);var Iterators=__webpack_require__(22);var $iterCreate=__webpack_require__(143);var setToStringTag=__webpack_require__(36);var getPrototypeOf=__webpack_require__(146);var ITERATOR=__webpack_require__(6)('iterator');var BUGGY=!([].keys&&'next'in[].keys());// Safari has buggy iterators w/o `next`
var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function returnThis(){return this;};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator';var DEF_VALUES=DEFAULT==VALUES;var VALUES_BUG=false;var proto=Base.prototype;var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];var $default=$native||getMethod(DEFAULT);var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;var $anyNative=NAME=='Array'?proto.entries||$native:$native;var methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!LIBRARY&&typeof IteratorPrototype[ITERATOR]!='function')hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}// Plug for library
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};/***/},/* 54 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(13);/***/},/* 55 *//***/function(module,exports,__webpack_require__){// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(17);var dPs=__webpack_require__(144);var enumBugKeys=__webpack_require__(33);var IE_PROTO=__webpack_require__(31)('IE_PROTO');var Empty=function Empty(){/* empty */};var PROTOTYPE='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=__webpack_require__(45)('iframe');var i=enumBugKeys.length;var lt='<';var gt='>';var iframeDocument;iframe.style.display='none';__webpack_require__(145).appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE][enumBugKeys[i]];}return _createDict();};module.exports=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE]=anObject(O);result=new Empty();Empty[PROTOTYPE]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:dPs(result,Properties);};/***/},/* 56 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__wxc_checkbox_index_vue__=__webpack_require__(50);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcCheckbox:__WEBPACK_IMPORTED_MODULE_0__wxc_checkbox_index_vue__["a"/* default */]},props:{list:{type:Array,default:function _default(){return[];}},config:{type:Object,default:function _default(){return{};}}},data:function data(){return{checkedList:[]};},created:function created(){var _this=this;var list=this.list;if(list&&list.length>0){list.forEach(function(item,i){item.checked&&_this.checkedList.push(item.value);});}},methods:{wxcCheckBoxItemChecked:function wxcCheckBoxItemChecked(e){if(e.checked){this.checkedList.push(e.value);}else{var index=this.checkedList.indexOf(e.value);this.checkedList.splice(index,1);}this.$emit('wxcCheckBoxListChecked',{checkedList:this.checkedList});}}};/***/},/* 57 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__default_data__=__webpack_require__(163);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__util__=__webpack_require__(164);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__tab_vue__=__webpack_require__(165);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__wxc_searchbar__=__webpack_require__(59);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__wxc_result__=__webpack_require__(61);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__wxc_indexlist__=__webpack_require__(63);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{wxcTab:__WEBPACK_IMPORTED_MODULE_4__tab_vue__["a"/* default */],WxcSearchbar:__WEBPACK_IMPORTED_MODULE_5__wxc_searchbar__["a"/* default */],WxcResult:__WEBPACK_IMPORTED_MODULE_6__wxc_result__["a"/* default */],WxcIndexlist:__WEBPACK_IMPORTED_MODULE_7__wxc_indexlist__["a"/* default */]},props:{animationType:{type:String,default:'push'},inputConfig:{type:Object,default:function _default(){return{};}},sourceData:{type:Object,default:function _default(){return __WEBPACK_IMPORTED_MODULE_1__default_data__["a"/* default */];}},cityStyleType:{type:String,default:'list'},currentLocation:String,cityHeight:{type:Number,default:0},showTab:{type:Boolean,default:false},showIndex:{type:Boolean,default:true},showNavHeader:{type:Boolean,default:true}},data:function data(){return{tId:null,saveDefaultSourceData:{},cityData:{},onlyShowList:false,result:{noGoods:{pic:'https://img.alicdn.com/tfs/TB1SpPHkf2H8KJjy0FcXXaDlFXa-200-200.png',button:'',content:'搜索无结果'}}};},created:function created(){this.cityData=this.sourceData;this.saveDefaultSourceData=this.sourceData;},computed:{cityExtendStyle:function cityExtendStyle(){return __WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].uiStyle.pageTransitionAnimationStyle(this.animationType);},currentCityLocationConfig:function currentCityLocationConfig(){if(this.currentLocation){return{type:this.cityStyleType,title:'定位',list:[{name:this.currentLocation,isLocation:true}]};}else{return{};}},normalList:function normalList(){return __WEBPACK_IMPORTED_MODULE_2__util__["a"/* getCities */](this.cityData.cities);},hotListConfig:function hotListConfig(){return{type:this.cityStyleType,title:'热门',list:__WEBPACK_IMPORTED_MODULE_2__util__["a"/* getCities */](this.cityData.hotCity)};},showError:function showError(){var normalList=this.normalList,hotListConfig=this.hotListConfig;return normalList&&normalList.length<1&&hotListConfig&&hotListConfig.list&&hotListConfig.list.length<1;},listHeight:function listHeight(){// 兼容去头逻辑
var pageHeight=__WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].env.getPageHeight();var cityHeight=this.cityHeight;if(cityHeight&&!isNaN(cityHeight)&&cityHeight>0){pageHeight=cityHeight;}// searchInput 84
var tabHeight=this.showTab?90:0;return pageHeight-84-tabHeight;},mergeInputConfig:function mergeInputConfig(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({autofocus:false,alwaysShowCancel:true,placeholder:'中文/拼音/首字母'},this.inputConfig);}},methods:{onTabSwitch:function onTabSwitch(e){this.$emit('wxcTabSwitch',e);},switchTab:function switchTab(){var _this=this;var i=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;setTimeout(function(){_this.$refs['wxc-tab'].switchTab(i);},100);},onItemClick:function onItemClick(e){this.$refs['wxc-searchbar'].autoBlur();this.show(false);this.$emit('wxcCityItemSelected',{item:e.item});},onInput:function onInput(e){var _this2=this;clearTimeout(this.tId);var cities=this.cityData.cities;var value=e.value;if(value!==''&&cities&&cities.length>0){var queryData=__WEBPACK_IMPORTED_MODULE_2__util__["b"/* query */](cities,String(value).trim());this.cityData={cities:queryData,hotCity:[]};this.onlyShowList=true;}else{this.cityData=this.saveDefaultSourceData;this.onlyShowList=false;}this.tId=setTimeout(function(){_this2.$emit('wxcCityOnInput',{value:e.value});},300);},onCancel:function onCancel(){this.autoBlur();this.show(false);this.$emit('wxcCityCanceled',{});},onSubmit:function onSubmit(e){this.autoBlur();this.$emit('wxcCityOnKeyUpEnter',{value:e.value});},autoBlur:function autoBlur(){var inputRef=this.$refs['wxc-searchbar'];inputRef&&inputRef.autoBlur();},show:function show(){var status=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var ref=this.$refs.city;if(this.animationType==='push'){__WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].animation.pageTransitionAnimation(ref,'translateX('+(status?-750:750)+'px)',status,callback);}else if(this.animationType==='model'){__WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].animation.pageTransitionAnimation(ref,'translateY('+(status?-__WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].env.getScreenHeight():__WEBPACK_IMPORTED_MODULE_3__utils__["a"/* default */].env.getScreenHeight())+'px)',status,callback);}}}};/***/},/* 58 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{},data:function data(){return{checkedIndex:0};},methods:{switchTab:function switchTab(index){var animation=weex.requireModule('animation');this.checkedIndex=index;this.$emit('wxcTabSwitch',{index:index});animation.transition(this.$refs['tab-bar'],{styles:{transform:'translateX('+index*375+'px)'},duration:150,// ms
timingFunction:'ease',delay:0// ms
},function(){});}}};/***/},/* 59 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(169);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 60 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__type__=__webpack_require__(172);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{disabled:{type:Boolean,default:false},alwaysShowCancel:{type:Boolean,default:false},inputType:{type:String,default:'text'},returnKeyType:{type:String,default:'default'},mod:{type:String,default:'default'},autofocus:{type:Boolean,default:false},theme:{type:String,default:'gray'},barStyle:{type:Object,default:function _default(){return{};}},defaultValue:{type:String,default:''},placeholder:{type:String,default:'搜索'},cancelLabel:{type:String,default:'取消 '},depName:{type:String,default:'杭州'}},computed:{needShowCancel:function needShowCancel(){return this.alwaysShowCancel||this.showCancel;},buttonStyle:function buttonStyle(){var barStyle=this.barStyle;if(barStyle.backgroundColor){return{backgroundColor:barStyle.backgroundColor};}return{};}},data:function data(){return{inputIcon:__WEBPACK_IMPORTED_MODULE_0__type__["c"/* INPUT_ICON */],closeIcon:__WEBPACK_IMPORTED_MODULE_0__type__["b"/* CLOSE_ICON */],arrowIcon:__WEBPACK_IMPORTED_MODULE_0__type__["a"/* ARROW_ICON */],showCancel:false,showClose:false,value:''};},created:function created(){this.defaultValue&&(this.value=this.defaultValue);if(this.disabled){this.showCancel=false;this.showClose=false;}},methods:{onBlur:function onBlur(){var self=this;setTimeout(function(){self.showCancel=false;self.detectShowClose();self.$emit('wxcSearchbarInputOnBlur',{value:self.value});},10);},autoBlur:function autoBlur(){this.$refs['search-input'].blur();},onFocus:function onFocus(){if(this.isDisabled){return;}this.showCancel=true;this.detectShowClose();this.$emit('wxcSearchbarInputOnFocus',{value:this.value});},closeClicked:function closeClicked(){this.value='';this.showCancel&&(this.showCancel=false);this.showClose&&(this.showClose=false);this.$emit('wxcSearchbarCloseClicked',{value:this.value});this.$emit('wxcSearchbarInputOnInput',{value:this.value});},onInput:function onInput(e){this.value=e.value;this.showCancel=true;this.detectShowClose();this.$emit('wxcSearchbarInputOnInput',{value:this.value});},onSubmit:function onSubmit(e){this.onBlur();this.value=e.value;this.showCancel=true;this.detectShowClose();this.$emit('wxcSearchbarInputReturned',{value:this.value});},cancelClicked:function cancelClicked(){this.showCancel&&(this.showCancel=false);this.showClose&&(this.showClose=false);this.$emit('wxcSearchbarCancelClicked',{value:this.value});},detectShowClose:function detectShowClose(){this.showClose=this.value.length>0&&this.showCancel;},depClicked:function depClicked(){this.$emit('wxcSearchbarDepChooseClicked',{});},inputDisabledClicked:function inputDisabledClicked(){this.$emit('wxcSearchbarInputDisabledClicked',{});},setValue:function setValue(value){this.value=value;}}};/***/},/* 61 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(174);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 62 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__=__webpack_require__(177);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__type__=__webpack_require__(181);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{type:{type:String,default:'errorPage'},show:{type:Boolean,default:true},wrapStyle:Object,paddingTop:{type:[Number,String],default:232},customSet:{type:Object,default:function _default(){return{};}}},computed:{resultType:function resultType(){var type=this.type,customSet=this.customSet;var allTypes=__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].isEmptyObject(customSet)?__WEBPACK_IMPORTED_MODULE_1__type__["a"/* default */]:__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].mergeDeep(__WEBPACK_IMPORTED_MODULE_1__type__["a"/* default */],customSet);var types=allTypes['errorPage'];if(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(allTypes).indexOf(type)>-1){types=allTypes[type];}return types;},setPaddingTop:function setPaddingTop(){var paddingTop=this.paddingTop;return paddingTop+'px';}},methods:{handleTouchEnd:function handleTouchEnd(e){// web上面有点击穿透问题
var platform=weex.config.env.platform;platform==='Web'&&e.preventDefault&&e.preventDefault();},onClick:function onClick(){var type=this.type;this.$emit('wxcResultButtonClicked',{type:type});}}};/***/},/* 63 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(183);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 64 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__format__=__webpack_require__(186);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom=weex.requireModule('dom');/* harmony default export */__webpack_exports__["a"]={props:{height:{type:[Number,String],default:__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.getPageHeight()},normalList:{type:Array,default:function _default(){return[];}},onlyShowList:{type:Boolean,default:false},showIndex:{type:Boolean,default:true},needAnimation:{type:Boolean,default:true},hotListConfig:{type:Object,default:function _default(){return{};}},// 城市选择子组件 特殊情况支持
cityLocationConfig:{type:Object,default:function _default(){return{};}},headerStyle:{type:Object,default:function _default(){return{};}},navStyle:{type:Object,default:function _default(){return{};}},navTextStyle:{type:Object,default:function _default(){return{};}},popStyle:{type:Object,default:function _default(){return{};}},popTextStyle:{type:Object,default:function _default(){return{};}},itemStyle:{type:Object,default:function _default(){return{};}},itemTextStyle:{type:Object,default:function _default(){return{};}},itemDescStyle:{type:Object,default:function _default(){return{};}},groupWrapStyle:{type:Object,default:function _default(){return{};}},groupItemStyle:{type:Object,default:function _default(){return{};}},groupItemTextStyle:{type:Object,default:function _default(){return{};}},groupItemDescStyle:{type:Object,default:function _default(){return{};}}},created:function created(){this.isIPhoneX=__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isIPhoneX();},computed:{formatList:function formatList(){var normalList=this.normalList,hotListConfig=this.hotListConfig,cityLocationConfig=this.cityLocationConfig;return __WEBPACK_IMPORTED_MODULE_0__format__["a"/* totalList */](normalList,hotListConfig,cityLocationConfig);}},data:function data(){return{popKeyShow:false,popKey:'',navOffsetY:0,timer:null};},methods:{itemClicked:function itemClicked(item){this.$emit('wxcIndexlistItemClicked',{item:item});},go2Key:function go2Key(key){var _this=this;var keyEl=this.$refs['index-item-title-'+key][0];keyEl&&dom.scrollToElement(keyEl,{offset:0,animated:this.needAnimation});this.popKey=key;this.popKeyShow=true;this.timer&&clearTimeout(this.timer);this.timer=setTimeout(function(){_this.popKeyShow=false;},600);}}};/***/},/* 65 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{// 时间戳
time:{type:Number,default:1501200000000},// 倒计时的间隔,单位为"毫秒"
interval:{type:Number,default:1000},tpl:{type:String,default:'{h}:{m}:{s}'},// 最外层包裹 style
timeWrapStyle:Object,// 数字盒子 style
timeBoxStyle:Object,// : 盒子Style
dotBoxStyle:Object,// 数字文字 Style
timeTextStyle:Object,// : 文字Style
dotTextStyle:Object},data:function data(){return{NOW_DATE:new Date().getTime(),completed:false,tplIndexOfDays:-1,tplIndexOfHours:-1,tplIndexOfMinutes:-1,tplIndexOfSeconds:-1,TIME_WRAP_STYLE:{flexDirection:'row',alignItems:'center',marginLeft:'12px',marginRight:'12px'},TIME_BOX_STYLE:{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#333333',height:'30px',width:'30px'},DOT_BOX_STYLE:{width:'18px',flexDirection:'row',justifyContent:'center',alignItems:'center'},TIME_TEXT_STYLE:{color:'#FFCC80',fontSize:'18px'},DOT_TEXT_STYLE:{color:'#333333',fontSize:'18px',fontWeight:'bold'}};},mounted:function mounted(){var _this=this;setInterval(function(){_this.NOW_DATE=new Date().getTime();},this.interval);this.tplIndexOfDays=this.tpl.indexOf('d');this.tplIndexOfHours=this.tpl.indexOf('h');this.tplIndexOfMinutes=this.tpl.indexOf('m');this.tplIndexOfSeconds=this.tpl.indexOf('s');},computed:{mrTimeWrapStyle:function mrTimeWrapStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.TIME_WRAP_STYLE,this.timeWrapStyle);},mrTimeBoxStyle:function mrTimeBoxStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.TIME_BOX_STYLE,this.timeBoxStyle);},mrDotBoxStyle:function mrDotBoxStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.DOT_BOX_STYLE,this.dotBoxStyle);},mrTimeTextStyle:function mrTimeTextStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.TIME_TEXT_STYLE,this.timeTextStyle);},mrDotTextStyle:function mrDotTextStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.DOT_TEXT_STYLE,this.dotTextStyle);},countDownData:function countDownData(){var timeSpacing=this.time-this.NOW_DATE;// 倒计时结束了
if(timeSpacing<0){if(this.completed===false){this.$emit('wxcOnComplete');}this.completed=true;return{day:'00',hour:'00',minute:'00',second:'00'};}var day=0;var hour=0;var minute=0;var second=0;if(this.tplIndexOfDays!==-1){day=Math.floor(timeSpacing/(24*60*60*1000));hour=Math.floor(timeSpacing%(24*60*60*1000)/(60*60*1000));}else{day=0;hour=Math.floor(timeSpacing/(60*60*1000));}if(this.tplIndexOfHours!==-1){hour=Math.floor((timeSpacing-day*24*60*60*1000)/(60*60*1000));minute=Math.floor((timeSpacing-day*24*60*60*1000)%(60*60*1000)/(60*1000));}else{hour=0;minute=Math.floor((timeSpacing-day*24*60*60*1000)/(60*1000));}if(this.tplIndexOfMinutes!==-1){minute=Math.floor((timeSpacing-day*24*60*60*1000-hour*60*60*1000)/(60*1000));second=Math.floor((timeSpacing-day*24*60*60*1000-hour*60*60*1000)%(60*1000)/1000);}else{minute=0;second=Math.floor((timeSpacing-day*24*60*60*1000-hour*60*60*1000)/1000);}return{day:day<10?'0'+day:''+day,hour:hour<10?'0'+hour:''+hour,minute:minute<10?'0'+minute:''+minute,second:second<10?'0'+second:''+second};}},methods:{getDot:function getDot(prevTagIndex){var nextTagIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:-1;if(nextTagIndex===-1){return this.tpl.slice(prevTagIndex+2);}return this.tpl.slice(prevTagIndex+2,nextTagIndex-1);}}};/***/},/* 66 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__wxc_overlay__=__webpack_require__(26);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__type__=__webpack_require__(202);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcOverlay:__WEBPACK_IMPORTED_MODULE_0__wxc_overlay__["a"/* default */]},props:{show:{type:Boolean,default:false},single:{type:Boolean,default:false},title:{type:String,default:''},content:{type:String,default:''},top:{type:Number,default:400},cancelText:{type:String,default:'取消'},confirmText:{type:String,default:'确定'},mainBtnColor:{type:String,default:'#EE9900'},secondBtnColor:{type:String,default:'#666666'},showNoPrompt:{type:Boolean,default:false},noPromptText:{type:String,default:'不再提示'},isChecked:{type:Boolean,default:false},left:{type:Number,default:0}},data:function data(){return{noPromptIcon:__WEBPACK_IMPORTED_MODULE_1__type__["b"/* UN_CHECKED */],pageHeight:1334,isWeb:__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].env.isWeb()};},created:function created(){var _weex$config$env=weex.config.env,deviceHeight=_weex$config$env.deviceHeight,deviceWidth=_weex$config$env.deviceWidth;this.pageHeight=deviceHeight/deviceWidth*750;},methods:{secondaryClicked:function secondaryClicked(){this.$emit('wxcDialogCancelBtnClicked',{type:'cancel'});},primaryClicked:function primaryClicked(e){this.$emit('wxcDialogConfirmBtnClicked',{type:'confirm'});},noPromptClicked:function noPromptClicked(e){var isChecked=!this.isChecked;this.noPromptIcon=isChecked?__WEBPACK_IMPORTED_MODULE_1__type__["a"/* CHECKED */]:__WEBPACK_IMPORTED_MODULE_1__type__["b"/* UN_CHECKED */];this.$emit('wxcDialogNoPromptClicked',{isChecked:isChecked});}}};/***/},/* 67 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={props:{show:{type:Boolean,default:true},top:{type:Number,default:0},left:{type:Number,default:0},hasAnimation:{type:Boolean,default:true},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function _default(){return['ease-in','ease-out'];}},opacity:{type:[Number,String],default:0.6},canAutoClose:{type:Boolean,default:true}},computed:{overlayStyle:function overlayStyle(){return{opacity:this.hasAnimation?0:1,backgroundColor:'rgba(0, 0, 0,'+this.opacity+')',left:__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isWeb()?this.left+'px':0,top:this.top+'px'};},shouldShow:function shouldShow(){var _this=this;var show=this.show,hasAnimation=this.hasAnimation;hasAnimation&&setTimeout(function(){_this.appearOverlay(show);},50);return show;}},methods:{overlayClicked:function overlayClicked(e){this.canAutoClose?this.appearOverlay(false):this.$emit('wxcOverlayBodyClicked',{});},appearOverlay:function appearOverlay(bool){var _this2=this;var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.duration;var hasAnimation=this.hasAnimation,timingFunction=this.timingFunction,canAutoClose=this.canAutoClose;var needEmit=!bool&&canAutoClose;needEmit&&this.$emit('wxcOverlayBodyClicking',{});var overlayEl=this.$refs['wxc-overlay'];if(hasAnimation&&overlayEl){animation.transition(overlayEl,{styles:{opacity:bool?1:0},duration:duration,timingFunction:timingFunction[bool?0:1],delay:0},function(){needEmit&&_this2.$emit('wxcOverlayBodyClicked',{});});}else{needEmit&&this.$emit('wxcOverlayBodyClicked',{});}}}};/***/},/* 68 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_bind_env__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var swipeBack=weex.requireModule('swipeBack');var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={props:{sliderId:{type:[String,Number],default:1},panOffset:{type:Number,default:80},cardLength:{type:Number,default:1},selectIndex:{type:Number,default:0},enableSwipe:{type:Boolean,default:true},containerS:{type:Object,default:function _default(){return{position:'relative',width:750,height:352};}},cardS:{type:Object,default:function _default(){return{width:360,height:300,spacing:0,scale:0.75};}},autoPlay:{type:Boolean,default:false},interval:{type:[Number,String],default:1200}},data:function data(){return{isMoving:false,gesToken:0,startX:0,startTime:0,currentIndex:0,autoPlayTimer:null};},computed:{cardList:function cardList(){return new Array(this.cardLength+1).join().split('');},cardWidth:function cardWidth(){return(this.cardLength-1)*this.cardS.width+this.containerS.width+235;}},created:function created(){this.currentIndex=this.selectIndex;},mounted:function mounted(){var _this=this;// ios和页面返回冲突，组件里面将ios系统横滑返回禁止
if(swipeBack&&swipeBack.forbidSwipeBack){swipeBack.forbidSwipeBack(true);}setTimeout(function(){var sliderCtn=_this.$refs['sliderCtn_'+_this.sliderId];if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()&&sliderCtn&&sliderCtn.ref){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:sliderCtn.ref,eventType:'pan'});}},20);this.checkNeedAutoPlay();},methods:{onPanStart:function onPanStart(e){if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()){return;}this.clearAutoPlay();this.startX=e.changedTouches[0].clientX;this.startTime=Date.now();},onPanMove:function onPanMove(e){if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()){return;}var moveX=e.changedTouches[0].clientX-this.startX;var index=this.loopedIndex(this.currentIndex,this.cardLength);var cardLength=this.cardLength;var currentCardLeft=this.currentIndex*(this.cardS.width+this.cardS.spacing);var sliderCtn=this.$refs['sliderCtn_'+this.sliderId];sliderCtn&&animation.transition(sliderCtn,{styles:{transform:'translateX('+(moveX-currentCardLeft)+'px)'},timingFunction:'ease',delay:0,duration:0},function(){});if(this.cardS.scale!==1){var currentCard=this.$refs['card'+this.loopedIndex(index,cardLength)+'_'+this.sliderId][0];currentCard&&animation.transition(currentCard,{styles:{transform:'scale('+(1-Math.abs(moveX)/this.cardS.width*(1-this.cardS.scale))+')'},timingFunction:'ease',delay:0,duration:0},function(){});// 左边的卡片
var leftCard=this.$refs['card'+this.loopedIndex(index-1,cardLength)+'_'+this.sliderId][0];// loop 函数负数返回 0，这里有点冲突
if(leftCard&&index!==0){animation.transition(leftCard,{styles:{transform:'scale('+(1-Math.abs(moveX-this.cardS.width)/this.cardS.width*(1-this.cardS.scale))+')'},timingFunction:'ease',delay:0,duration:0},function(){});}// 右边卡片
var rightCard=this.$refs['card'+this.loopedIndex(index+1,cardLength)+'_'+this.sliderId][0];rightCard&&animation.transition(rightCard,{styles:{transform:'scale('+(1-Math.abs(this.cardS.width+moveX)/this.cardS.width*(1-this.cardS.scale))+')'},timingFunction:'ease',delay:0,duration:0},function(){});}},onEpPanStart:function onEpPanStart(e){var _this2=this;if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()&&e.state==='start'){this.clearAutoPlay();setTimeout(function(){var sliderCtn=_this2.$refs['sliderCtn_'+_this2.sliderId];_this2.bindExp(sliderCtn);},0);}},onPanEnd:function onPanEnd(e){if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()){return;}this.panEnd(e);},panEnd:function panEnd(e){var _this3=this;this.isMoving=true;var moveX=e.deltaX;if(__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isWeb()){moveX=e.changedTouches[0].clientX-this.startX;}var originIndex=this.currentIndex;var selectIndex=originIndex;var duration=Date.now()-this.startTime;var panOffset=this.panOffset||this.cardS.width/2;var isPullMore=selectIndex===this.cardLength-1&&(moveX<-68||moveX<-10&&duration<200);if(isPullMore){this.$emit('wxcEpSliderPullMore',{currentIndex:selectIndex});}if(moveX<-panOffset||moveX<-10&&duration<200){if(selectIndex!==this.cardLength-1){selectIndex++;}}else if(moveX>panOffset||moveX>10&&duration<500){if(selectIndex!==0){selectIndex--;}}this.slideTo(originIndex,selectIndex);setTimeout(function(){_this3.checkNeedAutoPlay();},3000);},slideTo:function slideTo(originIndex,selectIndex){var _this4=this;var currentCardScale=1;var rightCardScale=this.cardS.scale;var leftCardScale=this.cardS.scale;var duration=selectIndex===0&&originIndex===this.cardLength-1&&this.cardLength!==2?0.00001:300;this.$emit('wxcEpSliderCurrentIndexSelected',{currentIndex:selectIndex});if(originIndex<selectIndex){currentCardScale=this.cardS.scale;rightCardScale=1;}else if(originIndex>selectIndex){currentCardScale=this.cardS.scale;leftCardScale=1;}var currentCard=this.$refs['card'+this.loopedIndex(originIndex,this.cardLength)+'_'+this.sliderId][0];currentCard&&animation.transition(currentCard,{styles:{transform:'scale('+currentCardScale+')'},timingFunction:'ease',duration:duration},function(){});var leftCard=this.$refs['card'+this.loopedIndex(originIndex-1,this.cardLength)+'_'+this.sliderId][0];if(this.isMoving&&leftCard&&originIndex!==0){animation.transition(leftCard,{styles:{transform:'scale('+leftCardScale+')'},timingFunction:'ease',duration:duration},function(){});}var rightCard=this.$refs['card'+this.loopedIndex(originIndex+1,this.cardLength)+'_'+this.sliderId][0];if(rightCard&&originIndex!==this.cardLength-1){animation.transition(rightCard,{styles:{transform:'scale('+rightCardScale+')'},timingFunction:'ease',duration:duration},function(){});}var sliderCtn=this.$refs['sliderCtn_'+this.sliderId];sliderCtn&&animation.transition(sliderCtn,{styles:{transform:'translateX(-'+selectIndex*(this.cardS.width+this.cardS.spacing)+'px)'},timingFunction:'ease',duration:duration},function(){_this4.isMoving=false;if(originIndex!==selectIndex){_this4.currentIndex=selectIndex;}});},// 使index维持在0-length之间循环
loopedIndex:function loopedIndex(index,total){if(index<0){index=index+(1-index/total)*total;}return parseInt(index%total);},bindExp:function bindExp(element){var _this5=this;if(element&&element.ref){if(this.isMoving&&this.gesToken!==0){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({eventType:'pan',token:this.gesToken});this.gesToken=0;return;}this.startTime=Date.now();var index=this.loopedIndex(this.currentIndex,this.cardLength);var sliderCtn=this.$refs['sliderCtn_'+this.sliderId];var currentCard=this.$refs['card'+index+'_'+this.sliderId][0];var rightCard=null;var leftCard=null;var currentCardLeft=this.currentIndex*(this.cardS.width+this.cardS.spacing);// 卡片容器
var sliderCtnExp='x - '+currentCardLeft;var args=[{element:sliderCtn.ref,property:'transform.translateX',expression:sliderCtnExp}];if(this.cardS.scale!==1){var currentCardExp='1-abs(x)/'+this.cardS.width+'*'+(1-this.cardS.scale);var leftCardExp='1-abs(x-'+this.cardS.width+')/'+this.cardS.width+'*'+(1-this.cardS.scale);var rightCardExp='1-abs('+this.cardS.width+'+x)/'+this.cardS.width+'*'+(1-this.cardS.scale);args.push({element:currentCard.ref,property:'transform.scale',expression:currentCardExp});if(index===0&&this.$refs['card'+(index+1)+'_'+this.sliderId]){rightCard=this.$refs['card'+(index+1)+'_'+this.sliderId][0];args.push({element:rightCard.ref,property:'transform.scale',expression:rightCardExp});}else if(index===this.cardLength-1&&this.$refs['card'+(index-1)+'_'+this.sliderId]){leftCard=this.$refs['card'+(index-1)+'_'+this.sliderId][0];args.push({element:leftCard.ref,property:'transform.scale',expression:leftCardExp});}else if(this.$refs['card'+(index-1)+'_'+this.sliderId]){// 左边卡片
leftCard=this.$refs['card'+(index-1)+'_'+this.sliderId][0];args.push({element:leftCard.ref,property:'transform.scale',expression:leftCardExp});// 右边卡片
rightCard=this.$refs['card'+(index+1)+'_'+this.sliderId][0];args.push({element:rightCard.ref,property:'transform.scale',expression:rightCardExp});}}var gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:element.ref,eventType:'pan',props:args},function(e){if(!_this5.isMoving&&(e.state==='end'||e.state==='cancel'||e.state==='exit')){_this5.panEnd(e);}});this.gesToken=gesTokenObj.token;}},checkNeedAutoPlay:function checkNeedAutoPlay(){var _this6=this;if(this.autoPlay){this.clearAutoPlay();this.autoPlayTimer=setInterval(function(){_this6.slideTo(_this6.currentIndex,_this6.loopedIndex(_this6.currentIndex+1,_this6.cardLength));},parseInt(this.interval));}},clearAutoPlay:function clearAutoPlay(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer);},rebind:function rebind(){var sliderCtn=this.$refs['sliderCtn_'+this.sliderId];if(sliderCtn&&sliderCtn.ref){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({eventType:'pan',token:this.gesToken});this.gesToken=0;this.bindExp(sliderCtn);}},manualSetPage:function manualSetPage(selectIndex){var _this7=this;this.clearAutoPlay();var step=this.currentIndex<selectIndex?1:-1;this.slideTo(this.loopedIndex(selectIndex-step,this.cardLength),selectIndex);setTimeout(function(){_this7.checkNeedAutoPlay();},3000);}}};/***/},/* 69 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_bind_env__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom=weex.requireModule('dom');var animation=weex.requireModule('animation');var swipeBack=weex.requireModule('swipeBack');var expressionBinding=weex.requireModule('expressionBinding');var isIos=__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isIOS();/* harmony default export */__webpack_exports__["a"]={props:{tabTitles:{type:Array,default:function _default(){return[];}},panDist:{type:Number,default:200},spmC:{type:[String,Number],default:''},tabStyles:{type:Object,default:function _default(){return{titleColor:'#666666',activeTitleColor:'#3D3D3D',isActiveTitleBold:true,width:160,height:40,fontSize:24,textPaddingLeft:10,textPaddingRight:10};}},titleType:{type:String,default:'icon'},tabPageHeight:{type:[String,Number],default:1334},needSlider:{type:Boolean,default:true},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}},data:function data(){return{currentPage:0,isMoving:false,deltaX:0};},mounted:function mounted(){// ios 下面禁止左滑出去
if(swipeBack&&swipeBack.forbidSwipeBack){swipeBack.forbidSwipeBack(true);}if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEBForIos()&&this.needSlider){var tabPageEl=this.$refs['tab-page-wrap'];__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:tabPageEl.ref,eventType:'pan'});}},methods:{next:function next(){var page=this.currentPage;if(page<this.tabTitles.length-1){page++;}this.setPage(page);},prev:function prev(){var page=this.currentPage;if(page>0){page--;}this.setPage(page);},startHandler:function startHandler(e){if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEBForIos()&&this.isTabView&&this.needSlider){this.bindExp(this.$refs['tab-page-wrap']);}},bindExp:function bindExp(element){var _this=this;if(element&&element.ref){if(this.isMoving&&this.gesToken!==0){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({eventType:'pan',token:this.gesToken});this.gesToken=0;return;}var tabElement=this.$refs['tab-container'];var currentPage=this.currentPage,panDist=this.panDist;var dist=currentPage*750;// x-dist
var props=[{element:tabElement.ref,property:'transform.translateX',expression:'{"type":"CallExpression","children":[{"type":"Identifier","value":"min"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":0},{"type":"CallExpression","children":[{"type":"Identifier","value":"max"},{"type":"Arguments","children":[{"type":"NumericLiteral","value":'+-(tabTitles.length-1)*750+'},{"type":"-","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":'+dist+'}]}]}]}]}]}'}];var gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:element.ref,eventType:'pan',props:props},function(e){var deltaX=e.deltaX,state=e.state;if(state==='end'){if(deltaX<-panDist){_this.next();}else if(deltaX>panDist){_this.prev();}else{_this.setPage(currentPage);}}});this.gesToken=gesTokenObj.token;}},setPage:function setPage(page){if(this.isMoving===true){return;}this.isMoving=true;var previousPage=this.currentPage;var currentTabEl=this.$refs['wxc-tab-title-'+page][0];var width=this.tabStyles.width;var appearNum=parseInt(750/width);var tabsNum=this.tabTitles.length;var computedPage=tabsNum>appearNum?2:page;var offset=page>appearNum?-(750-width)/2:-width*computedPage;(previousPage>appearNum||page>1)&&dom.scrollToElement(currentTabEl,{offset:offset});page<=1&&previousPage>page&&dom.scrollToElement(currentTabEl,{offset:-width*page});this._animateTransformX(page);this.isMoving=false;this.currentPage=page;this.$emit('wxcTabPageCurrentTabSelected',{page:page});},_animateTransformX:function _animateTransformX(page){var duration=this.duration,timingFunction=this.timingFunction;var containerEl=this.$refs['tab-container'];var dist=page*750;animation.transition(containerEl,{styles:{transform:'translateX('+-dist+'px)'},duration:duration,timingFunction:timingFunction,delay:0},function(){});}}};/***/},/* 70 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__option_vue__=__webpack_require__(218);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{Option:__WEBPACK_IMPORTED_MODULE_1__option_vue__["a"/* default */]},props:{// 标识, 当界面展示多个grid, 防止v-for :key重复
id:{type:String,default:'one'},// 列数
cols:{type:Number,default:4},// 是否单选
single:{type:Boolean,default:false},// 数据
list:{type:Array,default:function _default(){return[];}},// 选择个数限制
limit:{type:Number},// 用户自定义样式，用于个性化设置option样式
customStyles:{type:Object,default:function _default(){return{};}}},data:function data(){return{dList:this.initList()};},computed:{cHackList:function cHackList(){var list=this.list,cols=this.cols;var remainder=list.length%cols;var len=remainder?cols-remainder:0;return Array.apply(null,{length:len});}},watch:{list:function list(){this.dList=this.initList();}},created:function created(){// 行间距
this.lineSpacing=this.customStyles.lineSpacing||'12px';},methods:{onSelect:function onSelect(index){var checked=this.dList[index].checked;if(this.limit<=this.checkedCount&&!checked){this.$emit('overLimit',this.limit);}else{this.updateList(index);this.$emit('select',{selectIndex:index,checked:!checked,checkedList:this.dList.filter(function(item){return item.checked;})});}},initList:function initList(){var single=this.single;var checkedCount=0;var dList=this.list.map(function(item,i){var checked=item.checked,disabled=item.disabled;disabled=!!disabled;// disabled为true时认为checked无效，同时单选模式下只认为第一个checked为true的为有效值
checked=!disabled&&!!checked&&(!single||checkedCount===0);if(item.checked)checkedCount+=1;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},item,{checked:checked,disabled:disabled});});this.checkedCount=checkedCount;return dList;},updateList:function updateList(index){var single=this.single;var checkedCount=0;this.dList=this.dList.map(function(item,i){if(single){item.checked=index===i&&!item.checked;}else{if(i===index)item.checked=!item.checked;}if(item.checked)checkedCount+=1;return item;});this.checkedCount=checkedCount;}}};/***/},/* 71 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{index:{type:Number,default:-1},// 是否选中
checked:{type:Boolean,default:false},// 是否可选
disabled:{type:Boolean,default:false},// 标题
title:{type:String,default:''},width:{type:String,default:'166px'},height:{type:String,default:'72px'},// 默认 x
icon:{type:String,default:'https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png'},// 正常状态文字色值
color:{type:String,default:'#3d3d3d'},// 选中状态文字色值
checkedColor:{type:String,default:'#3d3d3d'},// 不可选状态文字色值
disabledColor:{type:String,default:'#9b9b9b'},// 正常状态边框色值
borderColor:{type:String,default:'transparent'},// 选中状态边框色值
checkedBorderColor:{type:String,default:'#ffb200'},// 不可选状态边框色值
disabledBorderColor:{type:String,default:'transparent'},// 正常状态背景色值
backgroundColor:{type:String,default:'#f6f6f6'},// 选中状态背景色值
checkedBackgroundColor:{type:String,default:'#ffffff'},// 不可选状态背景色值
disabledBackgroundColor:{type:String,default:'#f6f6f6'}},computed:{cWrapperStyle:function cWrapperStyle(){var checked=this.checked,disabled=this.disabled,width=this.width,height=this.height,borderColor=this.borderColor,checkedBorderColor=this.checkedBorderColor,disabledBorderColor=this.disabledBorderColor,backgroundColor=this.backgroundColor,checkedBackgroundColor=this.checkedBackgroundColor,disabledBackgroundColor=this.disabledBackgroundColor;return{width:width,height:height,borderColor:disabled?disabledBorderColor:checked?checkedBorderColor:borderColor,backgroundColor:disabled?disabledBackgroundColor:checked?checkedBackgroundColor:backgroundColor};},cTitleStyle:function cTitleStyle(){var checked=this.checked,disabled=this.disabled,color=this.color,checkedColor=this.checkedColor,disabledColor=this.disabledColor;return{color:disabled?disabledColor:checked?checkedColor:color};}},methods:{onClick:function onClick(){if(!this.disabled){this.$emit('select',this.index);}}}};/***/},/* 72 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__type__=__webpack_require__(227);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom=weex.requireModule('dom');/* harmony default export */__webpack_exports__["a"]={props:{name:{default:'success',type:String},size:{default:'small',type:String},iconStyle:{type:Object,default:function _default(){return{};}}},data:function data(){return{Icon:__WEBPACK_IMPORTED_MODULE_1__type__["a"/* default */]};},beforeCreate:function beforeCreate(){dom.addRule('fontFace',{'fontFamily':"weexUiIconFont",'src':"url('https://at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"});},computed:{mergeStyle:function mergeStyle(){var iconStyle=this.iconStyle,size=this.size;var fontSize='48px';switch(size){case'xs':fontSize='24px';break;case'small':fontSize='48px';break;case'medium':fontSize='72px';break;case'big':fontSize='128px';break;default:fontSize='48px';}return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({fontFamily:'weexUiIconFont',fontSize:fontSize},iconStyle);}},methods:{itemClicked:function itemClicked(name){this.$emit('wxcIconClicked',{name:name});}}};/***/},/* 73 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__wxc_mask__=__webpack_require__(74);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcMask:__WEBPACK_IMPORTED_MODULE_1__wxc_mask__["a"/* default */]},props:{width:{type:[Number,String],default:750},height:{type:[Number,String],default:750},show:{type:Boolean,default:false},showIndicator:{type:Boolean,default:true},imageList:Array,indicatorColor:{type:Object,default:function _default(){return{'item-color':'rgba(255, 195, 0, .5)','item-selected-color':'#ffc300','item-size':'20px'};}},index:{type:[Number,String],default:0},interval:{type:[Number,String],default:3000},opacity:{type:[Number,String],default:0.6}},computed:{indicatorStyle:function indicatorStyle(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({width:this.width+'px'},this.indicatorColor);}},methods:{maskOverlayClick:function maskOverlayClick(){this.$emit('wxcLightboxOverlayClicked',{});}}};/***/},/* 74 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(233);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 75 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__=__webpack_require__(236);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__wxc_overlay__=__webpack_require__(26);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={components:{WxcOverlay:__WEBPACK_IMPORTED_MODULE_2__wxc_overlay__["a"/* default */]},props:{height:{type:[String,Number],default:800},width:{type:[String,Number],default:702},top:{type:Number,default:0},show:{type:Boolean,default:false},showClose:{type:Boolean,default:false},duration:{type:[String,Number],default:300},hasOverlay:{type:Boolean,default:true},hasAnimation:{type:Boolean,default:true},timingFunction:{type:Array,default:function _default(){return['ease-in','ease-out'];}},overlayCfg:{type:Object,default:function _default(){return{hasAnimation:true,timingFunction:['ease-in','ease-out'],canAutoClose:true,duration:300,opacity:0.6};}},borderRadius:{type:[String,Number],default:0},overlayCanClose:{type:Boolean,default:true},maskBgColor:{type:String,default:'#ffffff'},opacity:{type:[Number,String],default:0.6}},data:function data(){return{closeIcon:'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',maskTop:264,opened:false};},computed:{mergeOverlayCfg:function mergeOverlayCfg(){return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({},this.overlayCfg,{hasAnimation:this.hasAnimation});},maskStyle:function maskStyle(){var width=this.width,height=this.height,showClose=this.showClose,hasAnimation=this.hasAnimation,opened=this.opened,top=this.top;var newHeight=showClose?height-0+100:height;var _weex$config$env=weex.config.env,deviceHeight=_weex$config$env.deviceHeight,deviceWidth=_weex$config$env.deviceWidth,platform=_weex$config$env.platform;var _deviceHeight=deviceHeight||1334;var isWeb=(typeof window==='undefined'?'undefined':__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(window))==='object'&&platform.toLowerCase()==='web';var navHeight=isWeb?0:130;var pageHeight=_deviceHeight/deviceWidth*750-navHeight;return{width:width+'px',height:newHeight+'px',left:(750-width)/2+'px',top:(top||(pageHeight-height)/2)+'px',opacity:hasAnimation&&!opened?0:1};},contentStyle:function contentStyle(){return{width:this.width+'px',backgroundColor:this.maskBgColor,height:this.height+'px',borderRadius:this.borderRadius+'px'};},shouldShow:function shouldShow(){var _this=this;var show=this.show,hasAnimation=this.hasAnimation;hasAnimation&&setTimeout(function(){_this.appearMask(show);},50);return show;}},methods:{closeIconClicked:function closeIconClicked(){this.$refs.overlay.appearOverlay(false);if(!this.overlayCanClose){this.appearMask(false);}},wxcOverlayBodyClicking:function wxcOverlayBodyClicking(){if(this.hasAnimation){this.appearMask(false);this.$emit('wxcOverlayBodyClicking',{});}},wxcOverlayBodyClicked:function wxcOverlayBodyClicked(){if(!this.hasAnimation){this.appearMask(false);this.$emit('wxcOverlayBodyClicked',{});}},needEmit:function needEmit(){var bool=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;this.opened=bool;!bool&&this.$emit('wxcMaskSetHidden',{});},appearMask:function appearMask(bool){var _this2=this;var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.duration;var hasAnimation=this.hasAnimation,timingFunction=this.timingFunction;var maskEl=this.$refs['wxc-mask'];if(hasAnimation&&maskEl){animation.transition(maskEl,{styles:{opacity:bool?1:0},duration:duration,timingFunction:timingFunction[bool?0:1],delay:0},function(){_this2.needEmit(bool);});}else{this.needEmit(bool);}}}};/***/},/* 76 *//***/function(module,exports,__webpack_require__){// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys=__webpack_require__(46);var hiddenKeys=__webpack_require__(33).concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return $keys(O,hiddenKeys);};/***/},/* 77 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__type__=__webpack_require__(78);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{show:{type:Boolean,default:false},loadingText:{type:String,default:''},loadingPic:{type:String,default:''},type:{type:String,default:'default'},interval:{type:[Number,String],default:0},needMask:{type:Boolean,default:false},maskStyle:{type:Object,default:function _default(){return{};}}},data:function data(){return{showLoading:false,tid:0};},watch:{show:function show(){this.setShow();}},computed:{loading:function loading(){var loading={};switch(this.type){case'trip':loading={url:__WEBPACK_IMPORTED_MODULE_0__type__["b"/* GIF */],class:'trip-loading'};break;default:loading={url:__WEBPACK_IMPORTED_MODULE_0__type__["a"/* BLACK_GIF */],class:'default-loading'};}return loading;},topPosition:function topPosition(){return(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.getPageHeight()-200)/2;}},created:function created(){this.setShow();},methods:{maskClicked:function maskClicked(){this.needMask&&this.$emit('wxcLoadingMaskClicked',{});},setShow:function setShow(){var _this=this;var interval=this.interval,show=this.show,showLoading=this.showLoading;var stInterval=parseInt(interval);clearTimeout(this.tid);if(show){if(showLoading){return;}if(stInterval===0){this.showLoading=true;}else{this.tid=setTimeout(function(){_this.showLoading=true;},stInterval);}}else{this.showLoading=false;}}}};/***/},/* 78 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/**
 * Created by Tw93 on 2016/10/29.
 */var GIF='https://img.alicdn.com/tfs/TB1aks3PpXXXXcXXFXXXXXXXXXX-150-150.gif';/* harmony export (immutable) */__webpack_exports__["b"]=GIF;var BLACK_GIF='https://img.alicdn.com/tfs/TB1Ep_9NVXXXXb8XVXXXXXXXXXX-74-74.gif';/* harmony export (immutable) */__webpack_exports__["a"]=BLACK_GIF;var PART='https://gtms02.alicdn.com/tfs/TB1y4QbSXXXXXbgapXXXXXXXXXX-50-50.gif';/* harmony export (immutable) */__webpack_exports__["c"]=PART;/***/},/* 79 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__rain_item_vue__=__webpack_require__(265);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{RainItem:__WEBPACK_IMPORTED_MODULE_0__rain_item_vue__["a"/* default */]},props:{picList:Array,config:Object,wrapStyle:Object},methods:{wxcLotteryRainCaught:function wxcLotteryRainCaught(e){this.$emit('wxcLotteryRainCaught',{rainId:e.rainId});},destroy:function destroy(){var picList=this.picList;var length=picList.length;for(var i=0;i<length;i++){this.$refs['rain-item-'+i][0].destroy();}}}};/***/},/* 80 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__libs_animate_js__=__webpack_require__(268);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__libs_config_js__=__webpack_require__(269);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__libs_region_js__=__webpack_require__(270);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{src:String,rainId:[String,Number],config:{type:Object,default:function _default(){return{};}}},computed:{// 合并用户配置和默认
cfg:function cfg(){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},__WEBPACK_IMPORTED_MODULE_2__libs_config_js__["a"/* DEFAULT */],this.config);}},data:function data(){return{showItem:false,hiding:false,pos:{},showTimer:null,hideTimer:null,intervalTimer:null};},created:function created(){var _cfg=this.cfg,width=_cfg.width,height=_cfg.height;this.pos=__WEBPACK_IMPORTED_MODULE_3__libs_region_js__["a"/* default */].get(width,height);},mounted:function mounted(){this.start();},methods:{start:function start(){var _this=this;var cfg=this.cfg;var random=Math.round(Math.random()*cfg.randomTime);var showTime=cfg.showTime+random;var intervalTime=Math.max(cfg.intervalTime,cfg.showAniTime+showTime+cfg.hideAniTime)+random;this.onShow=function(){_this.hideTimer=setTimeout(function(){_this.hide();},showTime);};this.onHide=function(){__WEBPACK_IMPORTED_MODULE_3__libs_region_js__["a"/* default */].remove(_this.pos);_this.pos={};_this.showItem=false;_this.hiding=false;var _cfg2=_this.cfg,width=_cfg2.width,height=_cfg2.height;_this.pos=__WEBPACK_IMPORTED_MODULE_3__libs_region_js__["a"/* default */].get(width,height);};this.showTimer=setTimeout(function(){_this.show();},random);this.intervalTimer=setInterval(function(){_this.show();},intervalTime);},hide:function hide(){var cfg=this.cfg,rainId=this.rainId;this.hiding=true;clearTimeout(this.showTimer);clearTimeout(this.hideTimer);__WEBPACK_IMPORTED_MODULE_1__libs_animate_js__["a"/* hidePig */](this.$refs['rain-item-'+rainId],cfg.hideAniTime,this.onHide);},show:function show(){var cfg=this.cfg,rainId=this.rainId;this.showItem=true;__WEBPACK_IMPORTED_MODULE_1__libs_animate_js__["c"/* showPig */](this.$refs['rain-item-'+rainId],cfg.showAniTime,this.onShow);},caught:function caught(){var _this2=this;var rainId=this.rainId,hiding=this.hiding;if(hiding)return;clearTimeout(this.showTimer);clearTimeout(this.hideTimer);__WEBPACK_IMPORTED_MODULE_1__libs_animate_js__["b"/* shakePig */](this.$refs['rain-item-'+rainId],function(){_this2.hide();});this.$emit('wxcLotteryRainCaught',{rainId:rainId});},destroy:function destroy(){__WEBPACK_IMPORTED_MODULE_3__libs_region_js__["a"/* default */].remove(this.pos);clearTimeout(this.showTimer);clearTimeout(this.hideTimer);clearInterval(this.intervalTimer);this.showItem=false;}}};/***/},/* 81 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(273);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 82 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Navigator=weex.requireModule('navigator');/* harmony default export */__webpack_exports__["a"]={props:{backgroundColor:{type:String,default:'#FFC900'},leftButton:{type:String,default:'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'},textColor:{type:String,default:'#3D3D3D'},rightButton:{type:String,default:''},title:{type:String,default:'标题'},leftText:{type:String,default:''},rightText:{type:String,default:''},useDefaultReturn:{type:Boolean,default:true},show:{type:Boolean,default:true},barStyle:{type:Object}},computed:{newBarStyle:function newBarStyle(){var backgroundColor=this.backgroundColor,barStyle=this.barStyle;return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({backgroundColor:backgroundColor},barStyle);}},methods:{leftButtonClicked:function leftButtonClicked(){if(this.useDefaultReturn){Navigator.pop({},function(e){});}this.$emit('wxcMinibarLeftButtonClicked',{});},rightButtonClicked:function rightButtonClicked(){var hasRightContent=this.rightText||this.rightButton||this.$slots&&this.$slots.right;hasRightContent&&this.$emit('wxcMinibarRightButtonClicked',{});}}};/***/},/* 83 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__type__=__webpack_require__(281);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{notice:{type:String,default:''},noticeUrl:{type:String,default:''},mode:{type:String,default:''},lines:{type:[Number,String],default:1},type:{type:String,default:''},spm:{type:String,default:''}},computed:{contentWidth:function contentWidth(){return this.mode?605:683;},modeIcon:function modeIcon(){var modeIcon=void 0;switch(this.mode){case'link':modeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].linkIcon;break;case'closable':modeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].closeIcon;break;default:modeIcon='';}return modeIcon;},typeIcon:function typeIcon(){var typeIcon=void 0;switch(this.type){case'success':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].successIcon;break;case'error':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].errorIcon;break;case'info':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].infoIcon;break;case'question':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].questionIcon;break;case'warn':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].warnIcon;break;case'time':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].timeIcon;break;case'redbag':typeIcon=__WEBPACK_IMPORTED_MODULE_0__type__["a"/* default */].redbag;break;default:typeIcon='';}return typeIcon;}},data:function data(){return{show:true};},methods:{noticeBarClicked:function noticeBarClicked(){var mode=this.mode,noticeUrl=this.noticeUrl,spm=this.spm;if(mode==='link'&&noticeUrl){var ttid=weex.config.env.ttid;__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].goToH5Page(noticeUrl,spm,ttid,true);this.$emit('wxcNoticebarLinkClicked',{url:noticeUrl});}},noticeIconClicked:function noticeIconClicked(){var mode=this.mode;if(mode==='closable'){this.show=false;this.$emit('wxcNoticebarCloseClicked',{});}else{this.noticeBarClicked();}}}};/***/},/* 84 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__format__=__webpack_require__(287);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__wxc_minibar__=__webpack_require__(81);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var isWeb=__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isWeb();var dom=weex.requireModule('dom');/* harmony default export */__webpack_exports__["a"]={components:{WxcMinibar:__WEBPACK_IMPORTED_MODULE_2__wxc_minibar__["a"/* default */]},props:{selectedDate:Array,animationType:{type:String,default:'push'},dateRange:{type:Array,required:true,default:function _default(){return[];}},minibarCfg:{type:Object,default:function _default(){return{'title':'选择日期','background-color':'#FFC900','text-color':'#3D3D3D'};}},showHeader:{type:Boolean,default:false},selectedNote:{type:Array,default:function _default(){return['开始','到达','往返'];}},isRange:{type:Boolean,default:false},needDestroy:{type:Boolean,default:false},descList:{type:Array,default:function _default(){return[];}},selectedCellStyle:{type:Object,default:function _default(){return{};}},selectedTextStyle:{type:Object,default:function _default(){return{};}}},data:function data(){return{isShow:false,reSelect:true,today:__WEBPACK_IMPORTED_MODULE_0__format__["b"/* getToDay */](),departDate:'',arriveDate:''};},computed:{calendarExtendStyle:function calendarExtendStyle(){return __WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].uiStyle.pageTransitionAnimationStyle(this.animationType);},monthsArray:function monthsArray(){var range=this.dateRange,today=this.today,departDate=this.departDate,arriveDate=this.arriveDate,selectedNote=this.selectedNote,descList=this.descList;var param={range:range,today:today,departDate:departDate,arriveDate:arriveDate,selectedNote:selectedNote,descList:descList};return __WEBPACK_IMPORTED_MODULE_0__format__["a"/* generateDateCell */](param);}},created:function created(){this.isIPhoneX=__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isIPhoneX();this.showTitle=isWeb||this.showHeader;this.detectShow();},mounted:function mounted(){var _this=this;var needDestroy=this.needDestroy;var hold=isWeb?700:100;!needDestroy&&setTimeout(function(){_this.isShow=true;_this.scrollToDate();},hold);},watch:{needDestroy:function needDestroy(newVal,preVal){var _this2=this;if(!newVal&&newVal!==preVal){setTimeout(function(){_this2.isShow=true;},200);}}},methods:{minibarLeftButtonClick:function minibarLeftButtonClick(){var _this3=this;setTimeout(function(){_this3.hide();_this3.$emit('wxcPageCalendarBackClicked',{});},100);},onClickDate:function onClickDate(datConfig){var self=this;if(datConfig.disabled||datConfig.isEmpty)return;if(self.reSelect){self.departDate='';self.arriveDate='';self.reSelect=false;}if(self.isRange){if(self.departDate&&Date.parse(self.departDate)<=Date.parse(datConfig.date)){self.arriveDate=datConfig.date;}else{self.departDate=datConfig.date;}if(self.departDate&&self.arriveDate){self.dispatchDateChange([self.departDate,self.arriveDate]);}}else{self.departDate=datConfig.date;self.dispatchDateChange([self.departDate]);}},scrollToDate:function scrollToDate(){var _this4=this;setTimeout(function(){if(_this4.departDate){var el=_this4.$refs.departDate[0];el&&dom.getComponentRect&&dom.getComponentRect(el,function(e){if(e&&e.result){var bottom=e.size.bottom;var env=weex.config.env;// 误差
var height=env.deviceHeight/env.deviceWidth*750-50;if(bottom>height||bottom===0){dom.scrollToElement(el,{offset:-146,animated:false});}}});}},10);},dispatchDateChange:function dispatchDateChange(dateArr){var _this5=this;var duration=isWeb?400:600;setTimeout(function(){_this5.hide();},duration);this.$emit('wxcPageCalendarDateSelected',{date:dateArr});},detectShow:function detectShow(){if(this.isRange&&this.selectedDate.length>=2){this.departDate=this.selectedDate[0];this.arriveDate=this.selectedDate[1];}else if(this.selectedDate.length>=1){this.departDate=this.selectedDate[0];this.arriveDate='';}},_animate:function _animate(status){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var ref=this.$refs.pageCalendar;if(this.animationType==='push'){__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].animation.pageTransitionAnimation(ref,'translateX('+(status?-750:750)+'px)',status,callback);}else if(this.animationType==='model'){__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].animation.pageTransitionAnimation(ref,'translateY('+(status?-__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.getScreenHeight():__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.getScreenHeight())+'px)',status,callback);}},show:function show(){var needDestroy=this.needDestroy;needDestroy&&(this.isShow=true);this.reSelect=true;this.detectShow();this._animate(true);needDestroy&&this.scrollToDate();},hide:function hide(){this.needDestroy&&(this.isShow=false);this.reSelect=false;this._animate(false);this.$emit('wxcPageCalendarHide',{});}}};/***/},/* 85 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_bind_env__=__webpack_require__(9);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{url:{type:String,default:''},needSlider:{type:Boolean,default:true}},data:function data(){return{isPanning:false,appearMap:[],supportAndroid:__WEBPACK_IMPORTED_MODULE_2__utils_bind_env__["a"/* default */].supportsEBForAndroid()};},mounted:function mounted(){var _this=this;setTimeout(function(){if(_this.supportAndroid&&_this.needSlider){var element=_this.$refs['wxc-pan-item'];if(element){__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default.a.prepare&&__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:element.ref,eventType:'pan'});}}},300);},methods:{itemClicked:function itemClicked(){if(this.isPanning){return;}this.url&&__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].goToH5Page(this.url,true);this.$emit('wxcPanItemClicked',{extId:this.extId});},dispatchPan:function dispatchPan(e){var _this2=this;if(this.supportAndroid&&this.needSlider){if(e.state==='start'){this.isPanning=true;var element=this.$refs['wxc-pan-item'];element&&this.$emit('wxcPanItemPan',{element:element,extId:this.extId});}else if(e.state==='end'){setTimeout(function(){_this2.isPanning=false;},50);}}}}};/***/},/* 86 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__wxc_loading_type__=__webpack_require__(78);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{show:{type:Boolean,default:false},width:{type:[Number,String],default:36},height:{type:[Number,String],default:36}},data:function data(){return{PART:__WEBPACK_IMPORTED_MODULE_0__wxc_loading_type__["c"/* PART */]};},computed:{loadingStyle:function loadingStyle(){var height=this.height,width=this.width;return{height:height+'px',width:width+'px'};}}};/***/},/* 87 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={props:{buttons:{type:Array,default:[]},position:{type:Object,default:function _default(){return{x:0,y:0};}},arrowPosition:{type:Object,default:function _default(){return{pos:'top',x:0,y:0};}},coverColor:{type:String,default:'rgba(0, 0, 0, 0.4)'},hasAnimation:{type:Boolean,default:true},textStyle:{type:Object,default:function _default(){return{};}}},data:function data(){return{show:false,showIn:false};},computed:{coverStyle:function coverStyle(){return this.coverColor?{backgroundColor:this.coverColor,opacity:this.hasAnimation||!this.showIn?'0':'1'}:'';},transformOrigin:function transformOrigin(){var _arrowPosition=this.arrowPosition,_arrowPosition$x=_arrowPosition.x,x=_arrowPosition$x===undefined?0:_arrowPosition$x,_arrowPosition$y=_arrowPosition.y,y=_arrowPosition$y===undefined?0:_arrowPosition$y,_arrowPosition$pos=_arrowPosition.pos,pos=_arrowPosition$pos===undefined?'top':_arrowPosition$pos;var _origins=[];switch(pos){case'top':case'bottom':_origins=[x<0?'right':'left',pos];break;case'left':case'right':_origins=[pos,y<0?'bottom':'top'];break;}return _origins.join(' ');},contentTransform:function contentTransform(){var _arrowPosition$pos2=this.arrowPosition.pos,pos=_arrowPosition$pos2===undefined?'top':_arrowPosition$pos2;var _arrowPosition2=this.arrowPosition,_arrowPosition2$x=_arrowPosition2.x,x=_arrowPosition2$x===undefined?0:_arrowPosition2$x,_arrowPosition2$y=_arrowPosition2.y,y=_arrowPosition2$y===undefined?0:_arrowPosition2$y;var _translates=['scale(0)'];if(x>=0&&x<22){x=22;}else if(x<0&&x>-22){x=-22;}if(y>=0&&y<22){y=22;}else if(y<0&&y>-22){y=-22;}switch(pos){case'top':case'bottom':_translates[1]='translateX('+(x<0?x-15:x+15)+'px)';break;case'left':case'right':_translates[1]='translateY('+(y<0?y-15:y+15)+'px)';break;}return _translates.join(' ');},contentStyle:function contentStyle(){var _position=this.position,_position$x=_position.x,x=_position$x===undefined?0:_position$x,_position$y=_position.y,y=_position$y===undefined?0:_position$y;var style={};x<0?style.right=-x+'px':style.left=x+'px';y<0?style.bottom=-y+'px':style.top=y+'px';style.opacity=this.hasAnimation||!this.showIn?'0':'1';style.transform=this.hasAnimation||!this.showIn?this.contentTransform:'scale(1)';style.transformOrigin=this.transformOrigin;return style;},arrowStyle:function arrowStyle(){var _arrowPosition3=this.arrowPosition,_arrowPosition3$x=_arrowPosition3.x,x=_arrowPosition3$x===undefined?0:_arrowPosition3$x,_arrowPosition3$y=_arrowPosition3.y,y=_arrowPosition3$y===undefined?0:_arrowPosition3$y;var _arrowPosition$pos3=this.arrowPosition.pos,pos=_arrowPosition$pos3===undefined?'top':_arrowPosition$pos3;var style={};switch(pos){case'top':style.top='6px';case'bottom'://eslint-disable-line
!style.top&&(style.bottom='6px');style.transform='scaleX(0.8) rotate(45deg)';if(x>=0&&x<22){x=22;}else if(x<0&&x>-22){x=-22;}x<0?style.right=-x+'px':style.left=x+'px';break;case'left':style.left='6px';case'right'://eslint-disable-line
!style.left&&(style.right='6px');style.transform='scaleY(0.8) rotate(45deg)';if(y>=0&&y<22){y=22;}else if(y<0&&y>-22){y=-22;}y<0?style.bottom=-y+'px':style.top=y+'px';break;default:break;}return style;}},methods:{wxcPopoverShow:function wxcPopoverShow(){var _this=this;if(this.animationLock){return;}this.show=true;if(this.hasAnimation){setTimeout(function(){return _this.wxcPopoverAnimationShow();},40);}else{setTimeout(function(){return _this.showIn=true;},40);}},/**
    * smooth in
    **/wxcPopoverAnimationShow:function wxcPopoverAnimationShow(){var _this2=this;var popoverEl=this.$refs['wxc-popover'];var coverEl=this.$refs['wxc-cover'];if(!coverEl||!popoverEl){return;}this.setAnimationLock();var a1End=false;var a2End=false;animation.transition(popoverEl,{styles:{opacity:1,transform:'scale(1)',transformOrigin:this.transformOrigin},delay:0,duration:250,timingFunction:'ease-out'},function(e){a1End=true;if(a1End&&a2End){_this2.animationLock=false;}});animation.transition(coverEl,{styles:{opacity:1},delay:0,duration:250,timingFunction:'ease-in'},function(e){a2End=true;if(a1End&&a2End){_this2.animationLock=false;}});},wxcButtonClicked:function wxcButtonClicked(index,key){if(this.animationLock){return;}this.$emit('wxcPopoverButtonClicked',{key:key,index:index});this.hideAction();},/**
       * 隐藏操作
       */hideAction:function hideAction(){var _this3=this;if(this.animationLock){return;}if(this.hasAnimation){this.setAnimationLock();var popoverEl=this.$refs['wxc-popover'];var coverEl=this.$refs['wxc-cover'];if(!popoverEl||!coverEl){return;}var a1End=false;var a2End=false;animation.transition(popoverEl,{styles:{opacity:0,transform:this.contentTransform,transformOrigin:this.transformOrigin},duration:250},function(){a1End=true;if(a1End&&a2End){_this3.show=false;_this3.showIn=false;_this3.animationLock=false;}});animation.transition(coverEl,{styles:{opacity:0},duration:250},function(){a2End=true;if(a1End&&a2End){_this3.show=false;_this3.showIn=false;_this3.animationLock=false;}});}else{this.show=false;this.showIn=false;}},/**
       * 设置动画锁
       */setAnimationLock:function setAnimationLock(){this.animationLock=true;}}};/***/},/* 88 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__wxc_overlay__=__webpack_require__(26);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={components:{WxcOverlay:__WEBPACK_IMPORTED_MODULE_1__wxc_overlay__["a"/* default */]},props:{show:{type:Boolean,default:false},pos:{type:String,default:'bottom'},popupColor:{type:String,default:'#FFFFFF'},overlayCfg:{type:Object,default:function _default(){return{hasAnimation:true,timingFunction:['ease-in','ease-out'],duration:300,opacity:0.6};}},height:{type:[Number,String],default:840},standOut:{type:[Number,String],default:0},width:{type:[Number,String],default:750},animation:{type:Object,default:function _default(){return{timingFunction:'ease-in'};}}},data:function data(){return{haveOverlay:true,isOverShow:true};},computed:{isNeedShow:function isNeedShow(){var _this=this;setTimeout(function(){_this.appearPopup(_this.show);},50);return this.show;},_height:function _height(){this.appearPopup(this.show,150);return this.height;},padStyle:function padStyle(){var pos=this.pos,width=this.width,height=this.height,popupColor=this.popupColor,standOut=this.standOut;var stand=parseInt(standOut,10);var style={width:width+'px',backgroundColor:popupColor};pos==='top'&&(style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{top:-height+stand+'px',height:height+'px'}));pos==='bottom'&&(style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{bottom:-height+stand+'px',height:height+'px'}));pos==='left'&&(style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{left:-width+stand+'px'}));pos==='right'&&(style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{right:-width+stand+'px'}));return style;}},methods:{handleTouchEnd:function handleTouchEnd(e){// 在支付宝上面有点击穿透问题
var platform=weex.config.env.platform;platform==='Web'&&e.preventDefault&&e.preventDefault();},hide:function hide(){this.appearPopup(false);this.$refs.overlay.appearOverlay(false);},wxcOverlayBodyClicking:function wxcOverlayBodyClicking(){this.isShow&&this.appearPopup(false);},appearPopup:function appearPopup(bool){var _this2=this;var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:300;this.isShow=bool;var popupEl=this.$refs['wxc-popup'];if(!popupEl){return;}animation.transition(popupEl,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({styles:{transform:this.getTransform(this.pos,this.width,this.height,!bool)},duration:duration,delay:0},this.animation),function(){if(!bool){_this2.$emit('wxcPopupOverlayClicked',{pos:_this2.pos});}});},getTransform:function getTransform(pos,width,height,bool){var _size=pos==='top'||pos==='bottom'?height:width;bool&&(_size=0);var _transform=void 0;switch(pos){case'top':_transform='translateY('+_size+'px)';break;case'bottom':_transform='translateY(-'+_size+'px)';break;case'left':_transform='translateX('+_size+'px)';break;case'right':_transform='translateX(-'+_size+'px)';break;}return _transform;}}};/***/},/* 89 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{barColor:{type:String,default:'#FFC900'},barWidth:{type:Number,default:600},barHeight:{type:Number,default:8},barRadius:{type:Number,default:0},value:{type:Number,default:0},backgroundColor:{type:String,default:'#f2f3f4'}},computed:{runWayStyle:function runWayStyle(){var barWidth=this.barWidth,barHeight=this.barHeight,barRadius=this.barRadius,backgroundColor=this.backgroundColor;return{width:barWidth+'px',height:barHeight+'px',borderRadius:barRadius+'px',backgroundColor:backgroundColor};},progressStyle:function progressStyle(){var value=this.value,barWidth=this.barWidth,barHeight=this.barHeight,barColor=this.barColor,barRadius=this.barRadius;var newValue=value<0?0:value>100?100:value;return{backgroundColor:barColor,borderRadius:barRadius+'px',height:barHeight+'px',width:newValue/100*barWidth+'px'};}}};/***/},/* 90 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__(314);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__item_vue__=__webpack_require__(316);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{wxcRadio:__WEBPACK_IMPORTED_MODULE_1__item_vue__["a"/* default */]},props:{list:{type:Array,default:function _default(){return[];}},config:{type:Object,default:function _default(){return{};}}},data:function data(){return{checkedIndex:-1};},computed:{updateList:function updateList(){var checkedIndex=this.checkedIndex,list=this.list;var updateList=[];list&&list.forEach(function(item,i){item.checked=i===checkedIndex;updateList.push(item);});return updateList;}},watch:{list:function list(newList,oldList){if(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(newList)!==__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(oldList.map(function(v){var title=v.title,value=v.value;return{title:title,value:value};}))){this.checkedIndex=-1;}this.setListChecked(newList);}},created:function created(){this.setListChecked(this.list);},methods:{setListChecked:function setListChecked(list){var _this=this;if(list&&list.length>0){list.forEach(function(item,i){item.checked&&(_this.checkedIndex=i);});}},wxcRadioItemChecked:function wxcRadioItemChecked(i,e){var oldIndex=this.checkedIndex;var _list$i=this.list[i],value=_list$i.value,title=_list$i.title;this.checkedIndex=i;this.$emit('wxcRadioListChecked',{value:value,title:title,oldIndex:oldIndex,index:i});}}};/***/},/* 91 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__wxc_cell__=__webpack_require__(35);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__type_js__=__webpack_require__(319);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcCell:__WEBPACK_IMPORTED_MODULE_0__wxc_cell__["a"/* default */]},props:{hasTopBorder:{type:Boolean,default:false},title:{type:String,require:true},value:{type:[String,Number,Object],require:true},disabled:{type:Boolean,default:false},checked:{type:Boolean,default:false},config:{type:Object,default:function _default(){return{};}}},data:function data(){return{icon:[__WEBPACK_IMPORTED_MODULE_1__type_js__["a"/* CHECKED */],__WEBPACK_IMPORTED_MODULE_1__type_js__["b"/* DISABLED */]]};},computed:{radioIcon:function radioIcon(){var icon=this.icon,disabled=this.disabled,checked=this.checked,config=this.config;var mergeIcon=icon;config.checkedIcon&&(mergeIcon[0]=config.checkedIcon);config.disabledIcon&&(mergeIcon[1]=config.disabledIcon);return checked?mergeIcon[disabled?1:0]:'';},backgroundColor:function backgroundColor(){var disabled=this.disabled;return disabled?'#F2F3F4':'#FFFFFF';},color:function color(){var disabled=this.disabled,checked=this.checked,config=this.config;var checkedColor='#EE9900';config.checkedColor&&(checkedColor=config.checkedColor);return checked&&!disabled?checkedColor:'#3D3D3D';}},methods:{wxcCellClicked:function wxcCellClicked(){var disabled=this.disabled,value=this.value;if(!disabled){this.$emit('wxcRadioItemChecked',{value:value,disabled:disabled});}}}};/***/},/* 92 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_bind_env__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');// 减少打包体积
var ICON_ARROW_DOWN='https://img.alicdn.com/tfs/TB1A8faeTtYBeNjy1XdXXXXyVXa-48-48.png';/* harmony default export */__webpack_exports__["a"]={props:{scrollerRef:String,maxTime:{type:Number,default:0},mainText:{type:String,default:'下拉即可刷新...'},pullingText:{type:String,default:'释放即可刷新...'},refreshingText:{type:String,default:'加载中...'},textWidth:{type:Number,default:200}},data:function data(){return{ICON_ARROW_DOWN:ICON_ARROW_DOWN,refreshing:false,couldUnLash:false};},computed:{newStyleFlag:function newStyleFlag(){return this.scrollerRef&&__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEBForIos();},refresherText:function refresherText(){return this.refreshing?this.refreshingText:this.pText;},pText:function pText(){return this.couldUnLash?this.pullingText:this.mainText;}},created:function created(){this.newStyleFlag&&this.animationBinding();},beforeDestroy:function beforeDestroy(){this.bindingsDestroy();},methods:{onRefresh:function onRefresh(event){var _this=this;this.$emit('wxcRefresh',event);this.refreshing=true;this.newStyleFlag&&this.cycleGoRound();if(this.maxTime<=0)return;this.timeoutSto&&clearTimeout(this.timeoutSto);this.timeoutSto=setTimeout(function(){_this.$emit('wxcTimeout');_this.wxcCancel();},this.maxTime);},/**
     * 取消 refreshing
     */wxcCancel:function wxcCancel(){this.refreshing=false;this.timeoutSto&&clearTimeout(this.timeoutSto);this.roundingDestroy();},/**
     * 下拉事件
     */onPullingDown:function onPullingDown(event){this.$emit('wxcPullingDown',event);var pd=event.pullingDistance*(__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].env.isIOS()?-1:1);pd>(__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].env.isAndroid()?200:140)?this.couldUnLash=true:this.couldUnLash=false;if(this.refreshing&&pd<20){this.timeoutSto&&clearTimeout(this.timeoutSto);this.refreshing=false;this.roundingDestroy();}},/**
     * 注册 bindingx
     */animationBinding:function animationBinding(){var _this2=this;setTimeout(function(){// 降级版本取不到，需要注意
var scroller=_this2.$parent.$refs[_this2.scrollerRef].ref;var cover2=_this2.$refs['cover2'].ref;var coverCycle=_this2.$refs['cover-cycle'].ref;var bindingResult=__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a.bind({eventType:'scroll',anchor:scroller,props:[{element:cover2,property:'transform.rotateZ',expression:'y>-140?(y%75/150*-360):156'},{element:coverCycle,property:'opacity',expression:'y<-75 ?1:0'}]},function(e){});_this2.bindingToken=bindingResult.token;},300);},/**
     * 旋转动作
     */cycleGoRound:function cycleGoRound(){if(__WEBPACK_IMPORTED_MODULE_2__utils__["a"/* default */].env.isAndroid())return;var cycle=this.$refs['cycle'].ref;this.arrowShow(false);if(!cycle){return;}var roundingResult=__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a.bind({eventType:'timing',props:[{element:cycle,property:'transform.rotateZ',expression:'t*0.72'}]},function(e){});this.roundingToken=roundingResult.token;},/**
     * 箭头显隐控制
     */arrowShow:function arrowShow(){var _show=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var arrow=this.$refs['arrow'];arrow&&animation.transition(arrow,{styles:{opacity:_show?1:0,transform:_show?"scale(1)":"scale(0.5)"},duration:300,delay:0},function(){});},/**
     * 完整 bindingx 销毁
     */bindingsDestroy:function bindingsDestroy(){if(this.bindingToken!==0){__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a&&__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a.unbind({eventType:'scroll',token:this.bindingToken});this.bindingToken=0;}this.roundingDestroy();},/**
     * 旋转 bindingx 销毁
     */roundingDestroy:function roundingDestroy(){if(this.roundingToken!==0){__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a&&__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex___default.a.unbind({eventType:'timing',token:this.roundingToken});this.roundingToken=0;}this.arrowShow(true);}}};/***/},/* 93 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcRichTextText:__webpack_require__(39),WxcRichTextLink:__webpack_require__(334),WxcRichTextIcon:__webpack_require__(336),WxcRichTextTag:__webpack_require__(97)},props:{configList:{type:[Array,String],default:function _default(){return[];}},hasTextMargin:{type:Boolean,default:true}},data:function data(){return{};},computed:{isNotEmptyArray:function isNotEmptyArray(){return __WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].isNonEmptyArray(this.configList);},isString:function isString(){return __WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].isString(this.configList);}},methods:{linkClick:function linkClick(e){this.$emit('wxcRichTextLinkClick',e);}}};/***/},/* 94 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{textValue:{type:String,default:''},textTheme:{type:String,default:'gray'},textStyle:{type:Object,default:function _default(){return{};}},hasTextMargin:{type:Boolean,default:true}},computed:{themeStyle:function themeStyle(){var style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},this.textStyle);if(style&&(style.fontSize||style['font-size'])){style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{fontSize:(style.fontSize||style['font-size'])+'px',height:(style.fontSize||style['font-size'])*1.2+'px'});}return style;}}};/***/},/* 95 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__wxc_rich_text_text_vue__=__webpack_require__(39);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={components:{WxcRichTextText:__WEBPACK_IMPORTED_MODULE_1__wxc_rich_text_text_vue__["default"]},props:{linkValue:{type:[String,Number],default:''},hasTextMargin:{type:Boolean,default:true},linkHref:{type:String,default:''},linkTheme:{type:String,default:'black'},linkStyle:{type:Object,default:function _default(){return{};}}},data:function data(){return{defObj:{}};},methods:{onLinkClick:function onLinkClick(e){this.$emit('wxcRichTextLinkClick',{element:e,href:this.linkHref});__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].goToH5Page(this.linkHref);}}};/***/},/* 96 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{iconSrc:String,iconStyle:{type:Object,default:function _default(){return{height:24};}}},data:function data(){return{width:90};},computed:{computedStyle:function computedStyle(){var width=this.width,iconStyle=this.iconStyle;if(iconStyle&&iconStyle.width&&iconStyle.height){return{width:iconStyle.width+"px",height:iconStyle.height+"px"};}else{return{width:width+"px",height:iconStyle.height+"px"};}}},methods:{onLoad:function onLoad(e){if(e.success&&e.size&&e.size.naturalWidth>0){var width=e.size.naturalWidth;var height=e.size.naturalHeight;this.width=width*(this.iconStyle.height/height);}}}};/***/},/* 97 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_tag_vue__=__webpack_require__(98);/* empty harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4510f178_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_tag_vue__=__webpack_require__(342);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(340);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-4510f178";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_tag_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4510f178_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_tag_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-rich-text/wxc-rich-text-tag.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-4510f178",Component.options);}else{hotAPI.reload("data-v-4510f178",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["default"]=Component.exports;/***/},/* 98 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{tagValue:{type:[String,Number],default:''},tagTheme:{type:String,default:'blue'},tagStyle:{type:Object,default:function _default(){return{};}}},computed:{newTheme:function newTheme(){var tagStyle=this.tagStyle;var tagValue=this.tagValue;var divStyle={};var textStyle={};if(tagStyle&&tagStyle.fontSize){textStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},textStyle,{fontSize:tagStyle.fontSize+'px'});}if(tagStyle&&tagStyle.color){textStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},textStyle,{color:tagStyle.color});}if(tagStyle&&tagStyle.borderColor){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{borderColor:tagStyle.borderColor});}if(tagStyle&&tagStyle.borderWidth){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{borderWidth:tagStyle.borderWidth+'px'});}if(tagStyle&&tagStyle.borderRadius){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{borderRadius:tagStyle.borderRadius+'px'});}if(tagStyle&&tagStyle.backgroundColor){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{backgroundColor:tagStyle.backgroundColor});}if(tagStyle&&tagStyle.height){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{height:tagStyle.height+'px'});}if(tagStyle&&tagStyle.width){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{width:tagStyle.width+'px'});}if(tagValue&&tagValue.length===1){divStyle=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},divStyle,{paddingLeft:0,paddingRight:0});}return{divStyle:divStyle,textStyle:textStyle};}}};/***/},/* 99 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{list:{type:Array,required:true},themeColor:{type:Object,default:function _default(){return{};}}},computed:{cItems:function cItems(){return this.adapter(this.list);}},methods:{adapter:function adapter(items){var _themeColor=this.themeColor,lineColor=_themeColor.lineColor,pointInnerColor=_themeColor.pointInnerColor,pointBorderColor=_themeColor.pointBorderColor,highlightTitleColor=_themeColor.highlightTitleColor,highlightPointInnerColor=_themeColor.highlightPointInnerColor,highlightPointBorderColor=_themeColor.highlightPointBorderColor;var len=items.length;var pre=Date.now();return items.map(function(item,index){item.key=pre+'_'+index;item.__titleLineClass__=[];item.__contentClass__=[];item.__contentLineClass__=[];item.__pointClass__=[];item.__titleTextClass__=[];item.__pointStyle__={};item.__lineStyle__={};item.__titleStyle__={};if(lineColor)item.__lineStyle__.backgroundColor=lineColor;if(pointInnerColor)item.__pointStyle__.backgroundColor=pointInnerColor;if(pointBorderColor)item.__pointStyle__.borderColor=pointBorderColor;if(index===0){item.__titleLineClass__.push('first-one-title-line');}if(index===len-1){item.__titleLineClass__.push('last-one-title-line');item.__contentClass__.push('last-one-content');item.__contentLineClass__.push('last-one-content-line');}if(item.highlight){item.__pointClass__.push('highlight-point');item.__titleTextClass__.push('text-highlight-title');if(highlightTitleColor)item.__titleStyle__.color=highlightTitleColor;if(highlightPointInnerColor)item.__pointStyle__.backgroundColor=highlightPointInnerColor;if(highlightPointBorderColor)item.__pointStyle__.borderColor=highlightPointBorderColor;}return item;});}}};/***/},/* 100 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var DOM=weex.requireModule('dom');var Animation=weex.requireModule('animation');var OFFSET_ACCURACY=10;var SCALE=weex.config.env.platform.toLowerCase()==='web'?2:1;function _toNum(str){return typeof str==='number'?str:parseFloat((str||'').replace(/px$/i,''));}function _getHeight(element,callback){if(!element){return;}if(element.__cacheHeight){element.__cacheHeight&&callback&&callback(element.__cacheHeight);}else{DOM.getComponentRect(element,function(res){var height=(parseFloat(res&&res.size&&res.size.height)||0)/SCALE;height&&callback&&callback(element.__cacheHeight=height);});}}/* harmony default export */__webpack_exports__["a"]={props:{position:{'type':String,'default':'top'},height:[String,Number]},data:function data(){return{visible:true};},watch:{visible:function visible(newVal){newVal?this._slideIn():this._slideOut();}},created:function created(){this._height=_toNum(this.height)||0;this._isBottom=this.position==='bottom';this._direction=this._isBottom?1:-1;},methods:{_slideOut:function _slideOut(){var _this=this;this.getHeight(function(height){_this.$emit('slideOut');_this.slideY(height*_this._direction*SCALE,function(){_this.$emit('slideOutEnd');});});},_slideIn:function _slideIn(){var _this2=this;this.getHeight(function(height){_this2.$emit('slideIn');_this2.slideY(0,function(){_this2.$emit('slideInEnd');});});},getHeight:function getHeight(callback){return _getHeight(this.$refs.wrapper,callback);},slideOut:function slideOut(){this.visible=false;},slideIn:function slideIn(){this.visible=true;},slideY:function slideY(y,callback){Animation.transition(this.$refs.wrapper,{styles:{transform:'translateY('+y+'px)'},duration:150,//ms
timingFunction:'ease',delay:0//ms
},callback);}},handleTouchStart:function handleTouchStart(e){var touch=e.changedTouches[0];this._touchParams={pageY:touch.screenY,startY:touch.screenY,lastPageY:touch.screenY,timeStamp:e.timeStamp,direction:-1};},handleTouchMove:function handleTouchMove(e,bottomNav){var tp=this._touchParams;var touch=e.changedTouches[0];var offsetY=void 0;// 安卓下滚动的时候经常不触发touchstart事件
if(!tp||tp.hasEnd){return this._touchParams={pageY:touch.screenY,startY:touch.screenY,lastPageY:touch.screenY,timeStamp:e.timeStamp,direction:-1};}offsetY=touch.screenY-tp.pageY;tp.lastPageY=tp.pageY;tp.lastDirection=tp.direction;tp.direction=offsetY>0?1:-1;if(tp.lastDirection!==tp.direction){tp.startY=tp.lastPageY;}tp.pageY=touch.screenY;tp.offsetY=tp.pageY-tp.startY;if(!this.__scrollable&&bottomNav){if(tp.offsetY<=-OFFSET_ACCURACY){bottomNav.slideOut();}else if(tp.offsetY>=OFFSET_ACCURACY){bottomNav.slideIn();}}},handleTouchEnd:function handleTouchEnd(){var tp=this._touchParams;tp&&(tp.hasEnd=true);},handleScroll:function handleScroll(e,scroller,topNav,bottomNav,startThreshold){var _this3=this;var moveThreshold=arguments.length>5&&arguments[5]!==undefined?arguments[5]:5;var scrollY=e.contentOffset.y;var nav=topNav||bottomNav;var scrollFn=function scrollFn(maxScrollY){if(-scrollY>maxScrollY){return;}maxScrollY=Math.abs(maxScrollY);if(Math.abs(scrollY)<startThreshold){if(Math.abs(scrollY)>=maxScrollY-OFFSET_ACCURACY){var tp=_this3._touchParams;if(!tp){return;}var offsetY=tp.offsetY;if(offsetY<-OFFSET_ACCURACY){bottomNav&&bottomNav.slideOut();}else if(offsetY>OFFSET_ACCURACY){bottomNav&&bottomNav.slideIn();}}else{topNav&&topNav.slideIn();bottomNav&&bottomNav.slideIn();}}else{var _tp=_this3._touchParams;if(!_tp){return;}var _offsetY=_tp.offsetY;if(Math.abs(_offsetY)>=moveThreshold){if(_offsetY>0){topNav&&topNav.slideIn();bottomNav&&bottomNav.slideIn();}else{topNav&&topNav.slideOut();bottomNav&&bottomNav.slideOut();}}}};var maxScrollYCheck=function maxScrollYCheck(maxScrollY){if(!_this3.__scrollable){return;}if(startThreshold){scrollFn(maxScrollY);}else{nav.getHeight(function(navHeight){startThreshold=navHeight;scrollFn(maxScrollY);});}};if(!nav){return;}_getHeight(scroller,function(scrollerHeight){var maxScrollY=e.contentSize.height-scrollerHeight;_this3.__scrollable=maxScrollY>=OFFSET_ACCURACY;if(bottomNav){bottomNav.getHeight(function(height){_this3.__scrollable=maxScrollY>=height;maxScrollYCheck(maxScrollY);});}else{maxScrollYCheck(maxScrollY);}});}};/***/},/* 101 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_bind_env__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule('animation');var dom=weex.requireModule('dom');/* harmony default export */__webpack_exports__["a"]={data:function data(){return{env:'weex',diffX1:0,diffX2:0,barWidth:0,preventMoveEvent:true,minDist:0,// selectRange: [0, 0],
blockRadius:28,DPR:1,timeout:100,isAndroid:__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isAndroid()};},props:{selectRange:{type:Array,default:[0,0]},length:{type:Number,default:500},height:{type:Number,default:4},// 是否双滑块模式
range:{type:Boolean,default:false},// 最小值
min:{type:Number,default:0},// 最大值
max:{type:Number,default:100},// 最小取值范围，用于范围选择范围最小差值
minDiff:{type:Number,default:5},// 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
value:{type:[Number,Array],default:0},// 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]
defaultValue:{type:[Number,Array],default:0},// 值为 true 时，滑块为禁用状态
disabled:{type:Boolean,default:false},invalidColor:{type:String,default:'#E0E0E0'},validColor:{type:String,default:'#EE9900'},disabledColor:{type:String,default:'#AAA'},blockColor:{type:String,default:'#ffffff'}},watch:{value:function value(e){if(!this.range){this.diffX1=this._getDiffX(e||this.defaultValue);}else{this.diffX1=this._getDiffX(e[0]||this.defaultValue[0]);this.diffX2=this._getDiffX(e[1]||this.defaultValue[1]);this.barWidth=this.diffX2-this.diffX1;}}},created:function created(){if(__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isWeb()){this.env='web';this.DPR=window.devicePixelRatio?window.devicePixelRatio:1;}else{this.DPR=weex.config.env.scale;}},mounted:function mounted(){var _this=this;this.block1=this.$refs['slide-block-1'];// 左侧滑块
this.block2=this.$refs['slide-block-2'];// 右侧滑块
this.valueBar=this.$refs['value-bar'];// 黄色值条
this.barContainer=this.$refs['bar-container'];// 滚动条容器
if(!this.range){this.diffX1=this._getDiffX(this.value||this.defaultValue);}else{this.diffX1=this._getDiffX(this.value[0]||this.defaultValue[0]);this.diffX2=this._getDiffX(this.value[1]||this.defaultValue[1]);this.barWidth=this.diffX2-this.diffX1;}// 是否支持expresstionBinding
if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEB()&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare){this.block1&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:this.block1.ref,eventType:'pan'});this.block2&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:this.block2.ref,eventType:'pan'});this.valueBar&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:this.valueBar.ref,eventType:'pan'});}if(this.range){this.selectRange=this.value||this.defaultValue;// 初始化范围选择返回数据
this.minDist=this.minDiff/(this.max-this.min)*this.length;// 滑块1、2之前最小间距
}// 由于weex在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行
setTimeout(function(){dom.getComponentRect(_this.barContainer,function(option){var left=option.size.left;_this.leftDiffX=left;});},100);},computed:{containerStyle:function containerStyle(){return{width:this.length+56+'px',height:'56px'};},rangeBarStyle:function rangeBarStyle(){return{width:this.length+'px',height:this.height+'px',flexDirection:'row',backgroundColor:this.invalidColor};},valueBarStyle:function valueBarStyle(){var left=0;var width=0;if(!this.range){left=this.diffX1-this.length;width=this.length;}else{left=this.diffX1;width=this.diffX2-this.diffX1;}return{width:width+'px',height:this.height+'px',transform:'translateX('+left+'px)',backgroundColor:this.disabled?this.disabledColor:this.validColor};},blockStyle1:function blockStyle1(){var left=this.diffX1;return{transform:'translateX('+left+'px)',backgroundColor:this.blockColor};},blockStyle2:function blockStyle2(){return{transform:'translateX('+this.diffX2+'px)',backgroundColor:this.blockColor};}},methods:{getBlock1Value:function getBlock1Value(callback){var _this2=this;dom.getComponentRect(this.block1,function(option){var left=option.size.left;var value=_this2._getValue(left-_this2.leftDiffX);if(!_this2.range){callback&&callback(value);}else{_this2.selectRange[0]=value;callback&&callback(_this2.selectRange);}});},getBlock2Value:function getBlock2Value(callback){var _this3=this;dom.getComponentRect(this.block2,function(option){var left=option.size.left;_this3.selectRange[1]=_this3._getValue(left-_this3.leftDiffX);callback&&callback(_this3.selectRange);});},// 更新单选值或最小值
weexHandler1:function weexHandler1(e){var _this4=this;var self=this;switch(e.state){case'start':self.bindBlock1();break;case'move':this.getBlock1Value(function(value){return _this4.$emit('updateValue',value);});break;case'end':this.getBlock1Value(function(value){return _this4.$emit('wxcSliderBarTouchEnd',value);});break;default:break;}},// 更新最大值
weexHandler2:function weexHandler2(e){var _this5=this;var self=this;switch(e.state){case'start':self.bindBlock2();break;case'move':self.getBlock2Value(function(value){return _this5.$emit('updateValue',value);});break;case'end':self.getBlock2Value(function(value){return _this5.$emit('wxcSliderBarTouchEnd',value);});break;default:break;}},weexStartHandler1:function weexStartHandler1(){var _this6=this;// 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
if(!this.isAndroid){return;}this.firstInterval=setInterval(function(){_this6.getBlock1Value(function(value){return _this6.$emit('updateValue',value);});},this.timeout);},weexStartHandler2:function weexStartHandler2(){var _this7=this;if(!this.isAndroid){return;}// 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
this.secondInterval=setInterval(function(){_this7.getBlock2Value(function(value){return _this7.$emit('updateValue',value);});},this.timeout);},// 清除定时器
weexEndHandler:function weexEndHandler(){var _this8=this;if(!this.isAndroid){return;}this.firstInterval&&clearInterval(this.firstInterval);this.secondInterval&&clearInterval(this.secondInterval);if(this.range){this.getBlock2Value(function(value){return _this8.$emit('updateValue',value);});}else{this.getBlock1Value(function(value){return _this8.$emit('updateValue',value);});}},webStartHandler:function webStartHandler(e){if(this.env==='weex'){return;}this.startX=e.touch.clientX;this.startDiffX1=this.diffX1;this.startDiffX2=this.diffX2;},webMoveHandler1:function webMoveHandler1(e){if(this.env==='weex'||this.disabled){return;}var deltaX=(e.touch.clientX-this.startX)*this.DPR;var diff=this.startDiffX1+deltaX;var max=this.length;if(this.range){max=this.diffX2-this.minDist;}if(diff>0&&diff<max){this.diffX1=diff;animation.transition(this.block1,{styles:{transform:'translateX('+this.diffX1+'px)'}},function(){});if(!this.range){this.$emit('updateValue',this._getValue(this.diffX1));}else{this.selectRange[0]=this._getValue(this.diffX1);this.$emit('updateValue',this.selectRange);}}},webEndHandler:function webEndHandler(e){if(this.env==='weex'||this.disabled){return;}if(!this.range){this.$emit('wxcSliderBarTouchEnd',this._getValue(this.diffX1));}else{this.selectRange[1]=this._getValue(this.diffX2);this.$emit('wxcSliderBarTouchEnd',this.selectRange);}},webMoveHandler2:function webMoveHandler2(e){if(this.env==='weex'||this.disabled){return;}var deltaX=(e.touch.clientX-this.startX)*this.DPR;var diff=this.startDiffX2+deltaX;var min=this.diffX1+this.minDist;var max=this.length;if(diff>min&&diff<max){this.diffX2=diff;animation.transition(this.block2,{styles:{transform:'translateX('+this.diffX2+'px)'}},function(){});if(!this.range){this.$emit('updateValue',this._getValue(this.diffX2));}else{this.selectRange[1]=this._getValue(this.diffX2);this.$emit('updateValue',this.selectRange);}}},bindBlock1:function bindBlock1(){var self=this;// 如果禁用，不行进行表达式绑定
if(self.disabled){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({token:this.gesToken1,eventType:'pan'});this.gesToken1=0;return;}// 初始化按钮&条的大小范围
var blockMax1=0;if(self.range){blockMax1=self.diffX2-self.minDist;}else{blockMax1=self.length;}var barMax1=self.diffX2;if(!self.range){var startLeft=self.diffX1-blockMax1-self.minDist;var props=[{element:self.block1.ref,property:'transform.translateX',expression:'min('+blockMax1+', max(x + '+self.diffX1+', 0))'},{element:self.valueBar.ref,property:'transform.translateX',expression:'min(0, max(x + '+startLeft+', -'+blockMax1+'))'}];var gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:self.block1.ref,eventType:'pan',props:props},function(e){if(e.state==='end'||e.state==='cancel'||e.state==='exit'){var range=self.getRange();// 限制diffX1范围
self.diffX1=self._restrictValue(range.rangeX1,self.diffX1+e.deltaX);self.bindBlock1();}});this.gesToken1=gesTokenObj.token;}else{// 选范围
var _props=[{element:self.block1.ref,property:'transform.translateX',expression:'min('+blockMax1+', max(x + '+self.diffX1+', 0))'},{element:self.valueBar.ref,property:'transform.translateX',expression:'min('+blockMax1+', max(x + '+self.diffX1+', 0))'},{element:self.valueBar.ref,property:'width',expression:'min('+barMax1+', max(0, '+self.barWidth+' - x))'}];var _gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:self.block1.ref,eventType:'pan',props:_props},function(e){if(e.state==='end'||e.state==='cancel'||e.state==='exit'){var range=self.getRange();self.barWidth=self._restrictValue(range.rangeX1,self.barWidth-e.deltaX);self.diffX1=self._restrictValue(range.rangeX1,self.diffX1+e.deltaX);self.bindBlock1();}});this.gesToken1=_gesTokenObj.token;}},bindBlock2:function bindBlock2(){var self=this;// 如果禁用，不行进行表达式绑定
if(self.disabled){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({token:this.gesToken2,eventType:'pan'});this.gesToken2=0;return;}// 初始化按钮&条的大小范围
var blockMax1=0;if(self.range){blockMax1=self.diffX2-self.minDist;}else{blockMax1=self.length;}var blockMax2=self.length;var blockMin2=self.diffX1+self.minDist;var barMax2=self.length-self.diffX1;var props=[{element:self.block2.ref,property:'transform.translateX',expression:'min('+blockMax2+', max(x + '+self.diffX2+', '+blockMin2+'))'},{element:self.valueBar.ref,property:'width',expression:'min('+barMax2+', max(0, x + '+self.barWidth+'))'}];var gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:self.block2.ref,eventType:'pan',props:props},function(e){if(e.state==='end'||e.state==='cancel'||e.state==='exit'){var range=self.getRange();self.barWidth=self._restrictValue([0,self.length-self.diffX1],self.barWidth+e.deltaX);self.diffX2=self._restrictValue(range.rangeX2,self.diffX2+e.deltaX);self.bindBlock2();}});this.gesToken2=gesTokenObj.token;},// 获取diffx1 diffx2 取值范围
getRange:function getRange(){if(!this.range){return{rangeX1:[0,this.length]};}else{return{rangeX1:[0,this.diffX2-this.minDist],rangeX2:[this.diffX1+this.minDist,this.length]};}},// 限制取值范围
_restrictValue:function _restrictValue(range,value){if(range&&range.length&&range.length===2){if(value<range[0]){return range[0];}else if(value>range[1]){return range[1];}else{return value;}}},// 根据x方向偏移量计算value
_getValue:function _getValue(diffX){return Math.round(diffX/this.length*(this.max-this.min)+this.min);},// 根据value和length计算x方向偏移值
_getDiffX:function _getDiffX(value){return(value-this.min)/(this.max-this.min)*this.length;}}};/***/},/* 102 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__(4);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__wxc_rich_text_wxc_rich_text_text_vue__=__webpack_require__(39);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__wxc_rich_text_wxc_rich_text_tag_vue__=__webpack_require__(97);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _weex$config$env=weex.config.env,appName=_weex$config$env.appName,osName=_weex$config$env.osName,deviceWidth=_weex$config$env.deviceWidth;var needHack=(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isWeb()||appName==='UC'||appName==='TUnionSDK')&&osName!=='iOS'||__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isAndroid();var isPad=osName==='iOS'&&deviceWidth>1300;/* harmony default export */__webpack_exports__["a"]={components:{WxcRichTextText:__WEBPACK_IMPORTED_MODULE_2__wxc_rich_text_wxc_rich_text_text_vue__["default"],WxcRichTextTag:__WEBPACK_IMPORTED_MODULE_3__wxc_rich_text_wxc_rich_text_tag_vue__["default"]},props:{configList:{type:[Array,String],default:function _default(){return{};}}},data:function data(){return{iconWidth:90,iconHeight:24,needHack:needHack};},computed:{newList:function newList(){var configList=this.configList,iconHeight=this.iconHeight,iconWidth=this.iconWidth,needHack=this.needHack;if(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].isNonEmptyArray(configList)&&configList.length===2){var r1=configList[0];var r2=configList[1];var iconStyle=r1.style;var textStyle=r2.style;var style={};var fontSize=24;var tagWidth=iconStyle&&iconStyle.width?iconStyle.width:24;if(textStyle&&textStyle.fontSize&&!isNaN(textStyle.fontSize)){fontSize=textStyle.fontSize;style={fontSize:textStyle.fontSize+'px',lineHeight:Number(textStyle.fontSize*1.4).toFixed(2)+'px'};}if(textStyle&&textStyle.color){style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{color:textStyle.color});}if(textStyle&&textStyle.lines){style=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},style,{lines:textStyle.lines});}if(r1.type==='icon'&&iconStyle&&iconStyle.height&&!iconStyle.width){tagWidth=parseInt(iconWidth*(iconStyle.height/iconHeight));r1=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},r1,{style:{width:tagWidth+'px',height:iconStyle.height+'px'}});}if(r1.type==='icon'&&!(iconStyle&&iconStyle.height)){r1=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},r1,{style:{width:iconWidth+'px',height:iconHeight+'px'}});}if(r1.type==='tag'&&iconStyle&&iconStyle.width){r1=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},r1,{style:__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},iconStyle,{width:null})});}var blank='';var num=Math.ceil(tagWidth/fontSize)+1;if(r1.type==='tag'&&r1.value){num=this.countString(r1.value);}var tagMoreBlank=(!isPad&&num<7?'  ':'')+(needHack?'  ':'')+(isPad&&num<3?'    ':'');var iconMoreBlank=num>2?needHack?'     ':'   ':' ';if(r1.type==='tag'){blank=new Array(num).join('  ')+tagMoreBlank;}else if(r1.type==='icon'){blank=new Array(num).join('  ')+iconMoreBlank;}blank+=isPad&&num>2?'     ':'';var newValue=r2.value?blank+(' '+r2.value):'';r2=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},r2,{style:style,value:newValue});return[r1,r2];}else{return configList;}},top:function top(){var configList=this.configList,needHack=this.needHack;if(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].isNonEmptyArray(configList)&&configList.length===2){var iconStyle=configList[0].style;var textStyle=configList[1].style;var fontSize=24;var tagHeight=iconStyle&&iconStyle.height?iconStyle.height:26;if(textStyle&&textStyle.fontSize){fontSize=textStyle.fontSize;}var d=needHack?1.1:1.4;return Math.ceil((fontSize*d-tagHeight)/2);}else{return 0;}}},methods:{onLoad:function onLoad(e){if(e.success&&e.size&&e.size.naturalWidth>0){var _e$size=e.size,naturalWidth=_e$size.naturalWidth,naturalHeight=_e$size.naturalHeight;this.iconWidth=naturalWidth;this.iconHeight=naturalHeight;}else{var configList=this.configList;if(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].isNonEmptyArray(configList)&&configList.length===2){var style=configList[0].style;if(style&&style.height&&style.width){this.iconWidth=style.width;this.iconHeight=style.height;}}}},countString:function countString(str){var chineseRegex=/[^ -~]/g;return str.replace(chineseRegex,'**').length;}}};/***/},/* 103 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{min:{type:[String,Number],default:1},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1},disabled:{type:Boolean,default:false},defaultValue:{type:[String,Number],default:1},readOnly:{type:Boolean,default:false}},computed:{disableStyle:function disableStyle(){if(this.disabled){return{color:'#cccccc'};}},valueString:function valueString(){return this.value.toString();}},data:function data(){return{value:1,isLess:false,isOver:false};},watch:{defaultValue:function defaultValue(newNum){this.value=newNum;}},created:function created(){this.value=parseInt(this.defaultValue,10);if(this.disabled){this.isLess=true;this.isOver=true;}},methods:{minusClicked:function minusClicked(){if(this.disabled){return;}var isMinOver=this.value<=this.min;var nowNum=this.value-parseInt(this.step,10);if(isMinOver){this.$emit('wxcStepperValueIsMinOver',{value:this.value});}else{this.value=nowNum;this.resetDisabledStyle();}// 由于此处已经减step
if(nowNum<=this.min){this.value=parseInt(this.min,10);this.isLess=true;}this.$emit('wxcStepperValueChanged',{value:this.value});},plusClicked:function plusClicked(){if(this.disabled){return;}var isMaxOver=this.value>=this.max;var nowNum=this.value+parseInt(this.step,10);if(isMaxOver){this.$emit('wxcStepperValueIsMaxOver',{value:this.value});}else{this.value=nowNum;this.resetDisabledStyle();}// 由于此处已经加step
if(nowNum>=this.max){this.value=parseInt(this.max,10);this.isOver=true;}this.$emit('wxcStepperValueChanged',{value:this.value});},onInput:function onInput(e){this.correctInputValue(e.value);},onBlur:function onBlur(e){this.correctInputValue(e.value);},correctInputValue:function correctInputValue(v){var _this=this;var lastValue=this.value;if(/^[1-9]\d{0,}$/.test(v)&&parseInt(v,10)>=this.min&&parseInt(v,10)<=this.max){this.value=parseInt(v,10);}else{this.value='';setTimeout(function(){_this.value=lastValue;},1);}this.$emit('wxcStepperValueChanged',{value:this.value});},resetDisabledStyle:function resetDisabledStyle(){this.isLess=false;this.isOver=false;}}};/***/},/* 104 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var animation=weex.requireModule("animation");/* harmony default export */__webpack_exports__["a"]={props:{containerStyle:{type:Object,default:function _default(){return{backgroundColor:'#dddddd',borderTopWidth:1,borderTopColor:'#dddddd'};}},data:{type:Array,default:[]},height:{type:Number,default:90},styles:{type:Object,default:{}}},data:function data(){return{mobileX:0,webStarX:0,saveIdx:null,isAndroid:__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isAndroid()};},methods:{special:function special(dom,styles){animation.transition(dom,{styles:styles,duration:200,//ms
timingFunction:"ease",delay:100//ms
});},onRightNode:function onRightNode(pNode,node,i){node.onPress();if(pNode.autoClose)this.special(this.$refs.skid[i],{transform:"translate(0, 0)"});},onNodeClick:function onNodeClick(node,i){if(this.mobileX<0){this.mobileX=0;this.special(this.$refs.skid[this.saveIdx],{transform:"translate(0, 0)"});this.isAndroid&&this.special(this.$refs.skid[i],{transform:"translate(0, 0)"});}else{this.$emit("onNodeClick",node,i);}},onPanEnd:function onPanEnd(e,node,i){if(__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isWeb()){var webEndX=e.changedTouches[0].pageX;this.movingDistance(webEndX-this.webStarX,node,this.$refs.skid[i]);}},onPanStart:function onPanStart(e,node,i){var saveIdx=this.saveIdx;if(saveIdx!==i&&saveIdx!==null&&this.$refs.skid[saveIdx]){this.special(this.$refs.skid[saveIdx],{transform:"translate(0, 0)"});this.mobileX=0;}this.saveIdx=i;!__WEBPACK_IMPORTED_MODULE_1__utils__["a"/* default */].env.isWeb()?this.mobile(e,node,i):this.web(e,node,i);e.stopPropagation();},web:function web(e,node,i){this.webStarX=e.changedTouches[0].pageX;},mobile:function mobile(e,node,i){var _this=this;var el=this.$refs["skid"][i];__WEBPACK_IMPORTED_MODULE_0_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:el.ref,eventType:"pan",props:[{element:el.ref,property:"transform.translateX",expression:"x+"+(this.isAndroid?0:this.mobileX)}]},function(e){var state=e.state,deltaX=e.deltaX;if(state==="end"){_this.mobileX+=deltaX;_this.movingDistance(_this.mobileX,node,el);}});},movingDistance:function movingDistance(scope,node,el){var len=node.right?node.right.length:0;var distance=len*-100;if(scope<-30){this.special(el,{transform:"translate("+distance+"px, 0)"});this.mobileX=distance;}else{this.special(el,{transform:"translate(0, 0)"});this.mobileX=0;}}}};/***/},/* 105 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom=weex.requireModule('dom');var animation=weex.requireModule('animation');/* harmony default export */__webpack_exports__["a"]={props:{tabTitles:{type:Array,default:function _default(){return[];}},tabStyles:{type:Object,default:function _default(){return{bgColor:'#FFFFFF',titleColor:'#666666',activeTitleColor:'#3D3D3D',activeBgColor:'#FFFFFF',isActiveTitleBold:true,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,activeBottomColor:'#FFC900',activeBottomWidth:120,activeBottomHeight:6,textPaddingLeft:10,textPaddingRight:10};}},titleType:{type:String,default:'icon'},titleUseSlot:{type:Boolean,default:false},isTabView:{type:Boolean,default:true},supportXBar:{type:Boolean,default:true},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:'cubic-bezier(0.25, 0.46, 0.45, 0.94)'},wrapBgColor:{type:String,default:'#f2f3f4'}},data:function data(){return{currentPage:0,translateX:0};},created:function created(){var titleType=this.titleType,tabStyles=this.tabStyles,supportXBar=this.supportXBar;if(titleType==='iconFont'&&tabStyles.iconFontUrl){dom.addRule('fontFace',{'fontFamily':"wxcIconFont",'src':'url(\''+tabStyles.iconFontUrl+'\')'});}this.isIPhoneX=__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isIPhoneX()&&supportXBar;},methods:{next:function next(){var page=this.currentPage;if(page<this.tabTitles.length-1){page++;}this.setPage(page);},prev:function prev(){var page=this.currentPage;if(page>0){page--;}this.setPage(page);},setPage:function setPage(page){var url=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var animated=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!this.isTabView){this.currentPage=page;this._animateTransformX(page,animated);this.$emit('wxcTabBarCurrentTabSelected',{page:page});this.jumpOut(url);return;}var previousPage=this.currentPage;var currentTabEl=this.$refs['wxc-tab-title-'+page][0];var width=this.tabStyles.width;var appearNum=parseInt(750/width);var tabsNum=this.tabTitles.length;var offset=page>appearNum?-(750-width)/2:-width*2;if(appearNum<tabsNum){(previousPage>appearNum||page>1)&&dom.scrollToElement(currentTabEl,{offset:offset,animated:animated});page<=1&&previousPage>page&&dom.scrollToElement(currentTabEl,{offset:-width*page,animated:animated});}this.currentPage=page;this._animateTransformX(page,animated);this.$emit('wxcTabBarCurrentTabSelected',{page:page});},jumpOut:function jumpOut(url){url&&__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].goToH5Page(url);},_animateTransformX:function _animateTransformX(page,animated){var duration=this.duration,timingFunction=this.timingFunction;var computedDur=animated?duration:0.00001;var containerEl=this.$refs['tab-container'];var dist=page*750;animation.transition(containerEl,{styles:{transform:'translateX('+-dist+'px)'},duration:computedDur,timingFunction:timingFunction,delay:0},function(){});}}};/***/},/* 106 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_bind_env__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__=__webpack_require__(7);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js__);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom=weex.requireModule('dom');var animation=weex.requireModule('animation');var swipeBack=weex.requireModule('swipeBack');/* harmony default export */__webpack_exports__["a"]={props:{tabTitles:{type:Array,default:function _default(){return[];}},panDist:{type:Number,default:200},spmC:{type:[String,Number],default:''},titleUseSlot:{type:Boolean,default:false},tabStyles:{type:Object,default:function _default(){return{bgColor:'#FFFFFF',titleColor:'#666666',activeTitleColor:'#3D3D3D',activeBgColor:'#FFFFFF',isActiveTitleBold:true,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,hasActiveBottom:true,activeBottomColor:'#FFC900',activeBottomWidth:120,activeBottomHeight:6,textPaddingLeft:10,textPaddingRight:10,leftOffset:0,rightOffset:0,normalBottomColor:'#F2F2F2',normalBottomHeight:0,hasRightIcon:false};}},titleType:{type:String,default:'icon'},tabPageHeight:{type:[String,Number],default:1334},needSlider:{type:Boolean,default:true},isTabView:{type:Boolean,default:true},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:'cubic-bezier(0.25, 0.46, 0.45, 0.94)'},wrapBgColor:{type:String,default:'#f2f3f4'},clickAnimation:{type:Boolean,default:true},rightIconStyle:{type:Object,default:function _default(){return{top:0,right:0,paddingLeft:20,paddingRight:20};}}},data:function data(){return{currentPage:0,gesToken:0,isMoving:false,startTime:0,deltaX:0,translateX:0};},created:function created(){var titleType=this.titleType,tabStyles=this.tabStyles;if(titleType==='iconFont'&&tabStyles.iconFontUrl){dom.addRule('fontFace',{'fontFamily':'wxcIconFont','src':'url('+tabStyles.iconFontUrl+')'});}},mounted:function mounted(){if(swipeBack&&swipeBack.forbidSwipeBack){swipeBack.forbidSwipeBack(true);}if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEBForIos()&&this.isTabView&&this.needSlider){var tabPageEl=this.$refs['tab-page-wrap'];__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare&&__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.prepare({anchor:tabPageEl.ref,eventType:'pan'});}},methods:{next:function next(){var page=this.currentPage;if(page<this.tabTitles.length-1){page++;}this.setPage(page);},prev:function prev(){var page=this.currentPage;if(page>0){page--;}this.setPage(page);},startHandler:function startHandler(){if(__WEBPACK_IMPORTED_MODULE_1__utils_bind_env__["a"/* default */].supportsEBForIos()&&this.isTabView&&this.needSlider){this.bindExp(this.$refs['tab-page-wrap']);}},bindExp:function bindExp(element){var _this=this;if(element&&element.ref){if(this.isMoving&&this.gesToken!==0){__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.unbind({eventType:'pan',token:this.gesToken});this.gesToken=0;return;}var tabElement=this.$refs['tab-container'];var currentPage=this.currentPage,panDist=this.panDist;var dist=currentPage*750;// x-dist
var props=[{element:tabElement.ref,property:'transform.translateX',expression:'x-'+dist}];var gesTokenObj=__WEBPACK_IMPORTED_MODULE_2_weex_bindingx_lib_index_weex_js___default.a.bind({anchor:element.ref,eventType:'pan',props:props},function(e){var deltaX=e.deltaX,state=e.state;if(state==='end'){if(deltaX<-panDist){_this.next();}else if(deltaX>panDist){_this.prev();}else{_this.setPage(currentPage);}}});this.gesToken=gesTokenObj.token;}},setPage:function setPage(page){var url=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var animated=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!this.isTabView){this.jumpOut(url);return;}if(this.isMoving===true){return;}this.isMoving=true;var previousPage=this.currentPage;var currentTabEl=this.$refs['wxc-tab-title-'+page][0];var width=this.tabStyles.width;var appearNum=parseInt(750/width);var tabsNum=this.tabTitles.length;var offset=page>appearNum?-(750-width)/2:-width*2;if(appearNum<tabsNum){(previousPage>appearNum||page>1)&&dom.scrollToElement(currentTabEl,{offset:offset,animated:animated});page<=1&&previousPage>page&&dom.scrollToElement(currentTabEl,{offset:-width*page,animated:animated});}this.isMoving=false;this.currentPage=page;this._animateTransformX(page,animated);this.$emit('wxcTabPageCurrentTabSelected',{page:page});},jumpOut:function jumpOut(url){url&&__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].goToH5Page(url);},_animateTransformX:function _animateTransformX(page,animated){var duration=this.duration,timingFunction=this.timingFunction;var computedDur=animated?duration:0.00001;var containerEl=this.$refs['tab-container'];var dist=page*750;animation.transition(containerEl,{styles:{transform:'translateX('+-dist+'px)'},duration:computedDur,timingFunction:timingFunction,delay:0},function(){});}}};/***/},/* 107 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */__webpack_exports__["a"]={props:{type:{type:String,default:'solid'},value:{type:[String,Number],default:'测试测试'},tagColor:{type:String,default:'#ff5000'},fontColor:{type:String,default:'#333333'},specialIcon:{type:String,default:''},img:{type:String,default:''}},computed:{showSolid:function showSolid(){var type=this.type,value=this.value;return type==='solid'&&value!=='';},showHollow:function showHollow(){var type=this.type,value=this.value;return type==='hollow'&&value!=='';},showSpecial:function showSpecial(){var type=this.type,value=this.value,specialIcon=this.specialIcon;return type==='special'&&value!==''&&specialIcon!=='';},showImage:function showImage(){var type=this.type,img=this.img;return type==='image'&&img!=='';},tagTextStyle:function tagTextStyle(){var tagColor=this.tagColor,showSolid=this.showSolid;return showSolid?{backgroundColor:tagColor}:{borderColor:tagColor};}},data:function data(){return{imgWidth:90};},methods:{onLoad:function onLoad(e){if(e.success&&e.size&&e.size.naturalWidth>0){var width=e.size.naturalWidth;var height=e.size.naturalHeight;this.imgWidth=width*(24/height);}}}};/***/},/* 108 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_aui_button_index_vue__=__webpack_require__(109);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_aui_tabBar_index_vue__=__webpack_require__(111);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"AuiButton",function(){return __WEBPACK_IMPORTED_MODULE_0__components_aui_button_index_vue__["a"];});/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"AuiTabBar",function(){return __WEBPACK_IMPORTED_MODULE_1__components_aui_tabBar_index_vue__["a"];});/***/},/* 109 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(40);/* unused harmony namespace reexport */var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template */var __vue_template__=null;/* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__vue_template__,__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="src/components/aui-button/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-3875055d",Component.options);}else{hotAPI.reload("data-v-3875055d",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 110 *//***/function(module,exports){/***/},/* 111 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(41);/* unused harmony namespace reexport */var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template */var __vue_template__=null;/* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__vue_template__,__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="src/components/aui-tabBar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-ff82c12e",Component.options);}else{hotAPI.reload("data-v-ff82c12e",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 112 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__packages_bind_env__=__webpack_require__(113);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__packages_utils__=__webpack_require__(3);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__packages_wxc_button__=__webpack_require__(118);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__packages_wxc_cell__=__webpack_require__(35);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__packages_wxc_checkbox__=__webpack_require__(136);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__packages_wxc_checkbox_list__=__webpack_require__(156);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__packages_wxc_city__=__webpack_require__(159);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__packages_wxc_countdown__=__webpack_require__(189);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__packages_wxc_dialog__=__webpack_require__(194);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__packages_wxc_ep_slider__=__webpack_require__(204);/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__packages_wxc_full_page__=__webpack_require__(209);/* harmony import */var __WEBPACK_IMPORTED_MODULE_11__packages_wxc_grid_select__=__webpack_require__(214);/* harmony import */var __WEBPACK_IMPORTED_MODULE_12__packages_wxc_icon__=__webpack_require__(223);/* harmony import */var __WEBPACK_IMPORTED_MODULE_13__packages_wxc_indexlist__=__webpack_require__(63);/* harmony import */var __WEBPACK_IMPORTED_MODULE_14__packages_wxc_lightbox__=__webpack_require__(229);/* harmony import */var __WEBPACK_IMPORTED_MODULE_15__packages_wxc_loading__=__webpack_require__(256);/* harmony import */var __WEBPACK_IMPORTED_MODULE_16__packages_wxc_lottery_rain__=__webpack_require__(261);/* harmony import */var __WEBPACK_IMPORTED_MODULE_17__packages_wxc_mask__=__webpack_require__(74);/* harmony import */var __WEBPACK_IMPORTED_MODULE_18__packages_wxc_minibar__=__webpack_require__(81);/* harmony import */var __WEBPACK_IMPORTED_MODULE_19__packages_wxc_noticebar__=__webpack_require__(277);/* harmony import */var __WEBPACK_IMPORTED_MODULE_20__packages_wxc_overlay__=__webpack_require__(26);/* harmony import */var __WEBPACK_IMPORTED_MODULE_21__packages_wxc_page_calendar__=__webpack_require__(283);/* harmony import */var __WEBPACK_IMPORTED_MODULE_22__packages_wxc_pan_item__=__webpack_require__(289);/* harmony import */var __WEBPACK_IMPORTED_MODULE_23__packages_wxc_part_loading__=__webpack_require__(292);/* harmony import */var __WEBPACK_IMPORTED_MODULE_24__packages_wxc_popover__=__webpack_require__(295);/* harmony import */var __WEBPACK_IMPORTED_MODULE_25__packages_wxc_popup__=__webpack_require__(300);/* harmony import */var __WEBPACK_IMPORTED_MODULE_26__packages_wxc_progress__=__webpack_require__(305);/* harmony import */var __WEBPACK_IMPORTED_MODULE_27__packages_wxc_radio__=__webpack_require__(310);/* harmony import */var __WEBPACK_IMPORTED_MODULE_28__packages_wxc_refresher__=__webpack_require__(322);/* harmony import */var __WEBPACK_IMPORTED_MODULE_29__packages_wxc_result__=__webpack_require__(61);/* harmony import */var __WEBPACK_IMPORTED_MODULE_30__packages_wxc_rich_text__=__webpack_require__(327);/* harmony import */var __WEBPACK_IMPORTED_MODULE_31__packages_wxc_searchbar__=__webpack_require__(59);/* harmony import */var __WEBPACK_IMPORTED_MODULE_32__packages_wxc_simple_flow__=__webpack_require__(344);/* harmony import */var __WEBPACK_IMPORTED_MODULE_33__packages_wxc_slide_nav__=__webpack_require__(349);/* harmony import */var __WEBPACK_IMPORTED_MODULE_34__packages_wxc_slider_bar__=__webpack_require__(354);/* harmony import */var __WEBPACK_IMPORTED_MODULE_35__packages_wxc_special_rich_text__=__webpack_require__(359);/* harmony import */var __WEBPACK_IMPORTED_MODULE_36__packages_wxc_stepper__=__webpack_require__(364);/* harmony import */var __WEBPACK_IMPORTED_MODULE_37__packages_wxc_swipe_action__=__webpack_require__(369);/* harmony import */var __WEBPACK_IMPORTED_MODULE_38__packages_wxc_tab_bar__=__webpack_require__(374);/* harmony import */var __WEBPACK_IMPORTED_MODULE_39__packages_wxc_tab_page__=__webpack_require__(379);/* harmony import */var __WEBPACK_IMPORTED_MODULE_40__packages_wxc_tag__=__webpack_require__(384);/* unused harmony reexport BindEnv *//* unused harmony reexport Utils *//* unused harmony reexport WxcButton *//* unused harmony reexport WxcCell *//* unused harmony reexport WxcCheckbox *//* unused harmony reexport WxcCheckboxList *//* unused harmony reexport WxcCity *//* unused harmony reexport WxcCountdown *//* unused harmony reexport WxcDialog *//* unused harmony reexport WxcEpSlider *//* unused harmony reexport WxcFullPage *//* unused harmony reexport WxcGridSelect *//* unused harmony reexport WxcIcon *//* unused harmony reexport WxcIndexlist *//* unused harmony reexport WxcLightbox *//* unused harmony reexport WxcLoading *//* unused harmony reexport WxcLotteryRain *//* unused harmony reexport WxcMask *//* unused harmony reexport WxcMinibar *//* unused harmony reexport WxcNoticebar *//* unused harmony reexport WxcOverlay *//* unused harmony reexport WxcPageCalendar *//* unused harmony reexport WxcPanItem *//* unused harmony reexport WxcPartLoading *//* unused harmony reexport WxcPopover *//* unused harmony reexport WxcPopup *//* unused harmony reexport WxcProgress *//* unused harmony reexport WxcRadio *//* unused harmony reexport WxcRefresher *//* unused harmony reexport WxcResult *//* unused harmony reexport WxcRichText *//* unused harmony reexport WxcSearchbar *//* unused harmony reexport WxcSimpleFlow *//* unused harmony reexport WxcSlideNav *//* unused harmony reexport WxcSliderBar *//* unused harmony reexport WxcSpecialRichText *//* unused harmony reexport WxcStepper *//* unused harmony reexport WxcSwipeAction *//* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_38__packages_wxc_tab_bar__["a"];});/* unused harmony reexport WxcTabPage *//* unused harmony reexport WxcTag *//**
 * Created by Tw93 on 17/09/25
 *//***/},/* 113 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_bind_env__=__webpack_require__(9);/* unused harmony reexport default */// hack for babel-plugin-component
/***/},/* 114 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global){var required=__webpack_require__(116),qs=__webpack_require__(117),slashes=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,protocolre=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,whitespace='[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]',left=new RegExp('^'+whitespace+'+');/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */function trimLeft(str){return(str?str:'').toString().replace(left,'');}/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */var rules=[['#','hash'],// Extract from the back.
['?','query'],// Extract from the back.
function sanitize(address){// Sanitize what is left of the address
return address.replace('\\','/');},['/','pathname'],// Extract from the back.
['@','auth',1],// Extract from the front.
[NaN,'host',undefined,1,1],// Set left over value.
[/:(\d+)$/,'port',undefined,1],// RegExp the back.
[NaN,'hostname',undefined,1,1]// Set left over.
];/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */var ignore={hash:1,query:1};/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */function lolcation(loc){var globalVar;if(typeof window!=='undefined')globalVar=window;else if(typeof global!=='undefined')globalVar=global;else if(typeof self!=='undefined')globalVar=self;else globalVar={};var location=globalVar.location||{};loc=loc||location;var finaldestination={},type=typeof loc==='undefined'?'undefined':_typeof2(loc),key;if('blob:'===loc.protocol){finaldestination=new Url(unescape(loc.pathname),{});}else if('string'===type){finaldestination=new Url(loc,{});for(key in ignore){delete finaldestination[key];}}else if('object'===type){for(key in loc){if(key in ignore)continue;finaldestination[key]=loc[key];}if(finaldestination.slashes===undefined){finaldestination.slashes=slashes.test(loc.href);}}return finaldestination;}/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 *//**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */function extractProtocol(address){address=trimLeft(address);var match=protocolre.exec(address);return{protocol:match[1]?match[1].toLowerCase():'',slashes:!!match[2],rest:match[3]};}/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */function resolve(relative,base){if(relative==='')return base;var path=(base||'/').split('/').slice(0,-1).concat(relative.split('/')),i=path.length,last=path[i-1],unshift=false,up=0;while(i--){if(path[i]==='.'){path.splice(i,1);}else if(path[i]==='..'){path.splice(i,1);up++;}else if(up){if(i===0)unshift=true;path.splice(i,1);up--;}}if(unshift)path.unshift('');if(last==='.'||last==='..')path.push('');return path.join('/');}/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */function Url(address,location,parser){address=trimLeft(address);if(!(this instanceof Url)){return new Url(address,location,parser);}var relative,extracted,parse,instruction,index,key,instructions=rules.slice(),type=typeof location==='undefined'?'undefined':_typeof2(location),url=this,i=0;//
// The following if statements allows this module two have compatibility with
// 2 different API:
//
// 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
//    where the boolean indicates that the query string should also be parsed.
//
// 2. The `URL` interface of the browser which accepts a URL, object as
//    arguments. The supplied object will be used as default values / fall-back
//    for relative paths.
//
if('object'!==type&&'string'!==type){parser=location;location=null;}if(parser&&'function'!==typeof parser)parser=qs.parse;location=lolcation(location);//
// Extract protocol information before running the instructions.
//
extracted=extractProtocol(address||'');relative=!extracted.protocol&&!extracted.slashes;url.slashes=extracted.slashes||relative&&location.slashes;url.protocol=extracted.protocol||location.protocol||'';address=extracted.rest;//
// When the authority component is absent the URL starts with a path
// component.
//
if(!extracted.slashes)instructions[3]=[/(.*)/,'pathname'];for(;i<instructions.length;i++){instruction=instructions[i];if(typeof instruction==='function'){address=instruction(address);continue;}parse=instruction[0];key=instruction[1];if(parse!==parse){url[key]=address;}else if('string'===typeof parse){if(~(index=address.indexOf(parse))){if('number'===typeof instruction[2]){url[key]=address.slice(0,index);address=address.slice(index+instruction[2]);}else{url[key]=address.slice(index);address=address.slice(0,index);}}}else if(index=parse.exec(address)){url[key]=index[1];address=address.slice(0,index.index);}url[key]=url[key]||(relative&&instruction[3]?location[key]||'':'');//
// Hostname, host and protocol should be lowercased so they can be used to
// create a proper `origin`.
//
if(instruction[4])url[key]=url[key].toLowerCase();}//
// Also parse the supplied query string in to an object. If we're supplied
// with a custom parser as function use that instead of the default build-in
// parser.
//
if(parser)url.query=parser(url.query);//
// If the URL is relative, resolve the pathname against the base URL.
//
if(relative&&location.slashes&&url.pathname.charAt(0)!=='/'&&(url.pathname!==''||location.pathname!=='')){url.pathname=resolve(url.pathname,location.pathname);}//
// We should not add port numbers if they are already the default port number
// for a given protocol. As the host also contains the port number we're going
// override it with the hostname which contains no port number.
//
if(!required(url.port,url.protocol)){url.host=url.hostname;url.port='';}//
// Parse down the `auth` for the username and password.
//
url.username=url.password='';if(url.auth){instruction=url.auth.split(':');url.username=instruction[0]||'';url.password=instruction[1]||'';}url.origin=url.protocol&&url.host&&url.protocol!=='file:'?url.protocol+'//'+url.host:'null';//
// The href is just the compiled result.
//
url.href=url.toString();}/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */function set(part,value,fn){var url=this;switch(part){case'query':if('string'===typeof value&&value.length){value=(fn||qs.parse)(value);}url[part]=value;break;case'port':url[part]=value;if(!required(value,url.protocol)){url.host=url.hostname;url[part]='';}else if(value){url.host=url.hostname+':'+value;}break;case'hostname':url[part]=value;if(url.port)value+=':'+url.port;url.host=value;break;case'host':url[part]=value;if(/:\d+$/.test(value)){value=value.split(':');url.port=value.pop();url.hostname=value.join(':');}else{url.hostname=value;url.port='';}break;case'protocol':url.protocol=value.toLowerCase();url.slashes=!fn;break;case'pathname':case'hash':if(value){var char=part==='pathname'?'/':'#';url[part]=value.charAt(0)!==char?char+value:value;}else{url[part]=value;}break;default:url[part]=value;}for(var i=0;i<rules.length;i++){var ins=rules[i];if(ins[4])url[ins[1]]=url[ins[1]].toLowerCase();}url.origin=url.protocol&&url.host&&url.protocol!=='file:'?url.protocol+'//'+url.host:'null';url.href=url.toString();return url;}/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */function toString(stringify){if(!stringify||'function'!==typeof stringify)stringify=qs.stringify;var query,url=this,protocol=url.protocol;if(protocol&&protocol.charAt(protocol.length-1)!==':')protocol+=':';var result=protocol+(url.slashes?'//':'');if(url.username){result+=url.username;if(url.password)result+=':'+url.password;result+='@';}result+=url.host+url.pathname;query='object'===_typeof2(url.query)?stringify(url.query):url.query;if(query)result+='?'!==query.charAt(0)?'?'+query:query;if(url.hash)result+=url.hash;return result;}Url.prototype={set:set,toString:toString};//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol=extractProtocol;Url.location=lolcation;Url.trimLeft=trimLeft;Url.qs=qs;module.exports=Url;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(115));/***/},/* 115 *//***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==='undefined'?'undefined':_typeof2(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 116 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */module.exports=function required(port,protocol){protocol=protocol.split(':')[0];port=+port;if(!port)return false;switch(protocol){case'http':case'ws':return port!==80;case'https':case'wss':return port!==443;case'ftp':return port!==21;case'gopher':return port!==70;case'file':return false;}return port!==0;};/***/},/* 117 *//***/function(module,exports,__webpack_require__){"use strict";var has=Object.prototype.hasOwnProperty,undef;/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */function decode(input){try{return decodeURIComponent(input.replace(/\+/g,' '));}catch(e){return null;}}/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */function encode(input){try{return encodeURIComponent(input);}catch(e){return null;}}/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */function querystring(query){var parser=/([^=?#&]+)=?([^&]*)/g,result={},part;while(part=parser.exec(query)){var key=decode(part[1]),value=decode(part[2]);//
// Prevent overriding of existing properties. This ensures that build-in
// methods like `toString` or __proto__ are not overriden by malicious
// querystrings.
//
// In the case if failed decoding, we want to omit the key/value pairs
// from the result.
//
if(key===null||value===null||key in result)continue;result[key]=value;}return result;}/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */function querystringify(obj,prefix){prefix=prefix||'';var pairs=[],value,key;//
// Optionally prefix with a '?' if needed
//
if('string'!==typeof prefix)prefix='?';for(key in obj){if(has.call(obj,key)){value=obj[key];//
// Edge cases where we actually want to encode the value to an empty
// string instead of the stringified value.
//
if(!value&&(value===null||value===undef||isNaN(value))){value='';}key=encode(key);value=encode(value);//
// If we failed to encode the strings, we should bail out as we don't
// want to add invalid strings to the query.
//
if(key===null||value===null)continue;pairs.push(key+'='+value);}}return pairs.length?prefix+pairs.join('&'):'';}//
// Expose the module.
//
exports.stringify=querystringify;exports.parse=querystring;/***/},/* 118 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(119);/* unused harmony reexport default *//***/},/* 119 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(42);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_52f7211c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(131);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(120);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-52f7211c";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_52f7211c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-button/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-52f7211c",Component.options);}else{hotAPI.reload("data-v-52f7211c",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 120 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(121);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("67343e29",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52f7211c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52f7211c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 121 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-btn[data-v-52f7211c] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 12px;\n  opacity: 1;\n}\n.wxc-btn-highlight[data-v-52f7211c]:active {\n  opacity: .8;\n}\n.btn-text[data-v-52f7211c] {\n  text-overflow: ellipsis;\n  lines: 1;\n  color: #ffffff;\n}\n",""]);// exports
/***/},/* 122 *//***/function(module,exports){/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */module.exports=function listToStyles(parentId,list){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={id:parentId+':'+i,css:css,media:media,sourceMap:sourceMap};if(!newStyles[id]){styles.push(newStyles[id]={id:id,parts:[part]});}else{newStyles[id].parts.push(part);}}return styles;};/***/},/* 123 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(124),__esModule:true};/***/},/* 124 *//***/function(module,exports,__webpack_require__){__webpack_require__(125);module.exports=__webpack_require__(5).Object.assign;/***/},/* 125 *//***/function(module,exports,__webpack_require__){// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(16);$export($export.S+$export.F,'Object',{assign:__webpack_require__(127)});/***/},/* 126 *//***/function(module,exports){module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};/***/},/* 127 *//***/function(module,exports,__webpack_require__){"use strict";// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS=__webpack_require__(11);var getKeys=__webpack_require__(20);var gOPS=__webpack_require__(34);var pIE=__webpack_require__(25);var toObject=__webpack_require__(21);var IObject=__webpack_require__(47);var $assign=Object.assign;// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(14)(function(){var A={};var B={};// eslint-disable-next-line no-undef
var S=Symbol();var K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){// eslint-disable-line no-unused-vars
var T=toObject(target);var aLen=arguments.length;var index=1;var getSymbols=gOPS.f;var isEnum=pIE.f;while(aLen>index){var S=IObject(arguments[index++]);var keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S);var length=keys.length;var j=0;var key;while(length>j){key=keys[j++];if(!DESCRIPTORS||isEnum.call(S,key))T[key]=S[key];}}return T;}:$assign;/***/},/* 128 *//***/function(module,exports,__webpack_require__){// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(15);var toLength=__webpack_require__(48);var toAbsoluteIndex=__webpack_require__(129);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};/***/},/* 129 *//***/function(module,exports,__webpack_require__){var toInteger=__webpack_require__(30);var max=Math.max;var min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length);};/***/},/* 130 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var STYLE_MAP={red:{backgroundColor:'#FF5000'},yellow:{backgroundColor:'#FFC900'},white:{backgroundColor:'#FFFFFF',borderColor:'#A5A5A5',borderWidth:'1px'},blue:{backgroundColor:'#0F8DE8'},green:{backgroundColor:'#19be6b'}};/* harmony export (immutable) */__webpack_exports__["b"]=STYLE_MAP;var TEXT_STYLE_MAP={red:{color:'#FFFFFF'},yellow:{color:'#FFFFFF'},blue:{color:'#FFFFFF'},white:{color:'#3D3D3D'},green:{color:'#FFFFFF'}};/* harmony export (immutable) */__webpack_exports__["d"]=TEXT_STYLE_MAP;var BUTTON_STYLE_MAP={full:{width:'702px',height:'88px'},big:{width:'339px',height:'70px'},medium:{width:'218px',height:'60px'},small:{width:'157px',height:'44px'}/* harmony export (immutable) */};__webpack_exports__["a"]=BUTTON_STYLE_MAP;var TEXT_FONTSIZE_STYLE_MAP={full:{fontSize:'36px'},big:{fontSize:'32px'},medium:{fontSize:'28px'},small:{fontSize:'24px'}};/* harmony export (immutable) */__webpack_exports__["c"]=TEXT_FONTSIZE_STYLE_MAP;/***/},/* 131 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{class:["wxc-btn",_vm.isHighlight&&!_vm.disabled&&"wxc-btn-highlight"],style:_vm.mrBtnStyle,attrs:{accessible:true,"aria-label":_vm.text},on:{click:_vm.onClicked}},[_c("text",{staticClass:"btn-text",style:_vm.mrTextStyle},[_vm._v(_vm._s(_vm.text))])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-52f7211c",esExports);}}/***/},/* 132 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(49);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_856ae1e8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(135);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(133);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-856ae1e8";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_856ae1e8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-cell/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-856ae1e8",Component.options);}else{hotAPI.reload("data-v-856ae1e8",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 133 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(134);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("00ada93e",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-856ae1e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-856ae1e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 134 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-cell[data-v-856ae1e8] {\n  /*height: 100px;*/\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  padding-right: 24px;\n  background-color: #ffffff;\n}\n.cell-margin[data-v-856ae1e8] {\n  margin-bottom: 24px;\n}\n.cell-title[data-v-856ae1e8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.cell-indent[data-v-856ae1e8] {\n  padding-bottom: 30px;\n  padding-top: 30px;\n}\n.has-desc[data-v-856ae1e8] {\n  padding-bottom: 18px;\n  padding-top: 18px;\n}\n.cell-top-border[data-v-856ae1e8] {\n  border-top-color: #e2e2e2;\n  border-top-width: 1px;\n}\n.cell-bottom-border[data-v-856ae1e8] {\n  border-bottom-color: #e2e2e2;\n  border-bottom-width: 1px;\n}\n.cell-label-text[data-v-856ae1e8] {\n  font-size: 30px;\n  color: #666666;\n  width: 188px;\n  margin-right: 10px;\n}\n.cell-arrow-icon[data-v-856ae1e8] {\n  width: 22px;\n  height: 22px;\n}\n.cell-content[data-v-856ae1e8] {\n  color: #333333;\n  font-size: 30px;\n  line-height: 40px;\n}\n.cell-desc-text[data-v-856ae1e8] {\n  color: #999999;\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 4px;\n  margin-right: 30px;\n}\n.extra-content-text[data-v-856ae1e8] {\n  font-size: 28px;\n  color: #999999;\n  margin-right: 4px;\n}\n",""]);// exports
/***/},/* 135 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{class:["wxc-cell",_vm.hasTopBorder&&"cell-top-border",_vm.hasBottomBorder&&"cell-bottom-border",_vm.hasMargin&&"cell-margin",_vm.hasVerticalIndent&&"cell-indent",_vm.desc&&"has-desc"],style:_vm.cellStyle,attrs:{accessible:_vm.autoAccessible,"aria-label":_vm.label+","+_vm.title+","+_vm.desc},on:{click:_vm.cellClicked}},[_vm._t("label",[_vm.label?_c("div",[_c("text",{staticClass:"cell-label-text"},[_vm._v(_vm._s(_vm.label))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"cell-title"},[_vm._t("title",[_c("text",{staticClass:"cell-content"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm.desc?_c("text",{staticClass:"cell-desc-text"},[_vm._v(_vm._s(_vm.desc))]):_vm._e()])],2),_vm._v(" "),_vm._t("value"),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm.extraContent?_c("text",{staticClass:"extra-content-text"},[_vm._v(_vm._s(_vm.extraContent))]):_vm._e(),_vm._v(" "),_vm.hasArrow?_c("image",{staticClass:"cell-arrow-icon",attrs:{src:_vm.arrowIcon,"aria-hidden":true}}):_vm._e()],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-856ae1e8",esExports);}}/***/},/* 136 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(50);/* unused harmony reexport default *//***/},/* 137 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(138);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("7701d620",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ee7986a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ee7986a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 138 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.checkbox[data-v-ee7986a6] {\n  width: 48px;\n  height: 48px;\n}\n.title-text[data-v-ee7986a6] {\n  font-size: 30px;\n}\n",""]);// exports
/***/},/* 139 *//***/function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _from=__webpack_require__(140);var _from2=_interopRequireDefault(_from);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return(0,_from2.default)(arr);}};/***/},/* 140 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(141),__esModule:true};/***/},/* 141 *//***/function(module,exports,__webpack_require__){__webpack_require__(52);__webpack_require__(147);module.exports=__webpack_require__(5).Array.from;/***/},/* 142 *//***/function(module,exports,__webpack_require__){var toInteger=__webpack_require__(30);var defined=__webpack_require__(29);// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that));var i=toInteger(pos);var l=s.length;var a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};/***/},/* 143 *//***/function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(55);var descriptor=__webpack_require__(19);var setToStringTag=__webpack_require__(36);var IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype,__webpack_require__(6)('iterator'),function(){return this;});module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+' Iterator');};/***/},/* 144 *//***/function(module,exports,__webpack_require__){var dP=__webpack_require__(10);var anObject=__webpack_require__(17);var getKeys=__webpack_require__(20);module.exports=__webpack_require__(11)?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=getKeys(Properties);var length=keys.length;var i=0;var P;while(length>i){dP.f(O,P=keys[i++],Properties[P]);}return O;};/***/},/* 145 *//***/function(module,exports,__webpack_require__){var document=__webpack_require__(8).document;module.exports=document&&document.documentElement;/***/},/* 146 *//***/function(module,exports,__webpack_require__){// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(12);var toObject=__webpack_require__(21);var IE_PROTO=__webpack_require__(31)('IE_PROTO');var ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};/***/},/* 147 *//***/function(module,exports,__webpack_require__){"use strict";var ctx=__webpack_require__(43);var $export=__webpack_require__(16);var toObject=__webpack_require__(21);var call=__webpack_require__(148);var isArrayIter=__webpack_require__(149);var toLength=__webpack_require__(48);var createProperty=__webpack_require__(150);var getIterFn=__webpack_require__(151);$export($export.S+$export.F*!__webpack_require__(153)(function(iter){Array.from(iter);}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/* , mapfn = undefined, thisArg = undefined */){var O=toObject(arrayLike);var C=typeof this=='function'?this:Array;var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var index=0;var iterFn=getIterFn(O);var length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}result.length=index;return result;}});/***/},/* 148 *//***/function(module,exports,__webpack_require__){// call something on iterator step with safe closing on error
var anObject=__webpack_require__(17);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject(ret.call(iterator));throw e;}};/***/},/* 149 *//***/function(module,exports,__webpack_require__){// check on default Array iterator
var Iterators=__webpack_require__(22);var ITERATOR=__webpack_require__(6)('iterator');var ArrayProto=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);};/***/},/* 150 *//***/function(module,exports,__webpack_require__){"use strict";var $defineProperty=__webpack_require__(10);var createDesc=__webpack_require__(19);module.exports=function(object,index,value){if(index in object)$defineProperty.f(object,index,createDesc(0,value));else object[index]=value;};/***/},/* 151 *//***/function(module,exports,__webpack_require__){var classof=__webpack_require__(152);var ITERATOR=__webpack_require__(6)('iterator');var Iterators=__webpack_require__(22);module.exports=__webpack_require__(5).getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it['@@iterator']||Iterators[classof(it)];};/***/},/* 152 *//***/function(module,exports,__webpack_require__){// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(28);var TAG=__webpack_require__(6)('toStringTag');// ES3 wrong here
var ARG=cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};module.exports=function(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?cof(O)// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};/***/},/* 153 *//***/function(module,exports,__webpack_require__){var ITERATOR=__webpack_require__(6)('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=true;};// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2;});}catch(e){/* empty */}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7];var iter=arr[ITERATOR]();iter.next=function(){return{done:safe=true};};arr[ITERATOR]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};/***/},/* 154 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var CHECKED='https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["a"]=CHECKED;var UNCHECKED='https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["c"]=UNCHECKED;var CHECKED_DISABLED='https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["b"]=CHECKED_DISABLED;var UNCHECKED_DISABLED='https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["d"]=UNCHECKED_DISABLED;/***/},/* 155 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("wxc-cell",{attrs:{"has-top-border":_vm.hasTopBorder,"has-bottom-border":_vm.hasBottomBorder,accessible:true,"aria-label":_vm.title+",状态为"+(_vm.checked?"已选中":"未选中")+","+(_vm.disabled?"不可更改":"点击可切换")},on:{wxcCellClicked:_vm.wxcCellClicked}},[_c("text",{staticClass:"title-text",style:{color:_vm.textColor},attrs:{slot:"title"},slot:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c("image",{staticClass:"checkbox",attrs:{slot:"value",src:_vm.checkIcon},slot:"value"})]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ee7986a6",esExports);}}/***/},/* 156 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(157);/* unused harmony reexport default *//***/},/* 157 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(56);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_406ded54_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(158);var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_406ded54_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-checkbox-list/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-406ded54",Component.options);}else{hotAPI.reload("data-v-406ded54",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 158 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",_vm._l(_vm.list,function(item,i){return _c("wxc-checkbox",_vm._b({key:i,attrs:{config:_vm.config},on:{wxcCheckBoxItemChecked:_vm.wxcCheckBoxItemChecked}},"wxc-checkbox",item,false));}),1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-406ded54",esExports);}}/***/},/* 159 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(160);/* unused harmony reexport default *//***/},/* 160 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(57);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4480e7d5_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(188);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(161);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-4480e7d5";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4480e7d5_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-city/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-4480e7d5",Component.options);}else{hotAPI.reload("data-v-4480e7d5",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 161 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(162);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("1d10f45e",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4480e7d5\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4480e7d5\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 162 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-city[data-v-4480e7d5] {\n  position: fixed;\n  width: 750px;\n  background-color: #F2F3F4;\n}\n",""]);// exports
/***/},/* 163 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/**
 * Created by dianwoda on 2018/1/31.
 *//* harmony default export */__webpack_exports__["a"]={hotCity:[{cityName:'北京',pinYin:'beijing',py:'bj'},{cityName:'上海',pinYin:'shanghai',py:'sh'},{cityName:'天津',pinYin:'tianjin',py:'tj'},{cityName:'青岛',pinYin:'qingdao',py:'qd'},{cityName:'南京',pinYin:'nanjing',py:'nj'},{cityName:'杭州',pinYin:'hangzhou',py:'hz'},{cityName:'厦门',pinYin:'xiamen',py:'xm'},{cityName:'成都',pinYin:'chengdu',py:'cd'},{cityName:'深圳',pinYin:'shenzhen',py:'sz'},{cityName:'广州',pinYin:'guangzhou',py:'gz'},{cityName:'沈阳',pinYin:'shenyang',py:'sy'},{cityName:'武汉',pinYin:'wuhan',py:'wh'}],cities:[{cityName:'北京',pinYin:'beijing',py:'bj'},{cityName:'包头',pinYin:'baotou',py:'bt'},{cityName:'北海',pinYin:'beihai',py:'bh'},{cityName:'宝鸡',pinYin:'baoji',py:'bj'},{cityName:'成都',pinYin:'chengdu',py:'cd'},{cityName:'重庆',pinYin:'chongqing',py:'cq'},{cityName:'长沙',pinYin:'changsha',py:'cs'},{cityName:'长春',pinYin:'changchun',py:'cc'},{cityName:'常州',pinYin:'changzhou',py:'cz'},{cityName:'常德',pinYin:'changde',py:'cd'},{cityName:'沧州',pinYin:'cangzhou',py:'cz'},{cityName:'承德',pinYin:'chengde',py:'cd'},{cityName:'长治',pinYin:'changzhi',py:'cz'},{cityName:'滁州',pinYin:'chuzhou',py:'cz'},{cityName:'大连',pinYin:'dalian',py:'dl'},{cityName:'东莞',pinYin:'dongguan',py:'dg'},{cityName:'大同',pinYin:'datong',py:'dt'},{cityName:'达州',pinYin:'dazhou',py:'dz'},{cityName:'鄂尔多斯',pinYin:'eerduosi',py:'eeds'},{cityName:'恩施',pinYin:'enshi',py:'es'},{cityName:'福州',pinYin:'fuzhou',py:'fz'},{cityName:'佛山',pinYin:'foshan',py:'fs'},{cityName:'抚顺',pinYin:'fushun',py:'fs'},{cityName:'抚州',pinYin:'fuzhou',py:'fz'},{cityName:'防城港',pinYin:'fangchenggang',py:'fcg'},{cityName:'广州',pinYin:'guangzhou',py:'gz'},{cityName:'贵阳',pinYin:'guiyang',py:'gy'},{cityName:'桂林',pinYin:'guilin',py:'gl'},{cityName:'广元',pinYin:'guangyuan',py:'gy'},{cityName:'广安',pinYin:'guangan',py:'ga'},{cityName:'杭州',pinYin:'hangzhou',py:'hz'},{cityName:'哈尔滨',pinYin:'haerbin',py:'heb'},{cityName:'合肥',pinYin:'hefei',py:'hf'},{cityName:'呼和浩特',pinYin:'huhehaote',py:'hhht'},{cityName:'海口',pinYin:'haikou',py:'hk'},{cityName:'黄山',pinYin:'huangshan',py:'hs'},{cityName:'呼伦贝尔',pinYin:'hulunbeier',py:'hlbe'},{cityName:'邯郸',pinYin:'handan',py:'hd'},{cityName:'衡阳',pinYin:'hengyang',py:'hy'},{cityName:'汉中',pinYin:'hanzhong',py:'hz'},{cityName:'济南',pinYin:'jinan',py:'jn'},{cityName:'济宁',pinYin:'jining',py:'jn'},{cityName:'九江',pinYin:'jiujiang',py:'jj'},{cityName:'景德镇',pinYin:'jingdezhen',py:'jdz'},{cityName:'吉林',pinYin:'jilin',py:'jl'},{cityName:'江门',pinYin:'jiangmen',py:'jm'},{cityName:'晋城',pinYin:'jincheng',py:'jc'},{cityName:'嘉峪关',pinYin:'jiayuguan',py:'jyg'},{cityName:'酒泉',pinYin:'jiuquan',py:'jq'},{cityName:'昆明',pinYin:'kunming',py:'km'},{cityName:'克拉玛依',pinYin:'kelamayi',py:'klmy'},{cityName:'兰州',pinYin:'lanzhou',py:'lz'},{cityName:'丽江',pinYin:'lijiang',py:'lj'},{cityName:'洛阳',pinYin:'luoyang',py:'ly'},{cityName:'柳州',pinYin:'liuzhou',py:'lz'},{cityName:'泸州',pinYin:'luzhou',py:'lz'},{cityName:'拉萨',pinYin:'lasa',py:'ls'},{cityName:'临汾',pinYin:'linfen',py:'lf'},{cityName:'乐山',pinYin:'leshan',py:'ls'},{cityName:'聊城',pinYin:'liaocheng',py:'lc'},{cityName:'丽水',pinYin:'lishui',py:'ls'},{cityName:'绵阳',pinYin:'mianyang',py:'my'},{cityName:'梅州',pinYin:'meizhou',py:'mz'},{cityName:'眉山',pinYin:'meishan',py:'ms'},{cityName:'南昌',pinYin:'nanchang',py:'nc'},{cityName:'南京',pinYin:'nanjing',py:'nj'},{cityName:'南宁',pinYin:'nanning',py:'nn'},{cityName:'宁波',pinYin:'ningbo',py:'nb'},{cityName:'南通',pinYin:'nantong',py:'nt'},{cityName:'南充',pinYin:'nanchong',py:'nc'},{cityName:'内江',pinYin:'neijiang',py:'nj'},{cityName:'萍乡',pinYin:'pingxiang',py:'px'},{cityName:'攀枝花',pinYin:'panzhihua',py:'pzh'},{cityName:'青岛',pinYin:'qingdao',py:'qd'},{cityName:'泉州',pinYin:'quanzhou',py:'qz'},{cityName:'上海',pinYin:'shanghai',py:'sh'},{cityName:'深圳',pinYin:'shenzhen',py:'sz'},{cityName:'沈阳',pinYin:'shenyang',py:'sy'},{cityName:'石家庄',pinYin:'shijiazhuang',py:'sjz'},{cityName:'苏州',pinYin:'suzhou',py:'sz'},{cityName:'三亚',pinYin:'sanya',py:'sy'},{cityName:'汕头',pinYin:'shantou',py:'st'},{cityName:'上饶',pinYin:'shangrao',py:'sr'},{cityName:'遂宁',pinYin:'suining',py:'sn'},{cityName:'宿迁',pinYin:'suqian',py:'sq'},{cityName:'天津',pinYin:'tianjin',py:'tj'},{cityName:'太原',pinYin:'taiyuan',py:'ty'},{cityName:'台州',pinYin:'taizhou',py:'tz'},{cityName:'唐山',pinYin:'tangshan',py:'ts'},{cityName:'铁岭',pinYin:'tieling',py:'tl'},{cityName:'武汉',pinYin:'wuhan',py:'wh'},{cityName:'无锡',pinYin:'wuxi',py:'wx'},{cityName:'温州',pinYin:'wenzhou',py:'wz'},{cityName:'乌鲁木齐',pinYin:'wulumuqi',py:'wlmq'},{cityName:'威海',pinYin:'weihai',py:'wh'},{cityName:'渭南',pinYin:'weinan',py:'wn'},{cityName:'西安',pinYin:'xian',py:'xa'},{cityName:'厦门',pinYin:'xiamen',py:'xm'},{cityName:'香港',pinYin:'xianggang',py:'xg'},{cityName:'徐州',pinYin:'xuzhou',py:'xz'},{cityName:'西宁',pinYin:'xining',py:'xn'},{cityName:'襄阳',pinYin:'xiangyang',py:'xy'},{cityName:'新余',pinYin:'xinyu',py:'xy'},{cityName:'许昌',pinYin:'xuchang',py:'xc'},{cityName:'信阳',pinYin:'xinyang',py:'xy'},{cityName:'银川',pinYin:'yinchuan',py:'yc'},{cityName:'宜昌',pinYin:'yichang',py:'yc'},{cityName:'烟台',pinYin:'yantai',py:'yt'},{cityName:'扬州',pinYin:'yangzhou',py:'yz'},{cityName:'宜宾',pinYin:'yibin',py:'yb'},{cityName:'运城',pinYin:'yuncheng',py:'yc'},{cityName:'榆林',pinYin:'yulin',py:'yl'},{cityName:'盐城',pinYin:'yancheng',py:'yc'},{cityName:'岳阳',pinYin:'yueyang',py:'yy'},{cityName:'延安',pinYin:'yanan',py:'ya'},{cityName:'鹰潭',pinYin:'yingtan',py:'yt'},{cityName:'永州',pinYin:'yongzhou',py:'yz'},{cityName:'郑州',pinYin:'zhengzhou',py:'zz'},{cityName:'珠海',pinYin:'zhuhai',py:'zh'},{cityName:'张家界',pinYin:'zhangjiajie',py:'zzj'},{cityName:'中山',pinYin:'zhongshan',py:'zs'},{cityName:'遵义',pinYin:'zunyi',py:'zy'},{cityName:'湛江',pinYin:'zhanjiang',py:'zj'},{cityName:'株洲',pinYin:'zhuzhou',py:'zz'},{cityName:'肇庆',pinYin:'zhaoqing',py:'zq'},{cityName:'枣庄',pinYin:'zaozhuang',py:'zz'},{cityName:'舟山',pinYin:'zhoushan',py:'zs'},{cityName:'自贡',pinYin:'zigong',py:'zg'},{cityName:'资阳',pinYin:'ziyang',py:'zy'},{cityName:'张掖',pinYin:'zhangye',py:'zy'}]};/***/},/* 164 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (immutable) */__webpack_exports__["a"]=getCities;/* harmony export (immutable) */__webpack_exports__["b"]=query;/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);function getCities(list){var showDesc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(list&&list.length>0){var result=list.map(function(v){var o=Object.assign({},v);if(o.suggestName){o.name=o.suggestName;}if(o.stationName&&!o.name){o.name=o.stationName;}if(o.cityName&&!o.name){o.name=o.cityName;}if(o.code&&showDesc){o.desc=o.code;}return o;});return result;}else{return[];}}function query(source,text){var res=[];res=source.filter(function(item){var arr=[];var isHave=false;Object.keys(item).forEach(function(prop){var itemStr=item[prop];__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].isString(itemStr)&&itemStr.split(',').forEach(function(val){arr.push(val);});});arr.some(function(val){isHave=new RegExp('^'+text).test(val);return isHave;});return isHave;});return res;}/***/},/* 165 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tab_vue__=__webpack_require__(58);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3280c3d8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tab_vue__=__webpack_require__(168);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(166);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-3280c3d8";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_tab_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3280c3d8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_tab_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-city/tab.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-3280c3d8",Component.options);}else{hotAPI.reload("data-v-3280c3d8",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 166 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(167);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("59c42984",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3280c3d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./tab.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3280c3d8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 167 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.tab-box[data-v-3280c3d8] {\n  width: 750px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tab-item[data-v-3280c3d8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 90px;\n  background-color: #ffffff;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tab-item-text[data-v-3280c3d8] {\n  text-align: center;\n  color: #000000;\n  font-size: 28px;\n}\n.text-selected[data-v-3280c3d8] {\n  font-weight: bold;\n}\n.tab-item-selected-bar[data-v-3280c3d8] {\n  width: 750px;\n  background-color: #f2f3f4;\n}\n.tab-item-selected-bar-in[data-v-3280c3d8] {\n  width: 375px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 6px;\n}\n.tab-item-active[data-v-3280c3d8] {\n  background-color: #ffb200;\n  width: 92px;\n  height: 6px;\n}\n",""]);// exports
/***/},/* 168 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"tab-box"},_vm._l(["国内","国际"],function(name,i){return _c("div",{key:i,staticClass:"tab-item",on:{click:function click($event){return _vm.switchTab(i);}}},[_c("text",{staticClass:"['tab-item-text', i===checkedIndex && 'text-selected']"},[_vm._v(_vm._s(name))])]);}),0),_vm._v(" "),_c("div",{staticClass:"tab-item-selected-bar"},[_c("div",{ref:"tab-bar",staticClass:"tab-item-selected-bar-in"},[_c("div",{staticClass:"tab-item-active"})])])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3280c3d8",esExports);}}/***/},/* 169 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(60);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_37801317_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(173);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(170);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-37801317";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_37801317_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-searchbar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-37801317",Component.options);}else{hotAPI.reload("data-v-37801317",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 170 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(171);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("5c5f83ab",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37801317\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37801317\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 171 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-search-bar[data-v-37801317] {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #ffffff;\n  width: 750px;\n  height: 84px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.wxc-search-bar-yellow[data-v-37801317] {\n  background-color: #ffc900;\n}\n.search-bar-input[data-v-37801317] {\n  position: absolute;\n  top: 10px;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 40px;\n  padding-left: 60px;\n  font-size: 26px;\n  width: 624px;\n  height: 64px;\n  line-height: 64px;\n  background-color: #E5E5E5;\n  border-radius: 6px;\n}\n.search-bar-input-yellow[data-v-37801317] {\n  background-color: #fff6d6;\n}\n.search-bar-icon[data-v-37801317] {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 34px;\n  top: 28px;\n}\n.search-bar-close[data-v-37801317] {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 120px;\n  top: 28px;\n}\n.search-bar-button[data-v-37801317] {\n  width: 94px;\n  height: 36px;\n  font-size: 30px;\n  text-align: center;\n  background-color: #ffffff;\n  margin-top: 16px;\n  margin-right: 0;\n  color: #333333;\n  position: absolute;\n  right: 8px;\n  top: 9px;\n}\n.search-bar-button-yellow[data-v-37801317] {\n  background-color: #FFC900;\n}\n.input-has-dep[data-v-37801317] {\n  padding-left: 240px;\n  width: 710px;\n}\n.bar-dep[data-v-37801317] {\n  width: 170px;\n  padding-right: 12px;\n  padding-left: 12px;\n  height: 42px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: absolute;\n  left: 24px;\n  top: 22px;\n  border-right-style: solid;\n  border-right-width: 1px;\n  border-right-color: #C7C7C7;\n}\n.bar-dep-yellow[data-v-37801317] {\n  border-right-color: #C7C7C7;\n}\n.dep-text[data-v-37801317] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  font-size: 26px;\n  color: #666666;\n  margin-right: 6px;\n  lines: 1;\n  text-overflow: ellipsis;\n}\n.dep-arrow[data-v-37801317] {\n  width: 24px;\n  height: 24px;\n}\n.icon-has-dep[data-v-37801317] {\n  left: 214px;\n}\n.disabled-input[data-v-37801317] {\n  width: 750px;\n  height: 64px;\n  position: absolute;\n  left: 0;\n  background-color: transparent;\n}\n.has-dep-disabled[data-v-37801317] {\n  width: 550px;\n  left: 200px;\n}\n",""]);// exports
/***/},/* 172 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var INPUT_ICON='https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png';/* harmony export (immutable) */__webpack_exports__["c"]=INPUT_ICON;var CLOSE_ICON='https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png';/* harmony export (immutable) */__webpack_exports__["b"]=CLOSE_ICON;var ARROW_ICON='https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png';/* harmony export (immutable) */__webpack_exports__["a"]=ARROW_ICON;/***/},/* 173 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.mod==="default"?_c("div",{class:["wxc-search-bar","wxc-search-bar-"+_vm.theme],style:_vm.barStyle},[_c("input",{ref:"search-input",class:["search-bar-input","search-bar-input-"+_vm.theme],style:{width:_vm.needShowCancel?"624px":"710px"},attrs:{"return-key-type":_vm.returnKeyType,autofocus:_vm.autofocus,disabled:_vm.disabled,type:_vm.inputType,placeholder:_vm.placeholder},domProps:{value:_vm.value},on:{blur:_vm.onBlur,focus:_vm.onFocus,input:_vm.onInput,return:_vm.onSubmit}}),_vm._v(" "),_vm.disabled?_c("div",{staticClass:"disabled-input",on:{click:_vm.inputDisabledClicked}}):_vm._e(),_vm._v(" "),_c("image",{staticClass:"search-bar-icon",attrs:{"aria-hidden":true,src:_vm.inputIcon}}),_vm._v(" "),_vm.showClose?_c("image",{staticClass:"search-bar-close",attrs:{"aria-hidden":true,src:_vm.closeIcon},on:{click:_vm.closeClicked}}):_vm._e(),_vm._v(" "),_vm.needShowCancel?_c("text",{class:["search-bar-button","search-bar-button-"+_vm.theme],style:_vm.buttonStyle,on:{click:_vm.cancelClicked}},[_vm._v(_vm._s(_vm.cancelLabel))]):_vm._e()]):_vm._e(),_vm._v(" "),_vm.mod==="hasDep"?_c("div",{class:["wxc-search-bar","wxc-search-bar-"+_vm.theme],style:_vm.barStyle},[_c("input",{class:["search-bar-input","input-has-dep","search-bar-input-"+_vm.theme],attrs:{disabled:_vm.disabled,autofocus:_vm.autofocus,"return-key-type":_vm.returnKeyType,type:_vm.inputType,placeholder:_vm.placeholder},domProps:{value:_vm.value},on:{blur:_vm.onBlur,focus:_vm.onFocus,input:_vm.onInput,return:_vm.onSubmit}}),_vm._v(" "),_vm.disabled?_c("div",{staticClass:"disabled-input has-dep-disabled",on:{click:_vm.inputDisabledClicked}}):_vm._e(),_vm._v(" "),_c("div",{class:["bar-dep",".bar-dep-"+_vm.theme],on:{click:_vm.depClicked}},[_c("text",{staticClass:"dep-text"},[_vm._v(_vm._s(_vm.depName))]),_vm._v(" "),_c("image",{staticClass:"dep-arrow",attrs:{src:_vm.arrowIcon,"aria-hidden":true}})]),_vm._v(" "),_c("image",{staticClass:"search-bar-icon icon-has-dep",attrs:{"aria-hidden":true,src:_vm.inputIcon}})]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37801317",esExports);}}/***/},/* 174 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(62);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_414ad847_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(182);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(175);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-414ad847";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_414ad847_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-result/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-414ad847",Component.options);}else{hotAPI.reload("data-v-414ad847",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 175 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(176);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("2bba8f56",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-414ad847\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-414ad847\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 176 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wrap[data-v-414ad847] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wxc-result[data-v-414ad847] {\n  width: 750px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f2f3f4;\n}\n.result-image[data-v-414ad847] {\n  width: 320px;\n  height: 320px;\n}\n.result-content[data-v-414ad847] {\n  margin-top: 36px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.content-text[data-v-414ad847] {\n  font-size: 30px;\n  color: #A5A5A5;\n  height: 42px;\n  line-height: 42px;\n  text-align: center;\n}\n.content-desc[data-v-414ad847] {\n  margin-top: 10px;\n}\n.result-button[data-v-414ad847] {\n  margin-top: 60px;\n  border-width: 1px;\n  border-color: #979797;\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  width: 240px;\n  height: 72px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.button-text[data-v-414ad847] {\n  color: #666666;\n  font-size: 30px;\n}\n",""]);// exports
/***/},/* 177 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(178),__esModule:true};/***/},/* 178 *//***/function(module,exports,__webpack_require__){__webpack_require__(179);module.exports=__webpack_require__(5).Object.keys;/***/},/* 179 *//***/function(module,exports,__webpack_require__){// 19.1.2.14 Object.keys(O)
var toObject=__webpack_require__(21);var $keys=__webpack_require__(20);__webpack_require__(180)('keys',function(){return function keys(it){return $keys(toObject(it));};});/***/},/* 180 *//***/function(module,exports,__webpack_require__){// most Object methods by ES6 should accept primitives
var $export=__webpack_require__(16);var core=__webpack_require__(5);var fails=__webpack_require__(14);module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY];var exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);};/***/},/* 181 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//* harmony default export */__webpack_exports__["a"]={errorPage:{pic:'https://img.alicdn.com/tfs/TB17blphfDH8KJjy1XcXXcpdXXa-320-320.png',content:'抱歉出错了，我们正在全力解决中',button:'再试一次',title:'出错啦'},noGoods:{pic:'https://img.alicdn.com/tfs/TB1mPWEeOqAXuNjy1XdXXaYcVXa-320-320.png',content:'主人，这里什么都没有找到',button:'再试一次',title:'暂无商品'},noNetwork:{pic:'https://img.alicdn.com/tfs/TB1jkA5g9_I8KJjy0FoXXaFnVXa-320-320.png',content:'哎呀，没有网络了......',button:'刷新一下',title:'无网络'},errorLocation:{pic:'https://img.alicdn.com/tfs/TB1zXXahhrI8KJjy0FpXXb5hVXa-320-320.png',content:'哎呀，定位失败了......',button:'刷新一下',title:'定位失败'}};/***/},/* 182 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.show?_c("div",{staticClass:"wrap",style:_vm.wrapStyle},[_c("div",{staticClass:"wxc-result",style:{paddingTop:_vm.setPaddingTop}},[_c("image",{staticClass:"result-image",attrs:{"aria-hidden":true,src:_vm.resultType.pic}}),_vm._v(" "),_vm.resultType.content?_c("div",{staticClass:"result-content"},[_c("text",{staticClass:"content-text"},[_vm._v(_vm._s(_vm.resultType.content))]),_vm._v(" "),_vm.resultType.desc?_c("text",{staticClass:"content-text content-desc"},[_vm._v(_vm._s(_vm.resultType.desc))]):_vm._e()]):_vm._e(),_vm._v(" "),_vm.resultType.button?_c("div",{staticClass:"result-button",on:{touchend:_vm.handleTouchEnd,click:_vm.onClick}},[_c("text",{staticClass:"button-text"},[_vm._v(_vm._s(_vm.resultType.button))])]):_vm._e()])]):_vm._e();};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-414ad847",esExports);}}/***/},/* 183 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(64);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_943cc848_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(187);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(184);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-943cc848";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_943cc848_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-indexlist/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-943cc848",Component.options);}else{hotAPI.reload("data-v-943cc848",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 184 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(185);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("364a50a0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-943cc848\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-943cc848\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 185 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.index-list[data-v-943cc848] {\n  width: 750px;\n  height: 1334px;\n}\n.index-list-title[data-v-943cc848] {\n  border-bottom-width: 1px;\n  border-bottom-color: rgba(32, 35, 37, 0.15);\n  background-color: #FBFBFB;\n  font-size: 24px;\n  color: #666666;\n  height: 48px;\n  line-height: 48px;\n  padding-left: 24px;\n  width: 750px;\n}\n.group-title[data-v-943cc848] {\n  border-bottom-width: 0;\n  padding-bottom: 0;\n  height: 60px;\n  padding-top: 24px;\n}\n.index-list-item[data-v-943cc848] {\n  width: 750px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-width: 1px;\n  border-bottom-color: #e0e0e0;\n  height: 92px;\n  padding-left: 24px;\n  padding-right: 24px;\n  background-color: #FFFFFF;\n}\n.iphone-x[data-v-943cc848] {\n  height: 68px;\n}\n.title[data-v-943cc848] {\n  font-size: 32px;\n  color: #3D3D3D;\n}\n.desc[data-v-943cc848] {\n  font-size: 24px;\n  color: #A5A5A5;\n  margin-left: 30px;\n}\n.index-list-nav[data-v-943cc848] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-bottom: 60px;\n  margin-top: 60px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  width: 70px;\n}\n.list-nav-key[data-v-943cc848] {\n  text-align: center;\n  font-size: 24px;\n  height: 40px;\n  color: #666666;\n}\n.index-list-pop[data-v-943cc848] {\n  position: fixed;\n  top: 550px;\n  left: 316px;\n  width: 120px;\n  height: 120px;\n  text-align: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(32, 35, 37, .6);\n  border-bottom-left-radius: 60px;\n  border-bottom-right-radius: 60px;\n  border-top-left-radius: 60px;\n  border-top-right-radius: 60px;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 35px;\n  padding-bottom: 35px;\n  color: #ffffff;\n}\n.list-pop-text[data-v-943cc848] {\n  font-size: 40px;\n  text-align: center;\n  color: #ffffff;\n}\n.group[data-v-943cc848] {\n  padding-bottom: 18px;\n  padding-right: 70px;\n  background-color: #FBFBFB;\n}\n.group-list[data-v-943cc848] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-left: 18px;\n  margin-top: 18px;\n}\n.group-item[data-v-943cc848] {\n  width: 146px;\n  height: 64px;\n  border-width: 1px;\n  border-color: #e0e0e0;\n  margin-right: 18px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #ffffff;\n}\n.item-name[data-v-943cc848] {\n  font-size: 24px;\n  line-height: 26px;\n  color: #333333;\n}\n.item-desc[data-v-943cc848] {\n  margin-top: 2px;\n  color: #999999;\n  font-size: 20px;\n  text-align: center;\n}\n.location-icon[data-v-943cc848] {\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n}\n",""]);// exports
/***/},/* 186 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (immutable) */__webpack_exports__["a"]=totalList;/* unused harmony export getSpecialData *//* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*//**
 * 根据26个字母取每一项首字母对数据进行排序,处理数据变换
 * @return {[array]}
 */function totalList(source,hotListConfig,cityLocationConfig){var LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ';var res=[];LETTERS.split('').forEach(function(letter){var _data=source.filter(function(item){if(item.pinYin){return item.pinYin.slice(0,1).toLowerCase()===letter.toLowerCase();}else if(item.py){return item.py.slice(0,1).toLowerCase()===letter.toLowerCase();}else{return false;}});if(_data.length){res.push({title:letter,data:_data,type:'list'});}});// 处理热门数据
var hotList=getSpecialData(hotListConfig);hotList&&res.unshift(hotList);// 处理特殊定位数据
var cityLocation=getSpecialData(cityLocationConfig);cityLocation&&res.unshift(cityLocation);return res;}function getSpecialData(data){if(data&&data.type&&data.list&&data.list.length>0){var type=data.type,title=data.title,list=data.list;return{title:title,type:type,data:type==='group'?__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].arrayChunk(list):list};}else{return null;}}/***/},/* 187 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_c("list",{staticClass:"index-list",style:{height:_vm.height+"px"}},[_c("cell",[_vm._t("head")],2),_vm._v(" "),_vm._l(_vm.formatList,function(v,i){return _c("cell",{key:i,ref:"index-item-title-"+v.title,refInFor:true},[!_vm.onlyShowList?_c("text",{class:["index-list-title",v.type&&v.type=="group"&&"group-title"],style:_vm.headerStyle},[_vm._v(_vm._s(v.title))]):_vm._e(),_vm._v(" "),v.type&&v.type==="group"&&!_vm.onlyShowList?_c("div",{staticClass:"group",style:_vm.groupWrapStyle},_vm._l(v.data,function(group,index){return _c("div",{key:index,staticClass:"group-list"},_vm._l(group,function(item,i){return _c("div",{key:i,staticClass:"group-item",style:_vm.groupItemStyle,attrs:{accessible:true,"aria-label":item.name+","+(item.desc?item.desc:"")},on:{click:function click($event){return _vm.itemClicked(item);}}},[item.isLocation?_c("image",{staticClass:"location-icon",attrs:{src:"https://gw.alicdn.com/tfs/TB1JUiUPFXXXXXUXXXXXXXXXXXX-32-32.png"}}):_vm._e(),_vm._v(" "),_c("div",[_c("text",{staticClass:"item-name",style:_vm.groupItemTextStyle},[_vm._v(_vm._s(item.name))]),_vm._v(" "),item.desc?_c("text",{staticClass:"item-desc",style:_vm.groupItemDescStyle},[_vm._v(_vm._s(item.desc))]):_vm._e()])]);}),0);}),0):_vm._e(),_vm._v(" "),v.type==="list"?_c("div",_vm._l(v.data,function(item,index){return _c("div",{key:index,staticClass:"index-list-item",style:_vm.itemStyle,attrs:{accessible:true,"aria-label":item.name+","+(item.desc?item.desc:"")},on:{click:function click($event){return _vm.itemClicked(item);}}},[_c("text",{staticClass:"title",style:_vm.itemTextStyle},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c("text",{staticClass:"desc",style:_vm.itemDescStyle},[_vm._v(_vm._s(item.desc))])]);}),0):_vm._e()]);}),_vm._v(" "),_vm.isIPhoneX?_c("cell",{staticClass:"iphone-x"}):_vm._e()],2),_vm._v(" "),_vm.showIndex&&!_vm.onlyShowList?_c("div",{staticClass:"index-list-nav",style:_vm.navStyle},_vm._l(_vm.formatList,function(item,index){return _c("text",{key:index,staticClass:"list-nav-key",style:_vm.navTextStyle,attrs:{title:item.title},on:{click:function click($event){return _vm.go2Key(item.title);}}},[_vm._v(_vm._s(item.title))]);}),0):_vm._e(),_vm._v(" "),_vm.popKeyShow?_c("div",{staticClass:"index-list-pop",style:_vm.popStyle},[_c("text",{staticClass:"list-pop-text",style:_vm.popTextStyle},[_vm._v(_vm._s(_vm.popKey))])]):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-943cc848",esExports);}}/***/},/* 188 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"city",staticClass:"wxc-city",style:_vm.cityExtendStyle},[_c("wxc-searchbar",_vm._b({ref:"wxc-searchbar",on:{wxcSearchbarInputOnInput:_vm.onInput,wxcSearchbarInputReturned:_vm.onSubmit,wxcSearchbarCancelClicked:_vm.onCancel}},"wxc-searchbar",_vm.mergeInputConfig,false)),_vm._v(" "),_vm.showTab?_c("wxc-tab",{ref:"wxc-tab",on:{wxcTabSwitch:_vm.onTabSwitch}}):_vm._e(),_vm._v(" "),_c("wxc-indexlist",{attrs:{"normal-list":_vm.normalList,"hot-list-config":_vm.hotListConfig,"nav-style":{top:"24px"},height:_vm.listHeight,"show-index":_vm.showIndex,"only-show-list":!_vm.showNavHeader||_vm.onlyShowList,"city-location-config":_vm.currentCityLocationConfig},on:{wxcIndexlistItemClicked:_vm.onItemClick}}),_vm._v(" "),_vm.showError?_c("wxc-result",{attrs:{type:"noGoods","wrap-style":{top:"84px"},show:true,customSet:_vm.result}}):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4480e7d5",esExports);}}/***/},/* 189 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(190);/* unused harmony reexport default *//***/},/* 190 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(65);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_98035746_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(193);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(191);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-98035746";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_98035746_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-countdown/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-98035746",Component.options);}else{hotAPI.reload("data-v-98035746",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 191 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(192);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("4c913462",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98035746\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98035746\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 192 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.time-dot-wrap[data-v-98035746] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n",""]);// exports
/***/},/* 193 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{style:_vm.mrTimeWrapStyle},[_c("div",{staticClass:"time-dot-wrap"},[_vm.tplIndexOfDays!==-1?_c("div",{style:_vm.mrTimeBoxStyle,attrs:{accessible:true,"aria-label":_vm.countDownData.day+"天"}},[_c("text",{style:_vm.mrTimeTextStyle},[_vm._v(_vm._s(_vm.countDownData.day))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfDays!==-1?_c("div",{style:_vm.mrDotBoxStyle,attrs:{"aria-hidden":true}},[_c("text",{style:_vm.mrDotTextStyle},[_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfDays,_vm.tplIndexOfHours)))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfHours!==-1?_c("div",{style:_vm.mrTimeBoxStyle,attrs:{accessible:true,"aria-label":_vm.countDownData.hour+"时"}},[_c("text",{style:_vm.mrTimeTextStyle},[_vm._v(_vm._s(_vm.countDownData.hour))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfHours!==-1?_c("div",{style:_vm.mrDotBoxStyle,attrs:{"aria-hidden":true}},[_c("text",{style:_vm.mrDotTextStyle},[_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfHours,_vm.tplIndexOfMinutes)))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfMinutes!==-1?_c("div",{style:_vm.mrTimeBoxStyle,attrs:{accessible:true,"aria-label":_vm.countDownData.minute+"分"}},[_c("text",{style:_vm.mrTimeTextStyle},[_vm._v(_vm._s(_vm.countDownData.minute))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfMinutes!==-1?_c("div",{style:_vm.mrDotBoxStyle,attrs:{"aria-hidden":true}},[_c("text",{style:_vm.mrDotTextStyle},[_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfMinutes,_vm.tplIndexOfSeconds)))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfSeconds!==-1?_c("div",{style:_vm.mrTimeBoxStyle,attrs:{accessible:true,"aria-label":_vm.countDownData.second+"秒"}},[_c("text",{style:_vm.mrTimeTextStyle},[_vm._v(_vm._s(_vm.countDownData.second))])]):_vm._e(),_vm._v(" "),_vm.tplIndexOfSeconds!==-1?_c("div",{style:_vm.mrDotBoxStyle,attrs:{"aria-hidden":true}},[_c("text",{style:_vm.mrDotTextStyle},[_vm._v(_vm._s(_vm.getDot(_vm.tplIndexOfSeconds,-1)))])]):_vm._e()])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-98035746",esExports);}}/***/},/* 194 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(195);/* unused harmony reexport default *//***/},/* 195 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(66);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d3fa589c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(203);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(196);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-d3fa589c";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d3fa589c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-dialog/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-d3fa589c",Component.options);}else{hotAPI.reload("data-v-d3fa589c",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 196 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(197);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("156c1877",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3fa589c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3fa589c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 197 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.container[data-v-d3fa589c] {\n  position: fixed;\n  width: 750px;\n  /*兼容H5异常*/\n  z-index: 99999;\n}\n.dialog-box[data-v-d3fa589c] {\n  position: fixed;\n  left: 96px;\n  width: 558px;\n  background-color: #FFFFFF;\n}\n.dialog-content[data-v-d3fa589c] {\n  padding-top: 36px;\n  padding-bottom: 36px;\n  padding-left: 36px;\n  padding-right: 36px;\n}\n.content-title[data-v-d3fa589c] {\n  color: #333333;\n  font-size: 36px;\n  text-align: center;\n  margin-bottom: 24px;\n}\n.content-subtext[data-v-d3fa589c] {\n  color: #666666;\n  font-size: 26px;\n  line-height: 36px;\n  text-align: center;\n}\n.dialog-footer[data-v-d3fa589c] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top-color: #F3F3F3;\n  border-top-width: 1px;\n}\n.footer-btn[data-v-d3fa589c] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 90px;\n}\n.cancel[data-v-d3fa589c] {\n  border-right-color: #F3F3F3;\n  border-right-width: 1px;\n}\n.btn-text[data-v-d3fa589c] {\n  font-size: 36px;\n  color: #666666;\n}\n.no-prompt[data-v-d3fa589c] {\n  width: 486px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 24px;\n}\n.no-prompt-icon[data-v-d3fa589c] {\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n}\n.no-prompt-text[data-v-d3fa589c] {\n  font-size: 24px;\n  color: #A5A5A5;\n}\n",""]);// exports
/***/},/* 198 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(67);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_588747fc_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(201);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(199);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-588747fc";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_588747fc_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-overlay/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-588747fc",Component.options);}else{hotAPI.reload("data-v-588747fc",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 199 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(200);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("8be4ed5c",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-588747fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-588747fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 200 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-overlay[data-v-588747fc] {\n  width: 750px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n",""]);// exports
/***/},/* 201 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.show?_c("div",{ref:"wxc-overlay",staticClass:"wxc-overlay",style:_vm.overlayStyle,attrs:{hack:_vm.shouldShow},on:{click:_vm.overlayClicked}}):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-588747fc",esExports);}}/***/},/* 202 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var CHECKED='https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';/* harmony export (immutable) */__webpack_exports__["a"]=CHECKED;var UN_CHECKED='https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';/* harmony export (immutable) */__webpack_exports__["b"]=UN_CHECKED;/***/},/* 203 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"container"},[_vm.show?_c("wxc-overlay",{attrs:{left:_vm.left,show:true,hasAnimation:false}}):_vm._e(),_vm._v(" "),_vm.show?_c("div",{staticClass:"dialog-box",style:{top:_vm.top+"px",left:(_vm.isWeb?_vm.left:0)+96+"px"}},[_c("div",{staticClass:"dialog-content"},[_vm._t("title",[_c("text",{staticClass:"content-title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_vm._t("content",[_c("text",{staticClass:"content-subtext"},[_vm._v(_vm._s(_vm.content))])]),_vm._v(" "),_vm.showNoPrompt?_c("div",{staticClass:"no-prompt",on:{click:_vm.noPromptClicked}},[_c("image",{staticClass:"no-prompt-icon",attrs:{src:_vm.noPromptIcon}}),_vm._v(" "),_c("text",{staticClass:"no-prompt-text"},[_vm._v(_vm._s(_vm.noPromptText))])]):_vm._e()],2),_vm._v(" "),_c("div",{staticClass:"dialog-footer"},[!_vm.single?_c("div",{staticClass:"footer-btn cancel",on:{click:_vm.secondaryClicked}},[_c("text",{staticClass:"btn-text",style:{color:_vm.secondBtnColor}},[_vm._v(_vm._s(_vm.cancelText))])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"footer-btn confirm",on:{click:_vm.primaryClicked}},[_c("text",{staticClass:"btn-text",style:{color:_vm.mainBtnColor}},[_vm._v(_vm._s(_vm.confirmText))])])])]):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d3fa589c",esExports);}}/***/},/* 204 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(205);/* unused harmony reexport default *//***/},/* 205 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(68);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_20354022_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(208);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(206);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-20354022";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_20354022_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-ep-slider/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-20354022",Component.options);}else{hotAPI.reload("data-v-20354022",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 206 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(207);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("2ac858cb",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20354022\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20354022\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 207 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.slider[data-v-20354022] {\n  position: absolute;\n  top: 0;\n}\n",""]);// exports
/***/},/* 208 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{style:_vm.containerS},[_c("div",{ref:"sliderCtn_"+_vm.sliderId,style:{width:_vm.cardWidth+"px",height:_vm.cardS.height+"px",transform:"translateX(-"+_vm.currentIndex*(_vm.cardS.width+_vm.cardS.spacing)+"px)"},on:{panstart:_vm.onPanStart,panmove:_vm.onPanMove,panend:_vm.onPanEnd,horizontalpan:_vm.onEpPanStart}},[_vm._l(_vm.cardList,function(v,index){return _c("div",{ref:"card"+index+"_"+_vm.sliderId,refInFor:true,staticClass:"slider",style:{transform:"scale("+(index===_vm.currentIndex?1:_vm.cardS.scale)+")",left:index*(_vm.cardS.width+_vm.cardS.spacing)+"px",marginLeft:(_vm.containerS.width-_vm.cardS.width)/2+"px",width:_vm.cardS.width+"px",height:_vm.cardS.height+"px"}},[_vm._t("card"+index+"_"+_vm.sliderId)],2);}),_vm._v(" "),_vm._t("pull-more")],2)]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-20354022",esExports);}}/***/},/* 209 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__wxc_tab_page_full_page_vue__=__webpack_require__(210);/* unused harmony reexport default */// hack for babel-plugin-component
/***/},/* 210 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_full_page_vue__=__webpack_require__(69);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_896ae228_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_full_page_vue__=__webpack_require__(213);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(211);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-896ae228";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_full_page_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_896ae228_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_full_page_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-tab-page/full-page.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-896ae228",Component.options);}else{hotAPI.reload("data-v-896ae228",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 211 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(212);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("f4f83d58",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-896ae228\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./full-page.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-896ae228\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./full-page.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 212 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-tab-page[data-v-896ae228] {\n  width: 750px;\n  background-color: #f2f3f4;\n}\n.tab-title-list[data-v-896ae228] {\n  width: 750px;\n  position: absolute;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.title-item[data-v-896ae228] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-style: solid;\n}\n.border-bottom[data-v-896ae228] {\n  position: absolute;\n  bottom: 0;\n}\n.tab-page-wrap[data-v-896ae228] {\n  width: 750px;\n}\n.tab-container[data-v-896ae228] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: absolute;\n}\n.tab-text[data-v-896ae228] {\n  lines: 1;\n  text-overflow: ellipsis;\n}\n",""]);// exports
/***/},/* 213 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-tab-page",style:{height:_vm.tabPageHeight+"px"}},[_c("div",{ref:"tab-page-wrap",staticClass:"tab-page-wrap",style:{height:_vm.tabPageHeight+"px"},attrs:{"prevent-move-event":true},on:{horizontalpan:_vm.startHandler}},[_c("div",{ref:"tab-container",staticClass:"tab-container"},[_vm._t("default")],2)]),_vm._v(" "),_c("scroller",{ref:"tab-title-list",staticClass:"tab-title-list",style:{backgroundColor:_vm.tabStyles.bgColor,height:_vm.tabStyles.height+"px",top:_vm.tabStyles.top+"px"},attrs:{"show-scrollbar":false,"scroll-direction":"horizontal","data-spm":_vm.spmC}},_vm._l(_vm.tabTitles,function(v,index){return _c("div",{key:index,ref:"wxc-tab-title-"+index,refInFor:true,staticClass:"title-item",style:{width:_vm.tabStyles.width+"px",height:_vm.tabStyles.height+"px",backgroundColor:_vm.currentPage==index?_vm.tabStyles.activeBgColor:_vm.tabStyles.bgColor},attrs:{accessible:true,"aria-label":""+(v.title?v.title:"标签"+index)},on:{click:function click($event){return _vm.setPage(index,v.url);}}},[_vm.titleType=="icon"?_c("image",{style:{width:_vm.tabStyles.iconWidth+"px",height:_vm.tabStyles.iconHeight+"px"},attrs:{src:_vm.currentPage==index?v.activeIcon:v.icon}}):_vm._e(),_vm._v(" "),_c("text",{staticClass:"tab-text",style:{fontSize:_vm.tabStyles.fontSize+"px",fontWeight:_vm.currentPage==index&&_vm.tabStyles.isActiveTitleBold?"bold":"normal",color:_vm.currentPage==index?_vm.tabStyles.activeTitleColor:_vm.tabStyles.titleColor,paddingLeft:(_vm.tabStyles.textPaddingLeft?_vm.tabStyles.textPaddingLeft:10)+"px",paddingRight:(_vm.tabStyles.textPaddingRight?_vm.tabStyles.textPaddingRight:10)+"px"}},[_vm._v(_vm._s(v.title))]),_vm._v(" "),_vm.tabStyles.hasActiveBottom?_c("div",{staticClass:"border-bottom",style:{width:_vm.tabStyles.activeBottomWidth+"px",left:(_vm.tabStyles.width-_vm.tabStyles.activeBottomWidth)/2+"px",height:_vm.tabStyles.activeBottomHeight+"px",backgroundColor:_vm.currentPage==index?_vm.tabStyles.activeBottomColor:"transparent"}}):_vm._e()]);}),0)],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-896ae228",esExports);}}/***/},/* 214 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(215);/* unused harmony reexport default *//***/},/* 215 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(70);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_240050cf_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(222);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(216);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-240050cf";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_240050cf_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-grid-select/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-240050cf",Component.options);}else{hotAPI.reload("data-v-240050cf",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 216 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(217);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("3fdd4fc7",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240050cf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240050cf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 217 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.grid-select[data-v-240050cf] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n",""]);// exports
/***/},/* 218 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_option_vue__=__webpack_require__(71);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_f7fed270_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_option_vue__=__webpack_require__(221);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(219);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-f7fed270";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_option_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_f7fed270_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_option_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-grid-select/option.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-f7fed270",Component.options);}else{hotAPI.reload("data-v-f7fed270",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 219 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(220);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("0b763550",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f7fed270\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./option.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f7fed270\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./option.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 220 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.grid-option[data-v-f7fed270] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 8px;\n  border-width: 2px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.text-title[data-v-f7fed270] {\n  lines: 2;\n  line-height: 30px;\n  text-overflow: ellipsis;\n  text-align: center;\n  font-size: 26px;\n}\n.image-checked[data-v-f7fed270] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 38px;\n  height: 34px;\n}\n",""]);// exports
/***/},/* 221 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"grid-option",style:_vm.cWrapperStyle,attrs:{accessible:true,"aria-label":_vm.title+","+(_vm.checked?"已选中":"未选中")},on:{click:_vm.onClick}},[_vm.title?_c("text",{staticClass:"text-title",style:_vm.cTitleStyle},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),_vm.checked&&_vm.icon?_c("image",{staticClass:"image-checked",attrs:{src:_vm.icon}}):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f7fed270",esExports);}}/***/},/* 222 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"grid-select"},[_vm._l(_vm.dList,function(item,index){return _c("option",_vm._b({key:index,style:{marginTop:index>=_vm.cols?_vm.lineSpacing:null},attrs:{index:index},on:{select:function select($event){return _vm.onSelect(index);}}},"option",Object.assign({},_vm.customStyles,item),false));}),_vm._v(" "),_vm._l(_vm.cHackList,function(item,index){return _c("option",_vm._b({key:_vm.id+index,style:{opacity:0,marginTop:_vm.dList.length>=_vm.cols?_vm.lineSpacing:null}},"option",Object.assign({},_vm.customStyles,item),false));})],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-240050cf",esExports);}}/***/},/* 223 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(224);/* unused harmony reexport default *//***/},/* 224 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(72);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6c559163_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(228);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(225);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-6c559163";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6c559163_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-icon/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-6c559163",Component.options);}else{hotAPI.reload("data-v-6c559163",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 225 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(226);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("64e5b913",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c559163\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c559163\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 226 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.icon-font[data-v-6c559163] {\n  color: #666666;\n}\n",""]);// exports
/***/},/* 227 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]={less:'\uE6A5','more_unfold':'\uE6A6',back:'\uE697',more:'\uE6A7',add:'\uE6B9',subtract:'\uE6FE',close:'\uE69A',cry:'\uE69C',delete:'\uE69D',help:'\uE6A3',refresh:'\uE6AA',search:'\uE6AC',success:'\uE6B1',warning:'\uE6B6',wrong:'\uE6B7',clock:'\uE6BB',scanning:'\uE6EC',filter:'\uE6F1',map:'\uE715',play:'\uE719'};/***/},/* 228 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("text",{staticClass:"icon-font",style:_vm.mergeStyle,on:{click:function click($event){return _vm.itemClicked(_vm.name);}}},[_vm._v(_vm._s(_vm.Icon[_vm.name]))]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6c559163",esExports);}}/***/},/* 229 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(230);/* unused harmony reexport default *//***/},/* 230 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(73);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_37c6f35f_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(255);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(231);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-37c6f35f";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_37c6f35f_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-lightbox/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-37c6f35f",Component.options);}else{hotAPI.reload("data-v-37c6f35f",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 231 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(232);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("46a1803c",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37c6f35f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37c6f35f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 232 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.indicator[data-v-37c6f35f] {\n  position: absolute;\n  item-color: rgba(255, 195, 0, .5);\n  item-selected-color: #ffc300;\n  item-size: 20px;\n  height: 20px;\n  bottom: 24px;\n}\n",""]);// exports
/***/},/* 233 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(75);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_76df2816_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(254);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(234);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-76df2816";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_76df2816_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-mask/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-76df2816",Component.options);}else{hotAPI.reload("data-v-76df2816",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 234 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(235);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("5e722ca0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76df2816\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76df2816\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 235 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.container[data-v-76df2816] {\n  position: fixed;\n  width: 750px;\n  /*兼容H5异常*/\n  z-index: 99999;\n}\n.wxc-mask[data-v-76df2816] {\n  position: fixed;\n}\n.mask-bottom[data-v-76df2816] {\n  width: 100px;\n  height: 100px;\n  background-color: transparent;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.mask-close-icon[data-v-76df2816] {\n  width: 64px;\n  height: 64px;\n}\n",""]);// exports
/***/},/* 236 *//***/function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _iterator=__webpack_require__(237);var _iterator2=_interopRequireDefault(_iterator);var _symbol=__webpack_require__(243);var _symbol2=_interopRequireDefault(_symbol);var _typeof=typeof _symbol2.default==="function"&&_typeof2(_iterator2.default)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=typeof _symbol2.default==="function"&&_typeof(_iterator2.default)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof(obj);};/***/},/* 237 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(238),__esModule:true};/***/},/* 238 *//***/function(module,exports,__webpack_require__){__webpack_require__(52);__webpack_require__(239);module.exports=__webpack_require__(37).f('iterator');/***/},/* 239 *//***/function(module,exports,__webpack_require__){__webpack_require__(240);var global=__webpack_require__(8);var hide=__webpack_require__(13);var Iterators=__webpack_require__(22);var TO_STRING_TAG=__webpack_require__(6)('toStringTag');var DOMIterables=('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,'+'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,'+'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,'+'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,'+'TextTrackList,TouchList').split(',');for(var i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i];var Collection=global[NAME];var proto=Collection&&Collection.prototype;if(proto&&!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);Iterators[NAME]=Iterators.Array;}/***/},/* 240 *//***/function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(241);var step=__webpack_require__(242);var Iterators=__webpack_require__(22);var toIObject=__webpack_require__(15);// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(53)(Array,'Array',function(iterated,kind){this._t=toIObject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t;var kind=this._k;var index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');/***/},/* 241 *//***/function(module,exports){module.exports=function(){/* empty */};/***/},/* 242 *//***/function(module,exports){module.exports=function(done,value){return{value:value,done:!!done};};/***/},/* 243 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(244),__esModule:true};/***/},/* 244 *//***/function(module,exports,__webpack_require__){__webpack_require__(245);__webpack_require__(251);__webpack_require__(252);__webpack_require__(253);module.exports=__webpack_require__(5).Symbol;/***/},/* 245 *//***/function(module,exports,__webpack_require__){"use strict";// ECMAScript 6 symbols shim
var global=__webpack_require__(8);var has=__webpack_require__(12);var DESCRIPTORS=__webpack_require__(11);var $export=__webpack_require__(16);var redefine=__webpack_require__(54);var META=__webpack_require__(246).KEY;var $fails=__webpack_require__(14);var shared=__webpack_require__(32);var setToStringTag=__webpack_require__(36);var uid=__webpack_require__(24);var wks=__webpack_require__(6);var wksExt=__webpack_require__(37);var wksDefine=__webpack_require__(38);var enumKeys=__webpack_require__(247);var isArray=__webpack_require__(248);var anObject=__webpack_require__(17);var isObject=__webpack_require__(18);var toObject=__webpack_require__(21);var toIObject=__webpack_require__(15);var toPrimitive=__webpack_require__(27);var createDesc=__webpack_require__(19);var _create=__webpack_require__(55);var gOPNExt=__webpack_require__(249);var $GOPD=__webpack_require__(250);var $GOPS=__webpack_require__(34);var $DP=__webpack_require__(10);var $keys=__webpack_require__(20);var gOPD=$GOPD.f;var dP=$DP.f;var gOPN=gOPNExt.f;var $Symbol=global.Symbol;var $JSON=global.JSON;var _stringify=$JSON&&$JSON.stringify;var PROTOTYPE='prototype';var HIDDEN=wks('_hidden');var TO_PRIMITIVE=wks('toPrimitive');var isEnum={}.propertyIsEnumerable;var SymbolRegistry=shared('symbol-registry');var AllSymbols=shared('symbols');var OPSymbols=shared('op-symbols');var ObjectProto=Object[PROTOTYPE];var USE_NATIVE=typeof $Symbol=='function'&&!!$GOPS.f;var QObject=global.QObject;// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc=DESCRIPTORS&&$fails(function(){return _create(dP({},'a',{get:function get(){return dP(this,'a',{value:7}).a;}})).a!=7;})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key);if(protoDesc)delete ObjectProto[key];dP(it,key,D);if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);}:dP;var wrap=function wrap(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);sym._k=tag;return sym;};var isSymbol=USE_NATIVE&&_typeof2($Symbol.iterator)=='symbol'?function(it){return(typeof it==='undefined'?'undefined':_typeof2(it))=='symbol';}:function(it){return it instanceof $Symbol;};var $defineProperty=function defineProperty(it,key,D){if(it===ObjectProto)$defineProperty(OPSymbols,key,D);anObject(it);key=toPrimitive(key,true);anObject(D);if(has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true;}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)});}return setSymbolDesc(it,key,D);}return dP(it,key,D);};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P));var i=0;var l=keys.length;var key;while(l>i){$defineProperty(it,key=keys[i++],P[key]);}return it;};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P);};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key=toPrimitive(key,true));if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){it=toIObject(it);key=toPrimitive(key,true);if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;var D=gOPD(it,key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D;};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=gOPN(toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);}return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var IS_OP=it===ObjectProto;var names=gOPN(IS_OP?OPSymbols:toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);}return result;};// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){$Symbol=function _Symbol3(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');var tag=uid(arguments.length>0?arguments[0]:undefined);var $set=function $set(value){if(this===ObjectProto)$set.call(OPSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value));};if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});return wrap(tag);};redefine($Symbol[PROTOTYPE],'toString',function toString(){return this._k;});$GOPD.f=$getOwnPropertyDescriptor;$DP.f=$defineProperty;__webpack_require__(76).f=gOPNExt.f=$getOwnPropertyNames;__webpack_require__(25).f=$propertyIsEnumerable;$GOPS.f=$getOwnPropertySymbols;if(DESCRIPTORS&&!__webpack_require__(23)){redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);}wksExt.f=function(name){return wrap(wks(name));};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var es6Symbols=// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),j=0;es6Symbols.length>j;){wks(es6Symbols[j++]);}for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;){wksDefine(wellKnownSymbols[k++]);}$export($export.S+$export.F*!USE_NATIVE,'Symbol',{// 19.4.2.1 Symbol.for(key)
'for':function _for(key){return has(SymbolRegistry,key+='')?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key);},// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function keyFor(sym){if(!isSymbol(sym))throw TypeError(sym+' is not a symbol!');for(var key in SymbolRegistry){if(SymbolRegistry[key]===sym)return key;}},useSetter:function useSetter(){setter=true;},useSimple:function useSimple(){setter=false;}});$export($export.S+$export.F*!USE_NATIVE,'Object',{// 19.1.2.2 Object.create(O [, Properties])
create:$create,// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:$defineProperty,// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:$defineProperties,// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$getOwnPropertyDescriptor,// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:$getOwnPropertyNames,// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$getOwnPropertySymbols});// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES=$fails(function(){$GOPS.f(1);});$export($export.S+$export.F*FAILS_ON_PRIMITIVES,'Object',{getOwnPropertySymbols:function getOwnPropertySymbols(it){return $GOPS.f(toObject(it));}});// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol();// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';})),'JSON',{stringify:function stringify(it){var args=[it];var i=1;var replacer,$replacer;while(arguments.length>i){args.push(arguments[i++]);}$replacer=replacer=args[1];if(!isObject(replacer)&&it===undefined||isSymbol(it))return;// IE8 returns string on undefined
if(!isArray(replacer))replacer=function replacer(key,value){if(typeof $replacer=='function')value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return _stringify.apply($JSON,args);}});// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE]||__webpack_require__(13)($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol,'Symbol');// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math,'Math',true);// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON,'JSON',true);/***/},/* 246 *//***/function(module,exports,__webpack_require__){var META=__webpack_require__(24)('meta');var isObject=__webpack_require__(18);var has=__webpack_require__(12);var setDesc=__webpack_require__(10).f;var id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!__webpack_require__(14)(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function setMeta(it){setDesc(it,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});};var fastKey=function fastKey(it,create){// return primitive with prefix
if(!isObject(it))return(typeof it==='undefined'?'undefined':_typeof2(it))=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';// not necessary to add metadata
if(!create)return'E';// add missing metadata
setMeta(it);// return object ID
}return it[META].i;};var getWeak=function getWeak(it,create){if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;// not necessary to add metadata
if(!create)return false;// add missing metadata
setMeta(it);// return hash weak collections IDs
}return it[META].w;};// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};/***/},/* 247 *//***/function(module,exports,__webpack_require__){// all enumerable object keys, includes symbols
var getKeys=__webpack_require__(20);var gOPS=__webpack_require__(34);var pIE=__webpack_require__(25);module.exports=function(it){var result=getKeys(it);var getSymbols=gOPS.f;if(getSymbols){var symbols=getSymbols(it);var isEnum=pIE.f;var i=0;var key;while(symbols.length>i){if(isEnum.call(it,key=symbols[i++]))result.push(key);}}return result;};/***/},/* 248 *//***/function(module,exports,__webpack_require__){// 7.2.2 IsArray(argument)
var cof=__webpack_require__(28);module.exports=Array.isArray||function isArray(arg){return cof(arg)=='Array';};/***/},/* 249 *//***/function(module,exports,__webpack_require__){// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject=__webpack_require__(15);var gOPN=__webpack_require__(76).f;var toString={}.toString;var windowNames=(typeof window==='undefined'?'undefined':_typeof2(window))=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function getWindowNames(it){try{return gOPN(it);}catch(e){return windowNames.slice();}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));};/***/},/* 250 *//***/function(module,exports,__webpack_require__){var pIE=__webpack_require__(25);var createDesc=__webpack_require__(19);var toIObject=__webpack_require__(15);var toPrimitive=__webpack_require__(27);var has=__webpack_require__(12);var IE8_DOM_DEFINE=__webpack_require__(44);var gOPD=Object.getOwnPropertyDescriptor;exports.f=__webpack_require__(11)?gOPD:function getOwnPropertyDescriptor(O,P){O=toIObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return gOPD(O,P);}catch(e){/* empty */}if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);};/***/},/* 251 *//***/function(module,exports){/***/},/* 252 *//***/function(module,exports,__webpack_require__){__webpack_require__(38)('asyncIterator');/***/},/* 253 *//***/function(module,exports,__webpack_require__){__webpack_require__(38)('observable');/***/},/* 254 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"container"},[_vm.show?_c("wxc-overlay",_vm._b({ref:"overlay",attrs:{show:_vm.show&&_vm.hasOverlay,"can-auto-close":_vm.overlayCanClose,opacity:_vm.opacity},on:{wxcOverlayBodyClicking:_vm.wxcOverlayBodyClicking,wxcOverlayBodyClicked:_vm.wxcOverlayBodyClicked}},"wxc-overlay",_vm.mergeOverlayCfg,false)):_vm._e(),_vm._v(" "),_vm.show?_c("div",{ref:"wxc-mask",staticClass:"wxc-mask",style:_vm.maskStyle,attrs:{hack:_vm.shouldShow}},[_c("div",{style:_vm.contentStyle},[_vm._t("default")],2),_vm._v(" "),_vm.showClose?_c("div",{staticClass:"mask-bottom",style:{width:_vm.width+"px"},on:{click:_vm.closeIconClicked}},[_c("image",{staticClass:"mask-close-icon",attrs:{src:_vm.closeIcon,"aria-label":"关闭"}})]):_vm._e()]):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76df2816",esExports);}}/***/},/* 255 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("wxc-mask",{attrs:{width:_vm.width,height:_vm.height,"aria-hidden":"true","mask-bg-color":"transparent","overlay-opacity":"0.8",show:_vm.show,opacity:_vm.opacity,"show-close":false},on:{wxcMaskSetHidden:_vm.maskOverlayClick}},[_vm.show?_c("slider",{style:{height:_vm.height+"px"},attrs:{"auto-play":"false",index:_vm.index,interval:_vm.interval}},[_vm._l(_vm.imageList,function(v,index){return _c("div",{key:index,style:{height:_vm.height+"px"}},[_c("image",{style:{height:_vm.height+"px",width:_vm.width+"px"},attrs:{resize:"cover",src:v.src}})]);}),_vm._v(" "),_vm.showIndicator?_c("indicator",{staticClass:"indicator",style:_vm.indicatorStyle}):_vm._e()],2):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37c6f35f",esExports);}}/***/},/* 256 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(257);/* unused harmony reexport default *//***/},/* 257 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(77);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_cb34a430_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(260);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(258);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-cb34a430";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_cb34a430_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-loading/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-cb34a430",Component.options);}else{hotAPI.reload("data-v-cb34a430",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 258 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(259);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("2f6b73d0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cb34a430\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cb34a430\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 259 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.loading-container[data-v-cb34a430] {\n  position: relative;\n}\n.loading-need-mask[data-v-cb34a430] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.wxc-loading[data-v-cb34a430] {\n  position: fixed;\n  left: 287px;\n  top: 500px;\n  z-index: 9999;\n}\n.loading-box[data-v-cb34a430] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 20px;\n  width: 175px;\n  height: 175px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.trip-loading[data-v-cb34a430] {\n  background-color: rgba(0, 0, 0, .2);\n}\n.loading-trip-image[data-v-cb34a430] {\n  height: 75px;\n  width: 75px;\n}\n.loading-text[data-v-cb34a430] {\n  color: #ffffff;\n  font-size: 24px;\n  line-height: 30px;\n  height: 30px;\n  margin-top: 8px;\n  text-overflow: ellipsis;\n  width: 140px;\n  text-align: center;\n}\n",""]);// exports
/***/},/* 260 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{class:["loading-container",_vm.showLoading&&_vm.needMask&&"loading-need-mask"],style:_vm.maskStyle,on:{click:_vm.maskClicked}},[_vm.showLoading?_c("div",{staticClass:"wxc-loading",style:{top:_vm.topPosition+"px"}},[_c("div",{class:["loading-box",_vm.loading.class],attrs:{"aria-hidden":true}},[_c("image",{staticClass:"loading-trip-image",attrs:{src:_vm.loadingPic||_vm.loading.url,resize:"contain",quality:"original"}}),_vm._v(" "),_vm.loadingText?_c("text",{staticClass:"loading-text"},[_vm._v(_vm._s(_vm.loadingText))]):_vm._e()])]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cb34a430",esExports);}}/***/},/* 261 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(262);/* unused harmony reexport default *//***/},/* 262 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(79);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_417076c2_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(272);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(263);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-417076c2";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_417076c2_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-lottery-rain/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-417076c2",Component.options);}else{hotAPI.reload("data-v-417076c2",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 263 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(264);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("3604b7b4",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-417076c2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-417076c2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 264 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-lottery-rain[data-v-417076c2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(133, 11, 11, .8);\n}\n",""]);// exports
/***/},/* 265 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_rain_item_vue__=__webpack_require__(80);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0cdbd29c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_rain_item_vue__=__webpack_require__(271);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(266);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-0cdbd29c";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_rain_item_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0cdbd29c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_rain_item_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-lottery-rain/rain-item.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-0cdbd29c",Component.options);}else{hotAPI.reload("data-v-0cdbd29c",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 266 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(267);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("08af77cd",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cdbd29c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./rain-item.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cdbd29c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./rain-item.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 267 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.rain-item[data-v-0cdbd29c] {\n  position: absolute;\n  opacity: 0;\n}\n",""]);// exports
/***/},/* 268 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (immutable) */__webpack_exports__["c"]=showPig;/* harmony export (immutable) */__webpack_exports__["a"]=hidePig;/* harmony export (immutable) */__webpack_exports__["b"]=shakePig;/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var animation=weex.requireModule('animation');var isIos=__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.isIOS();function showPig(ref,duration,callback){ref&&animation.transition(ref,{styles:{transform:'translate(0, -140px)',opacity:1},duration:duration,timingFunction:'ease-in'},function(){callback&&callback();});}function hidePig(ref,duration,callback){ref&&animation.transition(ref,{styles:{transform:'translate(0, 0)',opacity:0},duration:duration,timingFunction:'ease-out'},function(){callback&&callback();});}function shakePig(ref,callback){var duration=isIos?20:10;ref&&animation.transition(ref,{styles:{transform:'rotate(12deg) translate(0, -140px)'},duration:duration,timingFunction:'ease-in'},function(){animation.transition(ref,{styles:{transform:'rotate(0) translate(0, -140px)'},duration:duration,timingFunction:'ease-out'},function(){animation.transition(ref,{styles:{transform:'rotate(-12deg) translate(0, -140px)'},duration:duration,timingFunction:'ease-in'},function(){animation.transition(ref,{styles:{transform:'rotate(0) translate(0, -140px)'},duration:duration,timingFunction:'ease-out'},function(){callback&&callback();});});});});}/***/},/* 269 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var DEFAULT={intervalTime:400,hideAniTime:300,showAniTime:300,showTime:400,randomTime:300,width:241,height:206};/* harmony export (immutable) */__webpack_exports__["a"]=DEFAULT;/***/},/* 270 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__=__webpack_require__(3);/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/var Region={regions:[],isCross:function isCross(region){var regions=this.regions;region.right=region.left+region.width;region.bottom=region.top+region.height;for(var i=0;i<regions.length;i++){var curRegion=regions[i];// 两区域相交
curRegion.right=curRegion.left+curRegion.width;curRegion.bottom=curRegion.top+curRegion.height;if(!(region.left>curRegion.right||region.right<curRegion.left||region.bottom<curRegion.top||region.top>curRegion.bottom)){return true;}}return false;},get:function get(width,height){if(!width||!height){return;}var i=1000;var viewWidth=750;var viewHeight=__WEBPACK_IMPORTED_MODULE_0__utils__["a"/* default */].env.getPageHeight();var wrapWidth=viewWidth-width;var wrapHeight=viewHeight-height-140;wrapHeight=wrapHeight<0?0:wrapHeight;wrapWidth=wrapWidth<0?0:wrapWidth;var region={left:'-9999px',top:'-9999px',width:width+'px',height:height+'px'};while(i--){region.left=Math.round(Math.random()*wrapWidth)+'px';region.top=Math.round(Math.random()*wrapHeight+height)+'px';if(!this.isCross(region)){this.add(region);return region;}}},buildRandom:function buildRandom(){return new Date().getTime()+'_'+parseInt(Math.random()*1000000);},add:function add(region){var regions=this.regions;region.id=this.buildRandom();regions.push(region);},remove:function remove(region){var regions=this.regions;if(!region)return;for(var i=0;i<regions.length;i++){if(region.id===regions[i].id){regions.splice(i,1);}}}};/* harmony default export */__webpack_exports__["a"]=Region;/***/},/* 271 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.showItem&&_vm.src?_c("image",{ref:"rain-item-"+_vm.rainId,staticClass:"rain-item",style:_vm.pos,attrs:{src:_vm.src},on:{click:_vm.caught}}):_vm._e();};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0cdbd29c",esExports);}}/***/},/* 272 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-lottery-rain",style:_vm.wrapStyle},_vm._l(_vm.picList,function(src,i){return _c("rain-item",{key:"i",ref:"rain-item-"+i,refInFor:true,attrs:{src:src,"rain-id":i},on:{wxcLotteryRainCaught:_vm.wxcLotteryRainCaught}});}),1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-417076c2",esExports);}}/***/},/* 273 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(82);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1756c908_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(276);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(274);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-1756c908";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1756c908_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-minibar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-1756c908",Component.options);}else{hotAPI.reload("data-v-1756c908",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 274 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(275);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("22926f1b",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1756c908\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1756c908\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 275 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-minibar[data-v-1756c908] {\n  width: 750px;\n  height: 90px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.left[data-v-1756c908] {\n  width: 180px;\n  padding-left: 32px;\n}\n.middle-title[data-v-1756c908] {\n  font-size: 30px;\n  color: #ffffff;\n  height: 36px;\n  line-height: 34px;\n}\n.right[data-v-1756c908] {\n  width: 180px;\n  padding-right: 32px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.left-button[data-v-1756c908] {\n  width: 21px;\n  height: 36px;\n}\n.right-button[data-v-1756c908] {\n  width: 32px;\n  height: 32px;\n}\n.icon-text[data-v-1756c908] {\n  font-size: 28px;\n  color: #ffffff;\n}\n",""]);// exports
/***/},/* 276 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.show?_c("div",{staticClass:"wxc-minibar",style:_vm.newBarStyle},[_c("div",{staticClass:"left",attrs:{"aria-label":"返回",accessible:true},on:{click:_vm.leftButtonClicked}},[_vm._t("left",[_vm.leftButton&&!_vm.leftText?_c("image",{staticClass:"left-button",attrs:{src:_vm.leftButton}}):_vm._e(),_vm._v(" "),_vm.leftText?_c("text",{staticClass:"icon-text",style:{color:_vm.textColor}},[_vm._v(_vm._s(_vm.leftText))]):_vm._e()])],2),_vm._v(" "),_vm._t("middle",[_c("text",{staticClass:"middle-title",style:{color:_vm.textColor}},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c("div",{staticClass:"right",on:{click:_vm.rightButtonClicked}},[_vm._t("right",[_vm.rightButton&&!_vm.rightText?_c("image",{staticClass:"right-button",attrs:{src:_vm.rightButton,"aria-hidden":true}}):_vm._e(),_vm._v(" "),_vm.rightText?_c("text",{staticClass:"icon-text",style:{color:_vm.textColor}},[_vm._v(_vm._s(_vm.rightText))]):_vm._e()])],2)],2):_vm._e();};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1756c908",esExports);}}/***/},/* 277 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(278);/* unused harmony reexport default *//***/},/* 278 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(83);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_49c04fe7_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(282);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(279);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-49c04fe7";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_49c04fe7_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-noticebar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-49c04fe7",Component.options);}else{hotAPI.reload("data-v-49c04fe7",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 279 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(280);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("e4f53d6e",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49c04fe7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49c04fe7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 280 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-noticebar[data-v-49c04fe7] {\n  width: 750px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 24px;\n  background-color: #FFF7D6;\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  border-color: #FFEEAE;\n  border-style: solid;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.noticebar-content[data-v-49c04fe7] {\n  color: #EE9900;\n  font-size: 26px;\n  line-height: 36px;\n  width: 592px;\n  text-overflow: ellipsis;\n}\n.more-click-content[data-v-49c04fe7] {\n  width: 64px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mode-ICON[data-v-49c04fe7],\n.type-ICON[data-v-49c04fe7] {\n  width: 32px;\n  height: 32px;\n}\n",""]);// exports
/***/},/* 281 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/**
 * Created by Tw93 on 2016/10/29.
 *//* harmony default export */__webpack_exports__["a"]={closeIcon:'https://gw.alicdn.com/tfs/TB1THvhpwMPMeJjy1XcXXXpppXa-32-32.png',linkIcon:'https://gw.alicdn.com/tfs/TB1utlZpwMPMeJjy1XdXXasrXXa-32-32.png',infoIcon:'https://gw.alicdn.com/tfs/TB1xdlZpwMPMeJjy1XdXXasrXXa-32-32.png',warnIcon:'https://gw.alicdn.com/tfs/TB1TCvhpwMPMeJjy1XcXXXpppXa-32-32.png',successIcon:'https://gw.alicdn.com/tfs/TB12Em8pwMPMeJjy1XbXXcwxVXa-32-32.png',errorIcon:'https://gw.alicdn.com/tfs/TB1UCvhpwMPMeJjy1XcXXXpppXa-32-32.png',questionIcon:'https://gw.alicdn.com/tfs/TB1vJlZpwMPMeJjy1XdXXasrXXa-32-32.png',timeIcon:'https://gw.alicdn.com/tfs/TB1eSzhpwMPMeJjy1XcXXXpppXa-30-30.png',redbag:'https://gw.alicdn.com/tfs/TB1dCzhpwMPMeJjy1XcXXXpppXa-32-32.png'};/***/},/* 282 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm.show?_c("div",{staticClass:"wxc-noticebar",attrs:{accessible:true,"aria-label":_vm.notice},on:{click:_vm.noticeBarClicked}},[_vm.typeIcon?_c("image",{staticClass:"type-ICON",attrs:{src:_vm.typeIcon}}):_vm._e(),_vm._v(" "),_c("text",{staticClass:"noticebar-content",style:{width:_vm.contentWidth+"px",lines:_vm.lines}},[_vm._v(_vm._s(_vm.notice))]),_vm._v(" "),_vm.modeIcon?_c("div",{staticClass:"more-click-content",attrs:{mode:_vm.mode},on:{click:_vm.noticeIconClicked}},[_c("image",{staticClass:"mode-ICON",attrs:{src:_vm.modeIcon}})]):_vm._e()]):_vm._e();};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-49c04fe7",esExports);}}/***/},/* 283 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(284);/* unused harmony reexport default *//***/},/* 284 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(84);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_47d288a8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(288);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(285);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-47d288a8";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_47d288a8_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-page-calendar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-47d288a8",Component.options);}else{hotAPI.reload("data-v-47d288a8",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 285 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(286);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("639a37d8",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47d288a8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47d288a8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 286 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-page-calendar[data-v-47d288a8] {\n  position: fixed;\n  width: 750px;\n  color: #333333;\n  background-color: #ffffff;\n}\n.flex-item[data-v-47d288a8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.calendar-weekday[data-v-47d288a8] {\n  height: 60px;\n  background-color: #ffffff;\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  border-color: #e2e2e2;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weekday-text[data-v-47d288a8] {\n  color: #000000;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 24px;\n  text-align: center;\n}\n.calendar-list[data-v-47d288a8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.month-text[data-v-47d288a8] {\n  font-size: 32px;\n  height: 60px;\n  line-height: 60px;\n  width: 750px;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f2f3f4;\n}\n.calendar-row[data-v-47d288a8] {\n  height: 140px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background-color: #ffffff;\n  border-bottom-width: 1px;\n  border-color: #f2f3f4;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.row-item[data-v-47d288a8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 140px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.iphone-x[data-v-47d288a8] {\n  height: 68px;\n}\n.calendar-note[data-v-47d288a8] {\n  height: 36px;\n  line-height: 36px;\n  font-size: 24px;\n  color: #000000;\n  text-align: center;\n}\n.calendar-day[data-v-47d288a8] {\n  height: 48px;\n  line-height: 48px;\n  font-size: 36px;\n  color: #000000;\n  text-align: center;\n}\n.calendar-ext[data-v-47d288a8] {\n  height: 36px;\n  line-height: 36px;\n  color: #999999;\n  text-align: center;\n  font-size: 24px;\n  text-overflow: ellipsis;\n}\n.calendar-holiday[data-v-47d288a8] {\n  color: #FF5000;\n}\n.calendar-rest[data-v-47d288a8] {\n  color: #FF5000;\n}\n.item-row-selected[data-v-47d288a8] {\n  color: #ffffff;\n  background-color: #FFC900;\n  text-align: center;\n}\n.item-text-selected[data-v-47d288a8] {\n  color: #3d3d3d;\n  text-align: center;\n}\n.calendar-disabled[data-v-47d288a8] {\n  color: #CCCCCC;\n}\n.cell-disabled[data-v-47d288a8] {\n  background-color: #FBFBFB;\n}\n.calendar-day-include[data-v-47d288a8] {\n  background-color: #FFF7D6;\n}\n",""]);// exports
/***/},/* 287 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* unused harmony export _getTraditionalHoliday *//* unused harmony export _isDate *//* unused harmony export _checkHash *//* unused harmony export getTime *//* unused harmony export _isInRange *//* unused harmony export _isInSelectRange *//* unused harmony export _fixNum *//* unused harmony export _isWeekend *//* unused harmony export _isToday *//* unused harmony export _getMonthDays *//* unused harmony export _getPadding *//* unused harmony export _unique *//* harmony export (immutable) */__webpack_exports__["b"]=getToDay;/* unused harmony export getWeekRows *//* harmony export (immutable) */__webpack_exports__["a"]=generateDateCell;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/// 国际节日
var GLOBAL_HOLIDAY={'01-01':'元旦','02-14':'情人','05-01':'劳动','06-01':'儿童','10-01':'国庆','12-25':'圣诞'};/* unused harmony export GLOBAL_HOLIDAY */// 传统节日
var TRADITIONAL_HOLIDAY={'除夕':['2015-02-18','2016-02-07','2017-01-27','2018-02-15','2019-02-04','2020-01-24'],'春节':['2015-02-19','2016-02-08','2017-01-28','2018-02-16','2019-02-05','2020-01-25'],'元宵':['2015-03-05','2016-02-22','2017-02-11','2018-03-02','2019-02-19','2020-02-08'],'清明':['2015-04-05','2016-04-04','2017-04-04','2018-04-05','2019-04-05','2020-04-04'],'端午':['2015-06-20','2016-06-09','2017-05-30','2018-06-18','2019-06-07','2020-06-25'],'中秋':['2015-09-27','2016-09-15','2017-10-04','2018-09-24','2019-09-13','2020-10-01'],'重阳':['2015-10-21','2016-10-09','2017-10-28','2018-10-17','2019-10-07','2020-10-25']};// 放假日
var REST_DAYS=['2017-10-01','2017-10-02','2017-10-03','2017-10-04','2017-10-05','2017-10-06','2017-10-07','2017-10-08'];// 工作日
var WORK_DAYS=['2017-09-30'];function _getTraditionalHoliday(){var HOLIDAY_TEMP={};var keys=Object.keys(TRADITIONAL_HOLIDAY);keys.forEach(function(k){var arr=TRADITIONAL_HOLIDAY[k];arr.forEach(function(i){HOLIDAY_TEMP[i]=k;});});return HOLIDAY_TEMP;}function _isDate(obj){var type=obj===null?String(obj):{}.toString.call(obj)||'object';return type==='[object date]';}/**
 * 检测Hash
 *
 * @method _checkHash
 * @private
 */function _checkHash(url,hash){return url&&url.match(/#/)&&url.replace(/^.*#/,'')===hash;}/**
 * 获取当前日期的毫秒数
 * @method getTime
 * @param {String} date
 * @return {Number}
 */function getTime(date){if(_isDate(date)){return new Date(date).getTime();}else{try{return new Date(date.replace(/-/g,'/')).getTime();}catch(e){return 0;}}}function _isInRange(range,date){var start=getTime(range[0]);var end=getTime(range[1]);var d=getTime(date);return start<=d&&end>=d;}function _isInSelectRange(range,date){var start=getTime(range[0]);var end=getTime(range[1]);var d=getTime(date);return start<d&&end>d;}function _fixNum(num){return(num<10?'0':'')+num;}/**
 * 是否是周末
 * @method isWeekend
 * @param {String} date
 * @return {Boolean}
 */function _isWeekend(date){var day=new Date(date.replace(/-/g,'/')).getDay();return day===0||day===6;}/**
 * 是否是今天
 * @method isToday
 * @param {String} date
 * @return {Boolean}
 */function _isToday(today,date){return getTime(today)===getTime(date);}/**
 * 检查是否是闰年
 * @method _checkLeapYear
 * @param {Number} y 年份
 * @param {Date} t today
 * @protected
 */function _getMonthDays(y,t){var MONTH_DAYS=[31,28,31,30,31,30,31,31,30,31,30,31];var year=y||t.getFullYear();var isLeapYear=false;if(year%100){isLeapYear=!(year%4);}else{isLeapYear=!(year%400);}if(isLeapYear){MONTH_DAYS[1]=29;}else{MONTH_DAYS[1]=28;}return MONTH_DAYS;}/**
 * 当月1号前面有多少空格
 * @method _getPadding
 * @protected
 */function _getPadding(year,month){var date=new Date(year+'/'+month+'/1');return date.getDay();}function _unique(array){return Array.prototype.filter.call(array,function(item,index){return array.indexOf(item)===index;});}function getToDay(){return new Date().getFullYear()+'-'+_fixNum(new Date().getMonth()+1)+'-'+_fixNum(new Date().getDate());}function getWeekRows(y,m,today,dateRange,departDate,arriveDate,selectedNote,descList){var monthDays=_getMonthDays(y,today);var padding=_getPadding(y,m,7);var num=monthDays[m-1]+padding;var rows=Math.ceil(num/7);var remain=num%7;var rowsData=[];for(var i=1;i<=rows;i++){var cells=[];for(var j=1;j<=7;j++){var cell={};// 前后空格
if(i===1&&j<=padding||remain&&i===rows&&j>remain){cell.isEmpty=true;}else{(function(){var d=(i-1)*7+j-padding;var date=y+'-'+_fixNum(m)+'-'+_fixNum(d);var cls=[];var ref='';var cellClass=[];var isInRange=_isInRange(dateRange,date);var disabled=false;var global=_fixNum(m)+'-'+_fixNum(d);var note='';var ext='';var isSelected=false;if(descList&&descList.length>0){var nowDesc=descList.filter(function(item){return item.date===date;});if(nowDesc&&nowDesc.length>0){ext=nowDesc[0].value;if(nowDesc[0].emphasize){cls.push('calendar-holiday');}}}// 国际节日
if(GLOBAL_HOLIDAY[global]){note=GLOBAL_HOLIDAY[global];cls.push('calendar-holiday');}var tHoliday=_getTraditionalHoliday()[date];// 传统节日
if(tHoliday){note=tHoliday;cls.push('calendar-holiday');}// 放假日
if(REST_DAYS.indexOf(date)>-1){cls.push('calendar-holiday');}// 工作日
if(WORK_DAYS.indexOf(date)>-1){cls.push('calendar-work');}// 周末
if(_isWeekend(date)){cls.push('calendar-holiday');}// 今天
if(_isToday(today,date)){cls.push('calendar-today');note='今天';}// 不在日期范围内
if(!isInRange){disabled=true;}if(disabled){cls=[];cls.push('calendar-disabled');cellClass.push('cell-disabled');}if(!ext&&disabled&&isInRange){ext='不可选';}if(departDate===date||arriveDate===date){note=departDate===date?selectedNote[0]:selectedNote[1];ref=departDate===date?'departDate':'arriveDate';if(departDate===arriveDate&&selectedNote.length>=3){note=selectedNote[2];}isSelected=true;cls.push('item-text-selected');cellClass.push('item-row-selected');}if(departDate&&arriveDate&&_isInSelectRange([departDate,arriveDate],date)){cellClass.push('calendar-day-include');}cell={isSelected:isSelected,isEmpty:false,ref:ref,cls:_unique(cls).join(' '),cellClass:_unique(cellClass).join(' '),note:note,date:date,ext:ext,disabled:disabled,text:d};})();}cells.push(cell);}rowsData.push(cells);}return rowsData;}function generateDateCell(_ref){var range=_ref.range,today=_ref.today,departDate=_ref.departDate,arriveDate=_ref.arriveDate,selectedNote=_ref.selectedNote,descList=_ref.descList;var start=new Date(range[0].replace(/-/g,'/'));var end=new Date(range[1].replace(/-/g,'/'));var startYear=start.getFullYear();var startMonth=start.getMonth()+1;var endYear=end.getFullYear();var endMonth=end.getMonth()+1;var l=(endYear-startYear)*12+endMonth-startMonth+1;var y=startYear;var n=startMonth;var months=[];for(var i=0;i<l;i++){if(n>12){n=1;y++;}months.push.apply(months,[{title:y+'-'+_fixNum(n)}].concat(_toConsumableArray(getWeekRows(y,n,today,range,departDate,arriveDate,selectedNote,descList))));n++;}return months;}/***/},/* 288 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"pageCalendar",staticClass:"wxc-page-calendar",style:_vm.calendarExtendStyle},[_c("wxc-minibar",_vm._b({attrs:{show:_vm.showTitle,"use-default-return":false},on:{wxcMinibarLeftButtonClicked:_vm.minibarLeftButtonClick}},"wxc-minibar",_vm.minibarCfg,false)),_vm._v(" "),_vm.isShow?_c("div",{staticClass:"calendar-weekday"},_vm._l(["日","一","二","三","四","五","六"],function(week,k){return _c("text",{key:k,staticClass:"flex-item weekday-text",attrs:{"aria-label":"周"+week}},[_vm._v(_vm._s(week))]);}),0):_vm._e(),_vm._v(" "),_vm.isShow?_c("list",{staticClass:"calendar-list"},[_vm._l(_vm.monthsArray,function(month,index){return _c("cell",{key:index,class:[!month.title&&"calendar-row"]},[month.title?_c("text",{staticClass:"month-text"},[_vm._v(_vm._s(month.title))]):_vm._l(month,function(cell,rowIndex){return _c("div",{key:index+"-"+rowIndex,ref:cell.ref,refInFor:true,class:["row-item",cell.cellClass],style:cell.isSelected?_vm.selectedCellStyle:{},attrs:{accessible:true,"aria-label":(cell.text?cell.text:"")+","+(cell.note?cell.note:"")+","+(cell.ext?cell.ext:"")},on:{click:function click($event){return _vm.onClickDate(cell);}}},[_c("text",{class:["calendar-note",cell.cls],style:cell.isSelected?_vm.selectedTextStyle:{}},[_vm._v(_vm._s(cell.note))]),_vm._v(" "),_c("text",{class:["calendar-day",cell.cls],style:cell.isSelected?_vm.selectedTextStyle:{}},[_vm._v(_vm._s(cell.text))]),_vm._v(" "),_c("text",{class:["calendar-ext",cell.cls],style:cell.isSelected?_vm.selectedTextStyle:{}},[_vm._v(_vm._s(cell.ext))])]);})],2);}),_vm._v(" "),_vm.isIPhoneX?_c("cell",{staticClass:"iphone-x"}):_vm._e()],2):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-47d288a8",esExports);}}/***/},/* 289 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(290);/* unused harmony reexport default *//***/},/* 290 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(85);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_cfd471a6_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(291);var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_cfd471a6_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-pan-item/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-cfd471a6",Component.options);}else{hotAPI.reload("data-v-cfd471a6",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 291 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.supportAndroid?_c("div",{ref:"wxc-pan-item",on:{horizontalpan:_vm.dispatchPan,appear:_vm.onItemAppear,disappear:_vm.onItemDisAppear,click:_vm.itemClicked}},[_vm._t("default")],2):_c("div",{ref:"wxc-pan-item",on:{click:_vm.itemClicked}},[_vm._t("default")],2)]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cfd471a6",esExports);}}/***/},/* 292 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(293);/* unused harmony reexport default *//***/},/* 293 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(86);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d1e1e7e8_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(294);var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d1e1e7e8_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-part-loading/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-d1e1e7e8",Component.options);}else{hotAPI.reload("data-v-d1e1e7e8",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 294 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.show?_c("image",{style:_vm.loadingStyle,attrs:{src:_vm.PART,resize:"contain",quality:"original"}}):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d1e1e7e8",esExports);}}/***/},/* 295 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(296);/* unused harmony reexport default *//***/},/* 296 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(87);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_12ac3c11_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(299);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(297);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-12ac3c11";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_12ac3c11_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-popover/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-12ac3c11",Component.options);}else{hotAPI.reload("data-v-12ac3c11",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 297 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(298);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("366cbf94",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12ac3c11\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12ac3c11\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 298 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wrapper[data-v-12ac3c11]{\n  z-index: 999;\n}\n.g-cover[data-v-12ac3c11] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}\n.g-popover[data-v-12ac3c11] {\n  position: fixed;\n  padding:15px;\n  z-index: 10;\n}\n.u-popover-arrow[data-v-12ac3c11] {\n  position: absolute;\n  border-radius: 4px;\n  width: 30px;\n  height: 30px;\n  background-color: #ffffff;\n}\n.u-popover-inner[data-v-12ac3c11] {\n  border-radius: 10px;\n  background-color: #ffffff;\n}\n.i-btn[data-v-12ac3c11] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-bottom-width: 1px;\n  border-bottom-color: #dddddd;\n}\n.i-btn-noborder[data-v-12ac3c11] {\n  border-bottom-color: #ffffff;\n}\n.btn-icon[data-v-12ac3c11] {\n  width: 32px;\n  height: 32px;\n  margin-right: 16px;\n}\n.btn-text[data-v-12ac3c11] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 80px;\n  font-size: 30px;\n  line-height: 80px;\n}\n.text-align-center[data-v-12ac3c11] {\n  text-align: center;\n}\n",""]);// exports
/***/},/* 299 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wrapper"},[_vm.show?_c("div",{ref:"wxc-cover",staticClass:"g-cover",style:_vm.coverStyle,on:{click:_vm.hideAction}}):_vm._e(),_vm._v(" "),_vm.show&&_vm.buttons.length?_c("div",{ref:"wxc-popover",staticClass:"g-popover",style:_vm.contentStyle},[_c("div",{staticClass:"u-popover-arrow",style:_vm.arrowStyle}),_vm._v(" "),_c("div",{staticClass:"u-popover-inner"},_vm._l(_vm.buttons,function(item,i){return _c("div",{key:i,class:["i-btn",i===_vm.buttons.length-1?"i-btn-noborder":""],on:{click:function click($event){return _vm.wxcButtonClicked(i,item.key);}}},[item.icon?_c("image",{staticClass:"btn-icon",attrs:{src:item.icon}}):_vm._e(),_vm._v(" "),_c("text",{staticClass:"btn-text",style:_vm.textStyle},[_vm._v(_vm._s(item.text))])]);}),0)]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-12ac3c11",esExports);}}/***/},/* 300 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(301);/* unused harmony reexport default *//***/},/* 301 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(88);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c8b8bcd0_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(304);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(302);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-c8b8bcd0";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_c8b8bcd0_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-popup/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-c8b8bcd0",Component.options);}else{hotAPI.reload("data-v-c8b8bcd0",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 302 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(303);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("744a8310",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8b8bcd0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8b8bcd0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 303 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-popup[data-v-c8b8bcd0] {\n  position: fixed;\n  width: 750px;\n}\n.top[data-v-c8b8bcd0] {\n  left: 0;\n  right: 0;\n}\n.bottom[data-v-c8b8bcd0] {\n  left: 0;\n  right: 0;\n}\n.left[data-v-c8b8bcd0] {\n  bottom: 0;\n  top: 0;\n}\n.right[data-v-c8b8bcd0] {\n  bottom: 0;\n  top: 0;\n}\n\n",""]);// exports
/***/},/* 304 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_c("div",{on:{touchend:_vm.handleTouchEnd}},[_vm.show?_c("wxc-overlay",_vm._b({ref:"overlay",attrs:{show:_vm.haveOverlay&&_vm.isOverShow},on:{wxcOverlayBodyClicking:_vm.wxcOverlayBodyClicking}},"wxc-overlay",_vm.overlayCfg,false)):_vm._e()],1),_vm._v(" "),_vm.show?_c("div",{ref:"wxc-popup",class:["wxc-popup",_vm.pos],style:_vm.padStyle,attrs:{height:_vm._height,hack:_vm.isNeedShow},on:{click:function click(){}}},[_vm._t("default")],2):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c8b8bcd0",esExports);}}/***/},/* 305 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(306);/* unused harmony reexport default *//***/},/* 306 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(89);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_10d76697_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(309);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(307);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-10d76697";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_10d76697_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-progress/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-10d76697",Component.options);}else{hotAPI.reload("data-v-10d76697",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 307 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(308);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("81531196",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10d76697\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10d76697\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 308 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-progress[data-v-10d76697] {\n  background-color: #f2f3f4;\n}\n.progress[data-v-10d76697] {\n  position: absolute;\n  background-color: #FFC900;\n}\n",""]);// exports
/***/},/* 309 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-progress",style:_vm.runWayStyle,attrs:{accessible:true,"aria-label":"进度为百分之"+_vm.value}},[_c("div",{staticClass:"progress",style:_vm.progressStyle})]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-10d76697",esExports);}}/***/},/* 310 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(311);/* unused harmony reexport default *//***/},/* 311 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(90);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5446a3b2_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(321);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(312);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-5446a3b2";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_5446a3b2_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-radio/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-5446a3b2",Component.options);}else{hotAPI.reload("data-v-5446a3b2",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 312 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(313);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("1e81699c",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5446a3b2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5446a3b2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 313 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]);// exports
/***/},/* 314 *//***/function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(315),__esModule:true};/***/},/* 315 *//***/function(module,exports,__webpack_require__){var core=__webpack_require__(5);var $JSON=core.JSON||(core.JSON={stringify:JSON.stringify});module.exports=function stringify(it){// eslint-disable-line no-unused-vars
return $JSON.stringify.apply($JSON,arguments);};/***/},/* 316 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_item_vue__=__webpack_require__(91);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_043ff4ce_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_item_vue__=__webpack_require__(320);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(317);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-043ff4ce";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_item_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_043ff4ce_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_item_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-radio/item.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-043ff4ce",Component.options);}else{hotAPI.reload("data-v-043ff4ce",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 317 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(318);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("50da20a4",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-043ff4ce\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./item.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-043ff4ce\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./item.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 318 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.radio[data-v-043ff4ce] {\n  width: 36px;\n  height: 36px;\n}\n.title-text[data-v-043ff4ce] {\n  font-size: 30px;\n  height: 40px;\n  line-height: 40px;\n}\n",""]);// exports
/***/},/* 319 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var CHECKED='https://gw.alicdn.com/tfs/TB1Y9vlpwMPMeJjy1XcXXXpppXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["a"]=CHECKED;var DISABLED='https://gw.alicdn.com/tfs/TB1PtN3pwMPMeJjy1XdXXasrXXa-72-72.png';/* harmony export (immutable) */__webpack_exports__["b"]=DISABLED;/***/},/* 320 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("wxc-cell",{attrs:{"has-top-border":_vm.hasTopBorder,"cell-style":{backgroundColor:_vm.backgroundColor},accessible:true,"aria-label":_vm.title+",状态为"+(_vm.checked?"已选中":"未选中")+","+(_vm.disabled?"不可更改":"")},on:{wxcCellClicked:_vm.wxcCellClicked}},[_c("text",{staticClass:"title-text",style:{color:_vm.color},attrs:{slot:"title"},slot:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm.radioIcon?_c("image",{staticClass:"radio",attrs:{slot:"value",src:_vm.radioIcon},slot:"value"}):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-043ff4ce",esExports);}}/***/},/* 321 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",_vm._l(_vm.updateList,function(item,i){return _c("wxc-radio",_vm._b({key:i,attrs:{config:_vm.config},on:{wxcRadioItemChecked:function wxcRadioItemChecked($event){return _vm.wxcRadioItemChecked(i,$event);}}},"wxc-radio",item,false));}),1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5446a3b2",esExports);}}/***/},/* 322 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(323);/* unused harmony reexport default *//***/},/* 323 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(92);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1b3e4234_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(326);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(324);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-1b3e4234";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1b3e4234_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-refresher/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-1b3e4234",Component.options);}else{hotAPI.reload("data-v-1b3e4234",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 324 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(325);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("4554a8aa",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b3e4234\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b3e4234\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 325 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-refresher[data-v-1b3e4234] {\n  height: 140px;\n  width: 750px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  /* flex-wrap: nowrap; */\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 50px;\n}\n.cycle-container[data-v-1b3e4234] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n}\n.u-cover[data-v-1b3e4234] {\n  position: absolute;\n  width: 30px;\n  height: 60px;\n  top: 0;\n  background-color: #ffffff;\n  overflow: hidden;\n  right: 0;\n}\n.c1[data-v-1b3e4234] {\n  z-index: 1;\n}\n.c2[data-v-1b3e4234] {\n  z-index: 2;\n  -webkit-transform-origin: left center;\n          transform-origin: left center;\n  -webkit-transform: rotateZ(0deg);\n          transform: rotateZ(0deg);\n}\n.u-cover-cycle[data-v-1b3e4234] {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  right: 0;\n  top: 0;\n  /* box-sizing: border-box; */\n  border-width: 2px;\n  border-color: #666666;\n  border-style: solid;\n  border-radius: 30px;\n  opacity: 0;\n}\n.cover1[data-v-1b3e4234] {\n  opacity: 1;\n}\n.indicator[data-v-1b3e4234] {\n  margin-right: 20px;\n  height: 60px;\n  width: 60px;\n  color: #666666;\n}\n.arrow-down[data-v-1b3e4234] {\n  position: relative;\n  top: 15px;\n  left: -45px;\n  width: 30px;\n  height: 30px;\n}\n.u-txt[data-v-1b3e4234] {\n  font-size: 24px;\n  line-height: 40px;\n  color: #999999;\n  margin-top: 10px;\n  margin-left: 10px;\n  height: 40px;\n  lines: 1;\n}\n",""]);// exports
/***/},/* 326 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("refresh",{staticClass:"wxc-refresher",attrs:{display:_vm.refreshing?"show":"hide"},on:{refresh:_vm.onRefresh,pullingdown:_vm.onPullingDown}},[_vm.newStyleFlag?_c("div",{ref:"cycle",staticClass:"cycle-container"},[_c("div",{ref:"cover1",staticClass:"u-cover c1"},[_c("div",{staticClass:"u-cover-cycle cover1"})]),_vm._v(" "),_c("div",{ref:"cover2",staticClass:"u-cover c2"},[_c("div",{ref:"cover-cycle",staticClass:"u-cover-cycle"})])]):_vm._e(),_vm._v(" "),_vm.newStyleFlag?_c("image",{ref:"arrow",staticClass:"arrow-down",attrs:{src:_vm.ICON_ARROW_DOWN,resize:"contain"}}):_c("loading-indicator",{staticClass:"indicator"}),_vm._v(" "),_c("text",{staticClass:"u-txt",style:{width:_vm.textWidth+"px"}},[_vm._v(_vm._s(_vm.refresherText))])],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1b3e4234",esExports);}}/***/},/* 327 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(328);/* unused harmony reexport default *//***/},/* 328 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(93);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d3b8ad2c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(343);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(329);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-d3b8ad2c";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_d3b8ad2c_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-rich-text/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-d3b8ad2c",Component.options);}else{hotAPI.reload("data-v-d3b8ad2c",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 329 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(330);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("0b390989",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3b8ad2c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d3b8ad2c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 330 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-rich-text[data-v-d3b8ad2c] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.default-text[data-v-d3b8ad2c] {\n  color: #A5A5A5;\n  font-size: 24px;\n  line-height: 30px;\n}\n",""]);// exports
/***/},/* 331 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(332);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("2f0e315a",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-516245bf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-text.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-516245bf\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-text.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 332 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-text[data-v-516245bf] {\n  font-size: 24px;\n  color: #3d3d3d;\n}\n.black[data-v-516245bf] {\n  color: #3D3D3D;\n}\n.yellow[data-v-516245bf] {\n  color: #EE9900;\n}\n.blue[data-v-516245bf] {\n  color: #30A0FF;\n}\n.gray[data-v-516245bf] {\n  color: #A5A5A5;\n}\n.red[data-v-516245bf] {\n  color: #FF5000;\n}\n.margin-text[data-v-516245bf] {\n  margin-right: 6px;\n}\n",""]);// exports
/***/},/* 333 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("text",{class:["wxc-text",_vm.textTheme,_vm.hasTextMargin?"margin-text":""],style:_vm.themeStyle},[_vm._v(_vm._s(_vm.textValue))]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-516245bf",esExports);}}/***/},/* 334 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_link_vue__=__webpack_require__(95);/* empty harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_573afbe8_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_link_vue__=__webpack_require__(335);var disposed=false;var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=null;/* scopeId */var __vue_scopeId__=null;/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_link_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_573afbe8_hasScoped_false_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_link_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-rich-text/wxc-rich-text-link.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-573afbe8",Component.options);}else{hotAPI.reload("data-v-573afbe8",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["default"]=Component.exports;/***/},/* 335 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{on:{click:_vm.onLinkClick}},[_c("wxc-rich-text-text",{attrs:{"text-value":_vm.linkValue,"has-text-margin":_vm.hasTextMargin,"text-style":_vm.linkStyle?_vm.linkStyle:_vm.defObj,"text-theme":_vm.linkTheme?_vm.linkTheme:"black"}})],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-573afbe8",esExports);}}/***/},/* 336 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_icon_vue__=__webpack_require__(96);/* empty harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6138b70b_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_icon_vue__=__webpack_require__(339);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(337);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-6138b70b";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_wxc_rich_text_icon_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_6138b70b_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_wxc_rich_text_icon_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-rich-text/wxc-rich-text-icon.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-6138b70b",Component.options);}else{hotAPI.reload("data-v-6138b70b",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["default"]=Component.exports;/***/},/* 337 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(338);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("9ee17abe",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6138b70b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-icon.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6138b70b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-icon.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 338 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-image[data-v-6138b70b] {\n  width: 90px;\n  height: 24px;\n  margin-right: 6px;\n}\n",""]);// exports
/***/},/* 339 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("image",{staticClass:"wxc-image",style:{width:_vm.computedStyle.width,height:_vm.computedStyle.height},attrs:{src:_vm.iconSrc,"aria-hidden":true},on:{load:_vm.onLoad}});};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6138b70b",esExports);}}/***/},/* 340 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(341);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("b9212154",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4510f178\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-tag.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4510f178\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./wxc-rich-text-tag.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 341 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-tag[data-v-4510f178] {\n  border-color: #3d3d3d;\n  border-width: 2px;\n  border-radius: 4px;\n  margin-right: 6px;\n  background-color: transparent;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 26px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.tag-text[data-v-4510f178] {\n  font-size: 20px;\n  color: #3d3d3d;\n}\n.black[data-v-4510f178] {\n  color: #3D3D3D;\n}\n.yellow[data-v-4510f178] {\n  color: #EE9900;\n}\n.blue[data-v-4510f178] {\n  color: #30A0FF;\n}\n.gray[data-v-4510f178] {\n  color: #A5A5A5;\n}\n.red[data-v-4510f178] {\n  color: #FF5000;\n}\n.border-black[data-v-4510f178] {\n  border-color: #A5A5A5;\n}\n.border-yellow[data-v-4510f178] {\n  border-color: #EE9900;\n}\n.border-blue[data-v-4510f178] {\n  border-color: #30A0FF;\n}\n.border-gray[data-v-4510f178] {\n  border-color: #A5A5A5;\n}\n.border-red[data-v-4510f178] {\n  border-color: #FF5000;\n}\n",""]);// exports
/***/},/* 342 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{class:["wxc-tag","border-"+_vm.tagTheme],style:_vm.newTheme.divStyle},[_c("text",{class:["tag-text",_vm.tagTheme],style:_vm.newTheme.textStyle},[_vm._v(_vm._s(_vm.tagValue))])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4510f178",esExports);}}/***/},/* 343 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.isNotEmptyArray?_c("div",{staticClass:"wxc-rich-text"},_vm._l(_vm.configList,function(v){return _c("div",[v.type=="text"&&v.value?_c("wxc-rich-text-text",{attrs:{"text-value":v.value,"text-style":v.style,"has-text-margin":_vm.hasTextMargin,"text-theme":v.theme}}):_vm._e(),_vm._v(" "),v.type=="link"&&v.href&&v.value?_c("wxc-rich-text-link",{attrs:{"link-value":v.value,"link-href":v.href,"link-style":v.style,"has-text-margin":_vm.hasTextMargin,"link-theme":v.theme},on:{wxcRichTextLinkClick:_vm.linkClick}}):_vm._e(),_vm._v(" "),v.type=="icon"&&v.src?_c("wxc-rich-text-icon",{attrs:{"icon-src":v.src,"icon-style":v.style}}):_vm._e(),_vm._v(" "),v.type=="tag"&&v.value?_c("wxc-rich-text-tag",{attrs:{"tag-value":v.value,"tag-theme":v.theme,"tag-style":v.style}}):_vm._e()],1);}),0):_vm._e(),_vm._v(" "),_vm.isString?_c("text",{staticClass:"default-text"},[_vm._v(_vm._s(_vm.configList))]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d3b8ad2c",esExports);}}/***/},/* 344 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(345);/* unused harmony reexport default *//***/},/* 345 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(99);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3533f855_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(348);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(346);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-3533f855";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_3533f855_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-simple-flow/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-3533f855",Component.options);}else{hotAPI.reload("data-v-3533f855",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 346 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(347);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("79b61ed9",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3533f855\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3533f855\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 347 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.flex-row[data-v-3533f855] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.full-rest[data-v-3533f855] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.root[data-v-3533f855] {\n  padding-top: 28px;\n  padding-bottom: 24px;\n  background-color: #ffffff;\n}\n.content[data-v-3533f855] {\n  padding-top: 9px;\n  padding-bottom: 42px;\n}\n.last-one-content[data-v-3533f855] {\n  padding-bottom: 0;\n}\n.title[data-v-3533f855],\n.content[data-v-3533f855] {\n  padding-left: 70px;\n  padding-right: 70px;\n}\n.line[data-v-3533f855] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 38px;\n  width: 2px;\n  background-color: #FFC300;\n}\n.first-one-title-line[data-v-3533f855] {\n  top: 20px;\n}\n.last-one-title-line[data-v-3533f855] {\n  bottom: 20px;\n}\n.last-one-content-line[data-v-3533f855] {\n  width: 0;\n}\n.point[data-v-3533f855] {\n  position: absolute;\n  top: 13px;\n  left: 32px;\n  width: 14px;\n  height: 14px;\n  background-color: #FFF0BD;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #EE9900;\n  border-radius: 100px;\n}\n.highlight-point[data-v-3533f855] {\n  top: 7px;\n  left: 26px;\n  width: 26px;\n  height: 26px;\n  background-color: #EE9900;\n  border-style: solid;\n  border-width: 6px;\n  border-color: #FFE78D;\n}\n.text-title[data-v-3533f855] {\n  font-size: 30px;\n  color: #3d3d3d;\n}\n.text-highlight-title[data-v-3533f855] {\n  color: #EE9900;\n}\n.text-desc[data-v-3533f855],\n.text-date[data-v-3533f855] {\n  font-size: 24px;\n  color: #a5a5a5;\n}\n.text-desc[data-v-3533f855] {\n  margin-bottom: 12px;\n}\n",""]);// exports
/***/},/* 348 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"root"},_vm._l(_vm.cItems,function(item,index){return _c("div",{key:item.key,attrs:{accessible:true,"aria-label":item.title+","+(item.desc?item.desc:"")+","+(item.date?item.date:"")+","+(item.highlight?"已完成":"等待完成")}},[_c("div",{staticClass:"title flex-row"},[_c("div",{staticClass:"line",class:item.__titleLineClass__,style:item.__lineStyle__}),_vm._v(" "),_c("div",{staticClass:"point",class:item.__pointClass__,style:item.__pointStyle__}),_vm._v(" "),_c("text",{staticClass:"text-title full-rest",class:item.__titleTextClass__,style:item.__titleStyle__},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c("div",{staticClass:"content flex-row",class:item.__contentClass__},[_c("div",{staticClass:"line",class:item.__contentLineClass__,style:item.__lineStyle__}),_vm._v(" "),_c("div",{staticClass:"full-rest"},[item.desc?_c("text",{staticClass:"text-desc"},[_vm._v(_vm._s(item.desc))]):_vm._e(),_vm._v(" "),item.date?_c("text",{staticClass:"text-date"},[_vm._v(_vm._s(item.date))]):_vm._e()])])]);}),0);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3533f855",esExports);}}/***/},/* 349 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(350);/* unused harmony reexport default *//***/},/* 350 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(100);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_23baf49a_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(353);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(351);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-23baf49a";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_23baf49a_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-slide-nav/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-23baf49a",Component.options);}else{hotAPI.reload("data-v-23baf49a",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 351 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(352);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("7c454395",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23baf49a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23baf49a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 352 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.slide-nav[data-v-23baf49a] {\n  position: absolute;\n  z-index: 1000;\n}\n\n",""]);// exports
/***/},/* 353 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"wrapper",staticClass:"slide-nav"},[_vm._t("default")],2);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-23baf49a",esExports);}}/***/},/* 354 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(355);/* unused harmony reexport default *//***/},/* 355 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(101);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_793e9d51_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(358);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(356);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-793e9d51";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_793e9d51_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-slider-bar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-793e9d51",Component.options);}else{hotAPI.reload("data-v-793e9d51",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 356 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(357);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("670935ba",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-793e9d51\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-793e9d51\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 357 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.slider-bar-container[data-v-793e9d51] {\n  height: 56px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.range-bar[data-v-793e9d51] {\n  overflow: hidden;\n}\n.value-bar[data-v-793e9d51] {\n  height: 4px;\n  overflow: hidden;\n}\n.slide-block[data-v-793e9d51] {\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n",""]);// exports
/***/},/* 358 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{ref:"bar-container",staticClass:"slider-bar-container",style:_vm.containerStyle},[_c("div",{staticClass:"range-bar",style:_vm.rangeBarStyle},[_c("div",{ref:"value-bar",staticClass:"value-bar",style:_vm.valueBarStyle},[_c("div")])]),_vm._v(" "),_c("div",{ref:"slide-block-1",staticClass:"slide-block",style:_vm.blockStyle1,attrs:{"prevent-move-event":_vm.preventMoveEvent},on:{panstart:_vm.webStartHandler,panmove:_vm.webMoveHandler1,panend:_vm.webEndHandler,touchstart:_vm.weexStartHandler1,touchend:_vm.weexEndHandler,horizontalpan:_vm.weexHandler1}},[_c("div")]),_vm._v(" "),_vm.range?_c("div",{ref:"slide-block-2",staticClass:"slide-block",style:_vm.blockStyle2,attrs:{"prevent-move-event":_vm.preventMoveEvent},on:{panstart:_vm.webStartHandler,panmove:_vm.webMoveHandler2,panend:_vm.webEndHandler,touchstart:_vm.weexStartHandler2,touchend:_vm.weexEndHandler,horizontalpan:_vm.weexHandler2}},[_c("div")]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-793e9d51",esExports);}}/***/},/* 359 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(360);/* unused harmony reexport default *//***/},/* 360 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(102);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_29902156_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(363);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(361);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-29902156";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_29902156_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-special-rich-text/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-29902156",Component.options);}else{hotAPI.reload("data-v-29902156",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 361 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(362);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("2ed63fe0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29902156\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29902156\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 362 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-special-rich-text[data-v-29902156] {\n  position: relative;\n}\n.tag-div[data-v-29902156] {\n  position: absolute;\n  top: 0;\n  color: #A5A5A5;\n  font-size: 24px;\n  line-height: 30px;\n}\n.wxc-text[data-v-29902156] {\n  font-size: 24px;\n  line-height: 34px;\n  color: #3d3d3d;\n  lines: 2;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.black[data-v-29902156] {\n  color: #3D3D3D;\n}\n.yellow[data-v-29902156] {\n  color: #EE9900;\n}\n.blue[data-v-29902156] {\n  color: #30A0FF;\n}\n.gray[data-v-29902156] {\n  color: #A5A5A5;\n}\n.red[data-v-29902156] {\n  color: #FF5000;\n}\n.margin-text[data-v-29902156] {\n  margin-right: 6px;\n}\n",""]);// exports
/***/},/* 363 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-special-rich-text",on:{click:function click($event){return _vm.$emit("wxcSpecialRichTextClick");}}},[_c("div",{staticClass:"tag-div",style:Object.assign({top:_vm.top+"px"},_vm.newList[0].tagDivStyle)},[_vm.newList[0]&&_vm.newList[0].type==="icon"&&_vm.newList[0].src?_c("image",{staticClass:"wxc-image",style:_vm.newList[0].style,attrs:{src:_vm.newList[0].src,quality:"original",original:true,"aria-hidden":true},on:{load:_vm.onLoad}}):_vm._e(),_vm._v(" "),_vm.newList[0]&&_vm.newList[0].type==="tag"&&_vm.newList[0].value?_c("wxc-rich-text-tag",{attrs:{"tag-value":_vm.newList[0].value,"tag-theme":_vm.newList[0].theme,"tag-style":_vm.newList[0].style}}):_vm._e()],1),_vm._v(" "),_vm.newList[0]&&_vm.newList[0].type==="text"&&_vm.newList[0].value?_c("text",{class:["wxc-text",_vm.newList[0].theme],style:_vm.newList[0].style},[_vm._v(_vm._s(_vm.newList[0].value))]):_vm._e(),_vm._v(" "),_vm.newList[1]&&_vm.newList[1].value?_c("text",{class:["wxc-text",_vm.newList[1].theme],style:_vm.newList[1].style},[_vm._v(_vm._s(_vm.newList[1].value))]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-29902156",esExports);}}/***/},/* 364 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(365);/* unused harmony reexport default *//***/},/* 365 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(103);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4a3d8586_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(368);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(366);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-4a3d8586";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_4a3d8586_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-stepper/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-4a3d8586",Component.options);}else{hotAPI.reload("data-v-4a3d8586",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 366 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(367);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("5f947ac8",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a3d8586\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a3d8586\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 367 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-stepper[data-v-4a3d8586] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.stepper-plus[data-v-4a3d8586], .stepper-minus[data-v-4a3d8586] {\n  width: 56px;\n  height: 56px;\n  background-color: #ededed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 6px;\n}\n.stepper-input[data-v-4a3d8586] {\n  border-width: 0;\n  text-align: center;\n  color: #3d3d3d;\n  font-size: 30px;\n  line-height: 56px;\n  height: 56px;\n  width: 86px;\n}\n.stepper-icon[data-v-4a3d8586] {\n  font-size: 36px;\n  color: #666666;\n  margin-top: -4px;\n}\n\n",""]);// exports
/***/},/* 368 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-stepper"},[_c("div",{staticClass:"stepper-minus",attrs:{"aria-label":"减数",accessible:true},on:{click:_vm.minusClicked}},[_c("text",{staticClass:"stepper-icon",style:{color:_vm.isLess?"#cccccc":"#666666"}},[_vm._v("-")])]),_vm._v(" "),_c("input",{staticClass:"stepper-input",style:_vm.disableStyle,attrs:{type:"number",disabled:_vm.disabled||_vm.readOnly},domProps:{value:_vm.valueString},on:{input:_vm.onInput,blur:_vm.onBlur}}),_vm._v(" "),_c("div",{staticClass:"stepper-plus",attrs:{"aria-label":"加数",accessible:true},on:{click:_vm.plusClicked}},[_c("text",{staticClass:"stepper-icon",style:{color:_vm.isOver?"#cccccc":"#666666"}},[_vm._v("+")])])]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4a3d8586",esExports);}}/***/},/* 369 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(370);/* unused harmony reexport default *//***/},/* 370 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(104);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_bfda23da_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(373);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(371);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-bfda23da";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_bfda23da_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-swipe-action/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-bfda23da",Component.options);}else{hotAPI.reload("data-v-bfda23da",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 371 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(372);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("04e253a0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bfda23da\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bfda23da\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 372 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.border[data-v-bfda23da] {\n  border-bottom-width: 1px;\n  border-bottom-color: #dddddd;\n}\n.wxc-skid[data-v-bfda23da] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background-color: #FFFFFF;\n}\n.swipe-action-right[data-v-bfda23da] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.swipe-action-center[data-v-bfda23da] {\n  width: 750px;\n}\n/* .box-center {\n  width: 735px;\n  line-height: 90px;\n  background-color: #FFFFFF;\n  margin-left: 15px !important;\n  margin-left: 15px;\n}\n.box-center-last {\n  width: 750px;\n  margin-left: 0 !important;\n  padding-left: 15px !important;\n  margin-left: 0;\n  padding-left: 15px;\n} */\n.swipe-action-child[data-v-bfda23da] {\n  width: 100px;\n  text-align: center;\n  color: #FFFFFF;\n  background-color: #dddddd;\n  line-height: 90px;\n}\n.swipe-action-text[data-v-bfda23da] {\n  font-size: 30px;\n}\n",""]);// exports
/***/},/* 373 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{style:_vm.containerStyle},_vm._l(_vm.data,function(item,i){return _c("div",{key:"skid-"+i,ref:"skid",refInFor:true,staticClass:"wxc-skid",style:{width:750+item.right.length*100+"px",height:_vm.height+"px"},on:{click:function click($event){return _vm.onNodeClick(item,i);},touchstart:function touchstart(e){return!_vm.isAndroid&&_vm.onPanStart(e,item,i);},horizontalpan:function horizontalpan(e){return _vm.isAndroid&&_vm.onPanStart(e,item,i);},touchend:function touchend(e){return _vm.onPanEnd(e,item,i);}}},[_c("div",{staticClass:"swipe-action-center border",style:_vm.styles},[_vm._t("default",null,{val:{item:item,index:i}})],2),_vm._v(" "),_c("div",{staticClass:"swipe-action-right"},_vm._l(item.right,function(child,childIdx){return _c("text",{key:"child-"+childIdx,staticClass:"swipe-action-child swipe-action-text",style:Object.assign({lineHeight:_vm.height+"px"},child.style||{}),on:{click:function click($event){return _vm.onRightNode(item,child,i);}}},[_vm._v(_vm._s(child.text))]);}),0)]);}),0);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bfda23da",esExports);}}/***/},/* 374 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(375);/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_0__index_vue__["a"];});/***/},/* 375 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(105);/* unused harmony namespace reexport *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1928afc7_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(378);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(376);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-1928afc7";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_1928afc7_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-tab-bar/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-1928afc7",Component.options);}else{hotAPI.reload("data-v-1928afc7",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* harmony default export */__webpack_exports__["a"]=Component.exports;/***/},/* 376 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(377);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("1a9e99d0",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1928afc7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1928afc7\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 377 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-tab-page[data-v-1928afc7] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.tab-title-list[data-v-1928afc7] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.title-item[data-v-1928afc7] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-style: solid;\n}\n.tab-page-wrap[data-v-1928afc7] {\n  width: 750px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  /* overflow: hidden; */\n}\n.tab-container[data-v-1928afc7] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: absolute;\n}\n.tab-text[data-v-1928afc7] {\n  lines: 1;\n  text-overflow: ellipsis;\n}\n.desc-tag[data-v-1928afc7] {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  border-bottom-right-radius: 14px;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n  background-color: #FF5E00;\n  height: 26px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.dot[data-v-1928afc7] {\n  width: 12px;\n  height: 12px;\n  border-bottom-right-radius: 12px;\n  border-bottom-left-radius: 12px;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  position: absolute;\n  top: 10px;\n  right: 40px;\n  background-color: #FF5E00;\n}\n.desc-text[data-v-1928afc7] {\n  font-size: 18px;\n  color: #ffffff;\n}\n\n",""]);// exports
/***/},/* 378 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-tab-page",style:{backgroundColor:_vm.wrapBgColor}},[_c("div",{ref:"tab-page-wrap",staticClass:"tab-page-wrap"},[_c("div",{ref:"tab-container",staticClass:"tab-container"},[_vm._t("default")],2)]),_vm._v(" "),_c("div",{staticClass:"tab-title-list",style:{backgroundColor:_vm.tabStyles.bgColor,height:_vm.tabStyles.height+(_vm.isIPhoneX?78:0)+"px",paddingBottom:_vm.isIPhoneX?"78px":"0"}},_vm._l(_vm.tabTitles,function(v,index){return _c("div",{key:index,ref:"wxc-tab-title-"+index,refInFor:true,staticClass:"title-item",style:{width:_vm.tabStyles.width+"px",height:_vm.tabStyles.height+"px",backgroundColor:_vm.currentPage==index?_vm.tabStyles.activeBgColor:_vm.tabStyles.bgColor},attrs:{accessible:true,"aria-label":""+(v.title?v.title:"标签"+index)},on:{click:function click($event){return _vm.setPage(index,v.url);}}},[_vm.titleType==="icon"&&!_vm.titleUseSlot?_c("image",{style:{width:_vm.tabStyles.iconWidth+"px",height:_vm.tabStyles.iconHeight+"px"},attrs:{src:_vm.currentPage==index?v.activeIcon:v.icon}}):_vm._e(),_vm._v(" "),_vm.titleType==="iconFont"&&v.codePoint&&!_vm.titleUseSlot?_c("text",{style:{fontFamily:"wxcIconFont",fontSize:_vm.tabStyles.iconFontSize+"px",marginBottom:_vm.tabStyles.iconFontMarginBottom?_vm.tabStyles.iconFontMarginBottom+"px":"8px",color:_vm.currentPage==index?_vm.tabStyles.activeIconFontColor:_vm.tabStyles.iconFontColor}},[_vm._v(_vm._s(v.codePoint))]):_vm._e(),_vm._v(" "),!_vm.titleUseSlot?_c("text",{staticClass:"tab-text",style:{fontSize:_vm.tabStyles.fontSize+"px",fontWeight:_vm.currentPage==index&&_vm.tabStyles.isActiveTitleBold?"bold":"normal",color:_vm.currentPage==index?_vm.tabStyles.activeTitleColor:_vm.tabStyles.titleColor,paddingLeft:_vm.tabStyles.textPaddingLeft+"px",paddingRight:_vm.tabStyles.textPaddingRight+"px"}},[_vm._v(_vm._s(v.title))]):_vm._e(),_vm._v(" "),v.badge&&!_vm.titleUseSlot?_c("div",{staticClass:"desc-tag"},[_c("text",{staticClass:"desc-text"},[_vm._v(_vm._s(v.badge))])]):_vm._e(),_vm._v(" "),v.dot&&!v.badge&&!_vm.titleUseSlot?_c("div",{staticClass:"dot"}):_vm._e(),_vm._v(" "),_vm.titleUseSlot?_vm._t("tab-title-"+index):_vm._e()],2);}),0)]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1928afc7",esExports);}}/***/},/* 379 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(380);/* unused harmony reexport default *//***/},/* 380 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(106);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0dc8b49e_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(383);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(381);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-0dc8b49e";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_0dc8b49e_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-tab-page/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-0dc8b49e",Component.options);}else{hotAPI.reload("data-v-0dc8b49e",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 381 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(382);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("737ec446",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc8b49e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc8b49e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 382 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.wxc-tab-page[data-v-0dc8b49e] {\n  width: 750px;\n}\n.tab-title-list[data-v-0dc8b49e] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.title-item[data-v-0dc8b49e] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom-style: solid;\n}\n.border-bottom[data-v-0dc8b49e] {\n  position: absolute;\n  bottom: 0;\n}\n.tab-page-wrap[data-v-0dc8b49e] {\n  width: 750px;\n  /* overflow: hidden; */\n}\n.tab-container[data-v-0dc8b49e] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: absolute;\n}\n.tab-text[data-v-0dc8b49e] {\n  lines: 1;\n  text-overflow: ellipsis;\n}\n.rightIcon[data-v-0dc8b49e] {\n  position: fixed;\n  background-color: #ffffff;\n  -webkit-box-shadow: -50px 0 20px #ffffff;\n          box-shadow: -50px 0 20px #ffffff;\n}\n\n",""]);// exports
/***/},/* 383 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",{staticClass:"wxc-tab-page",style:{height:_vm.tabPageHeight+"px",backgroundColor:_vm.wrapBgColor}},[_c("scroller",{ref:"tab-title-list",staticClass:"tab-title-list",style:{backgroundColor:_vm.tabStyles.bgColor,height:_vm.tabStyles.height+"px",paddingLeft:(_vm.tabStyles.leftOffset?_vm.tabStyles.leftOffset:0)+"px",paddingRight:_vm.tabStyles.rightOffset},attrs:{"show-scrollbar":false,"scroll-direction":"horizontal","data-spm":_vm.spmC}},[_vm._l(_vm.tabTitles,function(v,index){return _c("div",{key:index,ref:"wxc-tab-title-"+index,refInFor:true,staticClass:"title-item",style:{width:_vm.tabStyles.width+"px",height:_vm.tabStyles.height+"px",backgroundColor:_vm.currentPage===index?_vm.tabStyles.activeBgColor:_vm.tabStyles.bgColor,borderBottomWidth:_vm.tabStyles.normalBottomHeight,borderBottomColor:_vm.tabStyles.normalBottomColor},attrs:{accessible:true,"aria-label":""+(v.title?v.title:"标签"+index)},on:{click:function click($event){return _vm.setPage(index,v.url,_vm.clickAnimation);}}},[_vm.titleType==="icon"&&!_vm.titleUseSlot?_c("image",{style:{width:_vm.tabStyles.iconWidth+"px",height:_vm.tabStyles.iconHeight+"px"},attrs:{src:_vm.currentPage===index?v.activeIcon:v.icon}}):_vm._e(),_vm._v(" "),_vm.titleType==="iconFont"&&v.codePoint&&!_vm.titleUseSlot?_c("text",{staticClass:"icon-font",style:{fontFamily:"wxcIconFont",fontSize:_vm.tabStyles.iconFontSize+"px",color:_vm.currentPage===index?_vm.tabStyles.activeIconFontColor:_vm.tabStyles.iconFontColor}},[_vm._v(_vm._s(v.codePoint))]):_vm._e(),_vm._v(" "),!_vm.titleUseSlot?_c("text",{staticClass:"tab-text",style:{fontSize:_vm.tabStyles.fontSize+"px",fontWeight:_vm.currentPage===index&&_vm.tabStyles.isActiveTitleBold?"bold":"normal",color:_vm.currentPage===index?_vm.tabStyles.activeTitleColor:_vm.tabStyles.titleColor,paddingLeft:(_vm.tabStyles.textPaddingLeft?_vm.tabStyles.textPaddingLeft:10)+"px",paddingRight:(_vm.tabStyles.textPaddingRight?_vm.tabStyles.textPaddingRight:10)+"px"}},[_vm._v(_vm._s(v.title))]):_vm._e(),_vm._v(" "),_vm.tabStyles.hasActiveBottom&&!_vm.titleUseSlot?_c("div",{staticClass:"border-bottom",style:{width:_vm.tabStyles.activeBottomWidth+"px",left:(_vm.tabStyles.width-_vm.tabStyles.activeBottomWidth)/2+"px",height:_vm.tabStyles.activeBottomHeight+"px",backgroundColor:_vm.currentPage===index?_vm.tabStyles.activeBottomColor:"transparent"}}):_vm._e(),_vm._v(" "),_vm.titleUseSlot?_vm._t("tab-title-"+index):_vm._e()],2);}),_vm._v(" "),_vm.tabStyles.hasRightIcon?_c("div",{staticClass:"rightIcon",style:{top:_vm.rightIconStyle.top,right:_vm.rightIconStyle.right,paddingLeft:_vm.rightIconStyle.paddingLeft,paddingRight:_vm.rightIconStyle.paddingRight}},[_vm._t("rightIcon")],2):_vm._e()],2),_vm._v(" "),_c("div",{ref:"tab-page-wrap",staticClass:"tab-page-wrap",style:{height:_vm.tabPageHeight-_vm.tabStyles.height+"px"},on:{horizontalpan:_vm.startHandler}},[_c("div",{ref:"tab-container",staticClass:"tab-container"},[_vm._t("default")],2)])],1);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0dc8b49e",esExports);}}/***/},/* 384 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__index_vue__=__webpack_require__(385);/* unused harmony reexport default *//***/},/* 385 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__=__webpack_require__(107);/* unused harmony reexport namespace *//* harmony import */var __WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_59e39f46_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__=__webpack_require__(388);var disposed=false;function injectStyle(ssrContext){if(disposed)return;__webpack_require__(386);}var normalizeComponent=__webpack_require__(0);/* script *//* template *//* template functional */var __vue_template_functional__=false;/* styles */var __vue_styles__=injectStyle;/* scopeId */var __vue_scopeId__="data-v-59e39f46";/* moduleIdentifier (server only) */var __vue_module_identifier__=null;var Component=normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_index_vue__["a"/* default */],__WEBPACK_IMPORTED_MODULE_1__vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_59e39f46_hasScoped_true_buble_transforms_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_index_vue__["a"/* default */],__vue_template_functional__,__vue_styles__,__vue_scopeId__,__vue_module_identifier__);Component.options.__file="node_modules/_weex-ui@0.8.5@weex-ui/packages/wxc-tag/index.vue";/* hot reload */if(false){(function(){var hotAPI=require("vue-loader/node_modules/vue-hot-reload-api");hotAPI.install(require("vue"),false);if(!hotAPI.compatible)return;module.hot.accept();if(!module.hot.data){hotAPI.createRecord("data-v-59e39f46",Component.options);}else{hotAPI.reload("data-v-59e39f46",Component.options);}module.hot.dispose(function(data){disposed=true;});})();}/* unused harmony default export */var _unused_webpack_default_export=Component.exports;/***/},/* 386 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(387);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(2)("66f0a9bd",content,false,{});// Hot Module Replacement
if(false){// When the styles change, update the <style> tags
if(!content.locals){module.hot.accept("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59e39f46\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue",function(){var newContent=require("!!../../../_css-loader@0.28.11@css-loader/index.js!../../../_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59e39f46\",\"scoped\":true,\"hasInlineConfig\":false}!../../../_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
module.hot.dispose(function(){update();});}/***/},/* 387 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(1)(false);// imports
// module
exports.push([module.i,"\n.tag-item[data-v-59e39f46] {\n  height: 24px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* hack高度不居中问题，后续版本升级去掉 */\n  padding-bottom: 2px;\n}\n.tag-border[data-v-59e39f46] {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.tag-hollow[data-v-59e39f46] {\n  border-width: 1px;\n}\n.tag-image[data-v-59e39f46] {\n  height: 24px;\n}\n.tag-special[data-v-59e39f46] {\n  border-width: 1px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.left-image[data-v-59e39f46] {\n  width: 20px;\n  height: 20px;\n}\n.tag-left[data-v-59e39f46] {\n  width: 24px;\n  height: 24px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.tag-text[data-v-59e39f46] {\n  font-size: 20px;\n  height: 22px;\n  line-height: 22px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n",""]);// exports
/***/},/* 388 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var render=function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div",[_vm.showSolid||_vm.showHollow?_c("div",{class:["tag-item","tag-border",_vm.showHollow&&"tag-hollow"],style:_vm.tagTextStyle},[_c("text",{staticClass:"tag-text",style:{color:_vm.fontColor}},[_vm._v(_vm._s(_vm.value))])]):_vm._e(),_vm._v(" "),_vm.showImage?_c("image",{staticClass:"tag-image",style:{width:_vm.imgWidth+"px"},attrs:{src:_vm.img,"aria-hidden":true},on:{load:_vm.onLoad}}):_vm._e(),_vm._v(" "),_vm.showSpecial?_c("div",{staticClass:"tag-special tag-border",style:{borderColor:_vm.tagColor},attrs:{accessible:true,"aria-label":_vm.value}},[_c("div",{staticClass:"tag-left",style:{backgroundColor:_vm.tagColor}},[_c("image",{staticClass:"left-image",attrs:{src:_vm.specialIcon}})]),_vm._v(" "),_c("text",{staticClass:"tag-text",style:{color:_vm.fontColor}},[_vm._v(_vm._s(_vm.value))])]):_vm._e()]);};var staticRenderFns=[];render._withStripped=true;var esExports={render:render,staticRenderFns:staticRenderFns/* harmony default export */};__webpack_exports__["a"]=esExports;if(false){module.hot.accept();if(module.hot.data){require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59e39f46",esExports);}}/***/}]/******/);

/***/ })

});