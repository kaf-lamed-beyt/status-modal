import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: ["react", "react-dom", "react-icons"],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".scss", ".css", ".svg"],
    }),
    babel({
      extensions: [".js", ".jsx", ".css", ".scss"],
      exclude: "node_modules/**",
    }),
    generatePackageJSON({
      outputFolder: "dist",
      baseContents: (pkg) => ({
        name: pkg.name,
        main: "/dist/index.js",
        peerDependencies: {
          react: "^18.2.0",
        },
      }),
    }),
    terser({
      ecma: 2015,
      mangle: { toplevel: true },
      compress: {
        toplevel: true,
        drop_console: !dev,
        drop_debugger: !dev,
      },
      output: { quote_style: 1 },
    }),
    commonjs(),
    styles(),
  ],
};
