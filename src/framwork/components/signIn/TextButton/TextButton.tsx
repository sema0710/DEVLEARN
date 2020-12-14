import React, { FC } from 'react';
import Router from 'next/router';
import * as S from '../style';

const TextButton: FC = () => {
	const buttonClickHandler = () => {
		Router.push('/signup');
	};
	return <S.SignInTextButton onClick={buttonClickHandler}>회원가입</S.SignInTextButton>;
};

export default TextButton;
