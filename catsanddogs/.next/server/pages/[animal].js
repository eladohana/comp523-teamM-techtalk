(() => {
var exports = {};
exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 8431:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__N6Juf"
};


/***/ }),

/***/ 9310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _animal_),
  "fetchData": () => (/* binding */ fetchData),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Button.js

const Button = ({ onclick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onclick,
        children: "Cycle"
    });
};
/* harmony default export */ const components_Button = (Button);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Container.module.css
var Container_module = __webpack_require__(8431);
var Container_module_default = /*#__PURE__*/__webpack_require__.n(Container_module);
;// CONCATENATED MODULE: ./components/Container.js



const Container = ({ url  })=>{
    console.log(url);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Container_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            alt: "",
            src: `/${url}`,
            width: 500,
            height: 300
        })
    });
};
/* harmony default export */ const components_Container = (Container);

;// CONCATENATED MODULE: ./components/PageBody.js




const PageBody = ({ title , images  })=>{
    const [index, setIndex] = (0,external_react_.useState)(0);
    const [image, setImage] = (0,external_react_.useState)(images[index]);
    function changeImage() {
        setIndex((index + 1) % images.length);
        setImage(images[index]);
    }
    console.log(images);
    (0,external_react_.useEffect)(()=>{
        setIndex(0);
        setImage(images[index]);
    }, [
        images
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: `${title ? title[0].toUpperCase() + title.slice(1) : ""}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Container, {
                url: image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Button, {
                onclick: changeImage
            })
        ]
    });
};
/* harmony default export */ const components_PageBody = (PageBody);

;// CONCATENATED MODULE: ./pages/[animal]/index.js


const animals = ({ date , animalType , animalsImg  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_PageBody, {
                title: animalType,
                images: animalsImg
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Data Fetched on last build: ",
                    new Date(date).toLocaleString()
                ]
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Get all of the paths
    // This will be run on build
    return {
        paths: [
            {
                params: {
                    animal: "cats"
                }
            },
            {
                params: {
                    animal: "dogs"
                }
            }
        ],
        // Any paths not returned by getStaticPaths will result in a 404 page
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    console.log(params);
    const animalType = params.animal;
    const url = `http://localhost:3000/api/getpics/${animalType}`;
    console.log(url);
    const animalsImg = await fetchData(url);
    console.log(animalsImg);
    const date = new Date().toISOString();
    return {
        props: {
            date,
            animalType,
            animalsImg
        }
    };
};
const fetchData = async (url)=>{
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        console.log(JSON.parse(json).map((x)=>x.url));
        // console.log(JSON.parse(json).map(x=> x.url))
        // import x from url
        console.log(animals);
        // console.log(json);
        return JSON.parse(json).map((x)=>x.url);
    } catch (error) {
        console.log("error", error);
    }
};
/* harmony default export */ const _animal_ = (animals);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675], () => (__webpack_exec__(9310)));
module.exports = __webpack_exports__;

})();