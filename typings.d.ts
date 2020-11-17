import { Plugin } from 'rollup';

interface Options {
    sourceMap?: boolean;
}

export default function(opts: Options): Plugin;
