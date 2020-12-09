import { Button, Input, Title } from 'components/default';
import React, { FC } from 'react';
import * as S from '../style';

const NICK_NAME_PLACE_HOLDER = '닉네임';
const ID_PLACE_HOLDER = '아이디';
const PASSWORD_PLACE_HOLDER = '비밀번호';
const PASSWORD_CHECK_PLACE_HOLDER = '비밀번호 확인';
const EMAIL_PLACE_HOLDER = '이메일';

interface Props {
	pageRef: React.RefObject<HTMLDivElement>;
	buttonClickHandler: () => void;
	currentButtonClickHandler: () => void;
}

const SetInfoPage: FC<Props> = ({ pageRef, buttonClickHandler, currentButtonClickHandler }) => {
	const setValue = value => {
		console.log(value);
	};
	return (
		<S.SignUpBody ref={pageRef}>
			<Title {...S.SignUpTitleStyle}>SIGN UP</Title>
			<Input {...S.InputStyle} setValue={setValue} placeholder={NICK_NAME_PLACE_HOLDER} />
			<Input {...S.InputStyle} setValue={setValue} placeholder={ID_PLACE_HOLDER} />
			<Input {...S.InputStyle} setValue={setValue} placeholder={EMAIL_PLACE_HOLDER} />
			<Input
				{...S.InputStyle}
				setValue={setValue}
				placeholder={PASSWORD_PLACE_HOLDER}
				type='password'
			/>
			<Input
				{...S.InputStyle}
				setValue={setValue}
				placeholder={PASSWORD_CHECK_PLACE_HOLDER}
				type='password'
			></Input>
			<S.ButtonWrapper>
				<Button {...S.ButtonStyle} onClick={currentButtonClickHandler}>
					이전으로
				</Button>
				<Button {...S.ButtonStyle} onClick={buttonClickHandler}>
					회원가입
				</Button>
			</S.ButtonWrapper>
		</S.SignUpBody>
	);
};

export default SetInfoPage;
