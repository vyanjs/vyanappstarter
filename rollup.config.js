import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import terser from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve'

const pkg = require('./package.json');

export default {
    input: './src/index.js',
    /*targets: [
        { dest: pkg.main, format: 'iife' }

    ],*/
    output: {
        file: 'dist/vyanappstarter.js',
        format: 'umd',
        name: 'vyanappstarter',
        globals: {
            'vyan': 'vyan'
        },
        "nodeResolve": {
            "browser": true
        }
    },

    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/vyan/dist/vyan.js': ['vyan']
            }
        }),

        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ["@babel/preset-env", { "modules": false, "loose": true }]

            ]
        }),



        serve(), // index.html should be in root of project
        //terser()
    ],
    external: ['vyan']

}