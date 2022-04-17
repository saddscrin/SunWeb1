import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/js/main.js',
    output:  {
        file: 'main.min.js',
        format: 'es',
      plugins: [terser(
      )]
    },
    plugins: [
        scss({
            output: "style.min.css",
            outputStyle: "compressed",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};
