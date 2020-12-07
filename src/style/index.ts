export const color = {
	main: '#4B4B4B',
	sub: '#6C6C6C',
	font: '#FFFFFF',
	header: '#3B3B3B',
};

const HTML_FONT_SIZE = 16;

export const pxToRem = (px: number): number => {
	return px / HTML_FONT_SIZE;
};
