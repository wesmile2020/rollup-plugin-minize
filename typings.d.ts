import { Plugin } from 'rollup';
import { MinifyOptions } from 'terser';

declare function minize(opts: MinifyOptions): Plugin;

export { minize };
export default minize;
