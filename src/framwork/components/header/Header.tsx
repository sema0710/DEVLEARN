import React, { FC } from 'react';
import * as S from './style';
import { HeaderTitle, HeaderMenu } from './HeaderMenu';

const Header: FC = () => {
  return (
    <S.Header>
      <HeaderTitle />
      <HeaderMenu />
    </S.Header>
  );
};

export default Header;
