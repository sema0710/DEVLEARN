import React, { FC, useCallback, useRef, useState } from 'react';
import * as S from './style';
import ImgSettingPage from './ImgSettingPage';
import SetInfoPage from './SetInfoPage';
import { signup } from 'src/adapter/repository/user/UserRepository';

const SignUp: FC = () => {
  const [image, setImage] = useState<string>('');
  const convertImageAndSetImage = (file: File) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  const imgSettingPageRef = useRef<HTMLDivElement>();
  const setInfoPageRef = useRef<HTMLDivElement>();
  const moveImgSettingPage = useCallback(() => {
    imgSettingPageRef.current.scrollIntoView();
  }, [imgSettingPageRef]);
  const moveSetInfoPage = useCallback(() => {
    setInfoPageRef.current.scrollIntoView();
  }, [setInfoPageRef]);
  const nextButtonClickHandler = useCallback(() => {
    moveSetInfoPage();
  }, [moveSetInfoPage]);
  const currentButtonClickHandler = useCallback(() => {
    moveImgSettingPage();
  }, [moveImgSettingPage]);
  return (
    <S.SignUp>
      <S.SignUpScrollWrapper>
        <S.SignUpScrollBody>
          <ImgSettingPage
            pageRef={imgSettingPageRef}
            buttonClickHandler={nextButtonClickHandler}
            setImg={convertImageAndSetImage}
          />
          <SetInfoPage
            pageRef={setInfoPageRef}
            currentButtonClickHandler={currentButtonClickHandler}
            signin={signup}
          />
        </S.SignUpScrollBody>
      </S.SignUpScrollWrapper>
    </S.SignUp>
  );
};

export default SignUp;
