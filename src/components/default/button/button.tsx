import React, { FC } from 'react';
import * as S from './style';

interface Props {
	width: string;
	height: string;
	fontSize?: string;
	margin?: string;
}

const Button: FC<Props> = ({ width, height, children, margin, fontSize }) => {
	return (
		<S.Button width={width} height={height} margin={margin} fontSize={fontSize}>
			{children}
		</S.Button>
	);
};

export default Button;
