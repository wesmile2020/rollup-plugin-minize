import { Plugin } from 'rollup';

interface Options {
    sourceMap?: boolean;
}

function minize(opts: Options): Plugin;

export { minize };
export default minize;
