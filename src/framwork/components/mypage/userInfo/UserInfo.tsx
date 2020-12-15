import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  userName: string;
  description: string;
  img?: string;
}

const UserInfo: FC<Props> = ({ img, userName, description }) => {
  return (
    <S.UserInfoWrapper>
      <S.UserInfoImage img={img} />
      <S.UserInfoTextWrapper>
        <S.UserInfoName>{userName}</S.UserInfoName>
        <S.UserInfoDescription>{description}</S.UserInfoDescription>
      </S.UserInfoTextWrapper>
    </S.UserInfoWrapper>
  );
};

export default UserInfo;
