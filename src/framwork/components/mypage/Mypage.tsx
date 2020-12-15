import PostList from 'components/post/PostList';
import React, { FC } from 'react';
import IPostEntity from 'src/domain/entity/post/interface';
import IUserEntity from 'src/domain/entity/user/interface';
import * as S from './style';
import UserInfo from './userInfo';

interface Props {
  user: IUserEntity;
  post: IPostEntity[];
}

const Mypage: FC<Props> = ({ user, post }) => {
  return (
    <S.Mypage>
      <S.MypageWrapper>
        <UserInfo {...user} />
        <PostList postList={post} />
      </S.MypageWrapper>
    </S.Mypage>
  );
};

export default Mypage;
