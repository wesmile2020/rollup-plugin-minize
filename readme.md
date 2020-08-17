# rollup-plugin-minize

a rollup plugin for minize javascript

# options 
- sourceMap: boolean; generate sourceMap

```javascript
const minize = require('rollup-plugin-minize');

module.exports = {
    plugins: [
        minize({
            sourceMap: false,
        }),
    ],
};
```