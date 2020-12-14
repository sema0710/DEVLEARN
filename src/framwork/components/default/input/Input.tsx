import React, { FC } from 'react';
import * as S from './style';

interface Props {
	width: string;
	height: string;
	setValue: (value: string) => void;
	placeholder?: string;
	type?: string;
	fontSize?: string;
	margin?: string;
}

const Input: FC<Props> = ({ width, height, setValue, placeholder, type, fontSize, margin }) => {
	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	return (
		<S.Input
			height={height}
			width={width}
			onChange={inputChangeHandler}
			placeholder={placeholder}
			type={type}
			fontSize={fontSize}
			margin={margin}
		/>
	);
};

export default Input;
