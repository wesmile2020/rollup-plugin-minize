"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minize = void 0;
var uglify_js_1 = __importDefault(require("uglify-js"));
function minize(options) {
    return {
        name: 'rollup-plugin-minize',
        renderChunk: function (code) {
            var result = uglify_js_1.default.minify(code, options);
            if (result.error) {
                throw result.error;
            }
            return result.code;
        }
    };
}
exports.minize = minize;
exports.default = minize;
