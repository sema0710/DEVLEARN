import { Button, Input, Title } from 'src/framwork/components/default';
import React, { FC, useState } from 'react';
import * as S from '../style';
import { signupRequestType } from 'src/adapter/repository/dto/user/userRequest';
import { useRouter } from 'next/router';

const NICK_NAME_PLACE_HOLDER = '닉네임';
const ID_PLACE_HOLDER = '아이디';
const PASSWORD_PLACE_HOLDER = '비밀번호';
const EMAIL_PLACE_HOLDER = '이메일';

interface Props {
  pageRef: React.RefObject<HTMLDivElement>;
  currentButtonClickHandler: () => void;
  signin: (value: signupRequestType) => Promise<void>;
}

const SetInfoPage: FC<Props> = ({ pageRef, currentButtonClickHandler, signin }) => {
  const history = useRouter();
  const [nickName, setNickName] = useState<string>();
  const [id, setId] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const isDataAble = ({ nickName, id, password, email }: signupRequestType) => {
    if (nickName.length <= 0) return false;
    else if (id.length <= 0) return false;
    else if (password.length <= 0) return false;
    else if (email.length <= 0) return false;
    return true;
  };
  const buttonClickHandler = async () => {
    const data = {
      nickName,
      id,
      email,
      password,
      profileUrl: '',
    };
    if (!isDataAble(data)) return;
    await signin(data);
    history.push('/');
  };
  return (
    <S.SignUpBody ref={pageRef}>
      <Title {...S.SignUpTitleStyle}>SIGN UP</Title>
      <Input {...S.InputStyle} setValue={setNickName} placeholder={NICK_NAME_PLACE_HOLDER} />
      <Input {...S.InputStyle} setValue={setId} placeholder={ID_PLACE_HOLDER} />
      <Input {...S.InputStyle} setValue={setEmail} placeholder={EMAIL_PLACE_HOLDER} />
      <Input
        {...S.InputStyle}
        setValue={setPassword}
        placeholder={PASSWORD_PLACE_HOLDER}
        type='password'
      />
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
