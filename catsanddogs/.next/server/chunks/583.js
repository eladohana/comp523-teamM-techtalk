exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 8431:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__N6Juf"
};


/***/ }),

/***/ 2583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_PageBody)
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


/***/ })

};
;