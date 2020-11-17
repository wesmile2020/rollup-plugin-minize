import uglify, { MinifyOptions } from 'uglify-js';
import rollup from 'rollup';

function minize(options: MinifyOptions): rollup.Plugin {
    return {
        name: 'rollup-plugin-minize',

        renderChunk(code) {
            const result = uglify.minify(code, options);
            if (result.error) {
                throw result.error;
            }
            return result.code;
        }
    }
}

export { minize };
export default minize;

