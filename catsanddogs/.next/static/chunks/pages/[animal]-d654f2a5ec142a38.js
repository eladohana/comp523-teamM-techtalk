(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{9588:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[animal]",function(){return __webpack_require__(9310)}])},9310:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSP:function(){return __N_SSP},default:function(){return _animal_},fetchData:function(){return fetchData}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294);let Button=param=>{let{onclick}=param;return(0,jsx_runtime.jsx)("button",{onClick:onclick,children:"Cycle"})};var next_image=__webpack_require__(5675),image_default=__webpack_require__.n(next_image),Container_module=__webpack_require__(672),Container_module_default=__webpack_require__.n(Container_module);let Container=param=>{let{url}=param;return console.log(url),(0,jsx_runtime.jsx)("div",{className:Container_module_default().container,children:(0,jsx_runtime.jsx)(image_default(),{alt:"",src:"/".concat(url),width:500,height:300})})},PageBody=param=>{let{title,images}=param,[index,setIndex]=(0,react.useState)(0),[image,setImage]=(0,react.useState)(images[index]);return console.log(images),(0,react.useEffect)(()=>{setIndex(0),setImage(images[index])},[images]),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h1",{children:"".concat(title?title[0].toUpperCase()+title.slice(1):"")}),(0,jsx_runtime.jsx)(Container,{url:image}),(0,jsx_runtime.jsx)(Button,{onclick:function(){setIndex((index+1)%images.length),setImage(images[index])}})]})},animals=param=>{let{date,animalType,animalsImg}=param;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(PageBody,{title:animalType,images:animalsImg}),(0,jsx_runtime.jsxs)("p",{children:["Data Fetched on last build: ",new Date(date).toLocaleString()]})]})};var __N_SSP=!0;let fetchData=async url=>{try{let response=await fetch(url),json=await response.json();return console.log(json),console.log(JSON.parse(json).map(x=>x.url)),console.log(animals),JSON.parse(json).map(x=>x.url)}catch(error){console.log("error",error)}};var _animal_=animals},672:function(module){module.exports={container:"Container_container__N6Juf"}}},function(__webpack_require__){__webpack_require__.O(0,[675,774,888,179],function(){return __webpack_require__(__webpack_require__.s=9588)}),_N_E=__webpack_require__.O()}]);