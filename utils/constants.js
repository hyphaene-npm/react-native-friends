import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import autoExternal from 'rollup-plugin-auto-external';

export const pluginsArray = [
	peerDepsExternal(),
	babel({ exclude: 'node_modules/**' }),
	localResolve(),
	resolve({
		module: true,
		jsnext: true,
		extensions: ['.mjs', '.js', '.jsx', '.json'],
	}),
	commonjs(),
	filesize(),
	autoExternal(),
];
export const react = 'react';
export const PropTypes = 'prop-types';
export const reactDom = 'react-dom';

export const external = [react, reactDom, PropTypes];
export const mainInput = 'src/index.js';
export const needCss = true;
