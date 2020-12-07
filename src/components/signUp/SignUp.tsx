import React, { FC } from 'react';
import * as S from './style';
import ImgSettingPage from './imgSettingPage';

const SignUp: FC = () => {
	return (
		<S.SignUp>
			<S.SignUpScrollWrapper>
				<S.SignUpScrollBody>
					<ImgSettingPage />
					<S.SignUpBody />
				</S.SignUpScrollBody>
			</S.SignUpScrollWrapper>
		</S.SignUp>
	);
};

export default SignUp;
