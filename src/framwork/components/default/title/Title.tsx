import React, { FC } from 'react';
import * as S from './style';

interface Props {
	margin?: string;
}

const Title: FC<Props> = ({ children, margin }) => {
	return <S.Title margin={margin}>{children}</S.Title>;
};

export default Title;
