import React, { FC } from 'react';
import * as S from './style';
import { HeaderTitle, HeaderMenu } from './headerMenu';

const Header: FC = () => {
  return (
    <S.Header>
      <HeaderTitle />
      <HeaderMenu />
    </S.Header>
  );
};

export default Header;
