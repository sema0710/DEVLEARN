import React, { FC } from 'react';
import HeaderInput from './headerInput';
import * as S from '../style';

const HeaderMenu: FC = () => {
  return (
    <S.HeaderMenuWrapper>
      <HeaderInput />
    </S.HeaderMenuWrapper>
  );
};

export default HeaderMenu;
