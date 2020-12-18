import React, { FC } from 'react';
import * as S from '../style';

const WritePostTitle: FC = ({ children }) => {
  return <S.WritePostTitle placeholder='제목을 입력하세요.'>{children}</S.WritePostTitle>;
};

export default WritePostTitle;
