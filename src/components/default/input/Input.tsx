import React, { FC } from 'react';
import * as S from './style';

interface Props {
	width: number;
	height: number;
	setValue: (value: string) => void;
}

const Input: FC<Props> = ({ width, height, setValue }) => {
	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	return <S.Input height={height} width={width} onChange={inputChangeHandler} />;
};

export default Input;
