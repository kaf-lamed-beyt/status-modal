import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";

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
    commonjs(),
    styles(),
  ],
};
