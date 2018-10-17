import { react, PropTypes } from './constants';

const formatBuilder = format => fileName => ({
	file: fileName,
	format,
	name: 'Cheetah',
	globals: {
		react,
		[PropTypes]: PropTypes,
	},
});

export default formatBuilder;
