const resolve = require("@rollup/plugin-node-resolve").nodeResolve;
const alias = require("@rollup/plugin-alias").default;
const path = require("path");
const commonjs = require("@rollup/plugin-commonjs").default;
const terser = require("@rollup/plugin-terser").default;

const root = __dirname;

module.exports = [
  {
    input: path.join(__dirname, "out/browser/public/Terminal.js"),
    output: {
      file: "./dist/esm/xterm.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      alias({
        entries: {
          common: path.resolve(root, "out/common"),
          browser: path.resolve(root, "out/browser"),
        },
      }),
      resolve(),
      terser(),
    ],
  },
  // {
  //   input: path.join(__dirname, "addons/xterm-addon-fit/src/FitAddon.ts"),
  //   output: {
  //     file: "./dist/es6/addons/FitAddon.js",
  //     format: "esm", // umd
  //     sourcemap: true,
  //   },
  //   plugins: [resolve()],
  // },
];
