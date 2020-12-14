import React, { FC } from 'react';
import * as S from './style';

interface Porps {
	margin?: string;
}

const SubTitle: FC<Porps> = ({ children, margin }) => {
	return <S.SubTitle margin={margin}>{children}</S.SubTitle>;
};

export default SubTitle;
