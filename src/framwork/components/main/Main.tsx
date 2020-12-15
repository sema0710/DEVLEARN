import React, { FC } from 'react';
import * as S from './style';
import IPostEntity from '../../../domain/entity/post';
import PostList from '../post/PostList';

interface Props {
  postList: IPostEntity[];
}

const Main: FC<Props> = ({ postList }) => {
  return (
    <S.Main>
      <PostList postList={postList} />
    </S.Main>
  );
};

export default Main;
