import React, { FC } from 'react';
import * as S from './style';

interface Props {
	width: string;
	height: string;
	fontSize?: string;
	margin?: string;
	onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<Props> = ({ width, height, children, margin, fontSize, onClick }) => {
	return (
		<S.Button width={width} height={height} margin={margin} fontSize={fontSize} onClick={onClick}>
			{children}
		</S.Button>
	);
};

export default Button;
