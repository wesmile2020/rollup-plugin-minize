# rollup-plugin-minize

a rollup plugin for minize javascript

# options
https://github.com/mishoo/UglifyJS#minify-options

```javascript
const { minize } = require('rollup-plugin-minize');

module.exports = {
    plugins: [
        minize({
            sourceMap: false,
        }),
    ],
};
```