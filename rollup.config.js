import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

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
                ['es2015', { "modules": false, "loose": true }]

            ],
            plugins: [
                'external-helpers'
            ]
        }),



        serve(), // index.html should be in root of project
        livereload(),
        //uglify()
    ],
    external: ['vyan']

}