import terser from 'terser';
import rollup from 'rollup';

function minize(options: terser.MinifyOptions): rollup.Plugin {
    return {
        name: 'rollup-plugin-minize',

        async renderChunk(code) {
            const result = await terser.minify(code, options);
            return {
                code: result.code || '',
                map: result.map
            };
        }
    }
}

export { minize };
export default minize;

