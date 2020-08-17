const uglify = require('uglify-js');

const defaultOptions = {
    sourceMap: false,
};

function minify(options = {}) {
    const opts = { ...defaultOptions, ...options };
    return {
        name: 'rollup-plugin-minize',

        renderChunk(code) {
            const result = uglify.minify(code, {
                sourceMap: opts.sourceMap,
            });
            if (result.error) {
                throw result.error;
            }
            return result.code;
        },
    };
}

module.exports = minify;
