import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

// postcss plugins
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        postcss({
            plugins: [
                postcssImport(),
                cssnano()
            ],
            modules: false,
            extract: true,
            minimize: true,
            sourceMap: false
        }),
        url(),
        svgr(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
            exclude: ['src/**/*.(test|stories).(tsx|ts)'],
        }),
        commonjs()
    ]
};
