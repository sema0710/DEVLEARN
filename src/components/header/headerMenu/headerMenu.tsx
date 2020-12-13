import React, { FC } from 'react';
import HeaderInput from './headerInput';
import * as S from '../style';

const HeaderMenu: FC = () => {
  return (
    <S.HeaderMenuWrapper>
      <HeaderInput />
      <S.HeaderMypageButton />
    </S.HeaderMenuWrapper>
  );
};

export default HeaderMenu;
