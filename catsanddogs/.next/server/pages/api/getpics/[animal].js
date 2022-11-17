"use strict";
(() => {
var exports = {};
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 8266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/api/getpics/[animal].js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    // get the animal type from the query
    const { animal  } = req.query;
    // load the JSON data from file
    const jsonDirectory = external_path_default().join(process.cwd(), "json");
    const fileContents = await external_fs_namespaceObject.promises.readFile(jsonDirectory + "/pics.json", "utf8");
    // filter the JSON data based on the animal type
    const response = JSON.parse(fileContents).filter((x)=>x.type == animal);
    // send the JSON data as a string
    res.status(200).json(JSON.stringify(response));
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8266));
module.exports = __webpack_exports__;

})();