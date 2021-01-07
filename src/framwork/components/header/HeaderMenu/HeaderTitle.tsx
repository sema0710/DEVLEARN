import React, { FC } from 'react';
import Link from 'next/link';
import * as S from '../style';

const HeaderTitle: FC = () => {
  return (
    <S.HeaderTitle>
      <Link href='/'>DEVLEARN</Link>
    </S.HeaderTitle>
  );
};

export default HeaderTitle;
