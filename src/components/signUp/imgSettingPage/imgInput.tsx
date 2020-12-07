import React, { FC } from 'react';
import * as S from '../style';

const ImgInput: FC = () => {
	return (
		<S.SignUpUserImgWrapper>
			<S.SignUpUserImg />
			<S.SignUpUserImgInput type='file' />
		</S.SignUpUserImgWrapper>
	);
};

export default ImgInput;
