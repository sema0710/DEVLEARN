import { SubTitle, Title, Button } from 'components/default';
import React, { FC, useState } from 'react';
import * as S from '../style';
import ImgInput from './imgInput';

interface Props {
	pageRef: React.RefObject<HTMLDivElement>;
	buttonClickHandler: () => void;
	setImg: (file: File) => void;
}

const ImgSettingPage: FC<Props> = ({ pageRef, buttonClickHandler, setImg }) => {
	return (
		<S.SignUpBody ref={pageRef}>
			<Title>SET PROFILE IMG</Title>
			<ImgInput />
			<SubTitle margin='20px'>사진을 등록해 주세요.</SubTitle>
			<Button {...S.ButtonStyle} onClick={buttonClickHandler}>
				다음으로
			</Button>
		</S.SignUpBody>
	);
};

export default ImgSettingPage;
