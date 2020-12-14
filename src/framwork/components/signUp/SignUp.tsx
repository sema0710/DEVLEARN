import React, { FC, useCallback, useEffect, useRef } from 'react';
import * as S from './style';
import ImgSettingPage from './ImgSettingPage';
import SetInfoPage from './SetInfoPage';

const SignUp: FC = () => {
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
  const submitButtonClickHandler = useCallback(() => {
    console.log('hihi');
  }, []);
  return (
    <S.SignUp>
      <S.SignUpScrollWrapper>
        <S.SignUpScrollBody>
          <ImgSettingPage
            pageRef={imgSettingPageRef}
            buttonClickHandler={nextButtonClickHandler}
            setImg={(file: File) => {
              console.log(file);
            }}
          />
          <SetInfoPage
            pageRef={setInfoPageRef}
            currentButtonClickHandler={currentButtonClickHandler}
            buttonClickHandler={submitButtonClickHandler}
          />
        </S.SignUpScrollBody>
      </S.SignUpScrollWrapper>
    </S.SignUp>
  );
};

export default SignUp;
