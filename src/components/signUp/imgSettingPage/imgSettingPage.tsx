import { SubTitle, Title, Button } from 'components/default';
import React, { FC } from 'react';
import * as S from '../style';
import ImgInput from './imgInput';

const ImgSettingPage: FC = () => {
	return (
		<S.SignUpBody>
			<Title>SET PROFILE IMG</Title>
			<ImgInput />
			<SubTitle margin='20px'>사진을 등록해 주세요.</SubTitle>
			<Button {...S.ButtonStyle}>다음으로</Button>
		</S.SignUpBody>
	);
};

export default ImgSettingPage;
