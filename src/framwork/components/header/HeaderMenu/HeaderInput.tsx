import React, { FC } from 'react';
import * as S from '../style';

const HeaderInput: FC = () => {
  return (
    <S.HeaderSearchInputWrapper>
      <S.HeaderSearchInput />
      <div />
      <S.HeaderSearchButton />
    </S.HeaderSearchInputWrapper>
  );
};

export default HeaderInput;
