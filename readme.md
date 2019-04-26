Run terminal commands in Node.

## Example
```js
const cmd = require('cmd');

cmd('echo hello world');
```

`cmd()` returns a promise, which rejects if the script fails, and resolves if it was successful.

## Installation
`npm install --save @bencmbrook/cmd`
