const resolve = require("@rollup/plugin-node-resolve").nodeResolve;
const alias = require("@rollup/plugin-alias");
const path = require("path");
const pluginTypeScript = require("@babel/preset-typescript");
const { babel } = require("@rollup/plugin-babel");

const root = __dirname;

module.exports = [
  {
    input: path.join(__dirname, "src/browser/public/Terminal.ts"),
    output: {
      file: "./dist/es6/xterm.js",
      format: "esm", // umd
      sourcemap: true,
    },
    plugins: [
      alias({
        entries: [
          { find: /^common\/(.*)/, replacement: path.join(root, "./src/common/$1") },
          { find: /^browser\/(.*)/, replacement: path.join(root, "./src/browser/$1") },
        ],
      }),
      resolve({
        extensions: [".d.ts", ".ts", ".js"],
      }),

      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: [pluginTypeScript],
      }),
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
