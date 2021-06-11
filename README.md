# Webpack 5 WASM reference types bug

Reproduction steps:

- Install Rust and Nodejs
- Install this specific version of [wasm-pack](https://github.com/Tarnadas/wasm-pack):
  - `cargo install -f --git https://github.com/Tarnadas/wasm-pack.git --branch feature/anyref`
- Run `yarn && yarn build`

Fails with error:

```
ERROR in ./pkg/webpack_5_wasm_reftypes_bg.wasm
Module parse failed: Internal failure: parseVec could not cast the value
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
Error: Internal failure: parseVec could not cast the value
    at new CompileError (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/helper-api-error/lib/index.js:40:109)
    at parseVec (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/wasm-parser/lib/decoder.js:328:15)
    at parseTypeSection (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/wasm-parser/lib/decoder.js:360:22)
    at parseSection (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/wasm-parser/lib/decoder.js:1363:24)
    at Object.decode (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/wasm-parser/lib/decoder.js:1712:25)
    at decode (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/@webassemblyjs/wasm-parser/lib/index.js:248:21)
    at WebAssemblyParser.parse (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/webpack/lib/wasm-async/AsyncWebAssemblyParser.js:48:19)
    at /home/marior/projects/webpack-5-wasm-reftypes/node_modules/webpack/lib/NormalModule.js:1018:26
    at processResult (/home/marior/projects/webpack-5-wasm-reftypes/node_modules/webpack/lib/NormalModule.js:745:11)
    at /home/marior/projects/webpack-5-wasm-reftypes/node_modules/webpack/lib/NormalModule.js:809:5
 @ ./pkg/webpack_5_wasm_reftypes.js 1:0-58 4:0-21
 @ ./src/index.js 1:0-16

webpack 5.38.1 compiled with 1 error in 572 ms
error Command failed with exit code 1.
```
