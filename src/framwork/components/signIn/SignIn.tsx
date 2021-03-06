import { Input, Button, Title } from 'src/framwork/components/default';
import React, { FC } from 'react';
import * as S from './style';
import TextButton from './TextButton/TextButton';

const ID_PLACE_HOLDER = '아이디';
const PASSWORD_PLACE_HOLDER = '비밀번호';

const SignIn: FC = () => {
  const setValue = value => {
    console.log(value);
  };
  return (
    <S.SignIn>
      <S.SignInBody>
        <Title>LOGIN</Title>
        <Input {...S.InputStyle} setValue={setValue} placeholder={ID_PLACE_HOLDER} />
        <Input
          {...S.InputStyle}
          setValue={setValue}
          placeholder={PASSWORD_PLACE_HOLDER}
          type='password'
        />
        <TextButton />
        <S.SignInTextButton />
        <Button {...S.ButtonStyle}>로그인</Button>
      </S.SignInBody>
    </S.SignIn>
  );
};

export default SignIn;
