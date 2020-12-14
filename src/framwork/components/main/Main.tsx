import React, { FC } from 'react';
import MainPost from './post/MainPost';
import * as S from './style';
import IPostEntity from '../../../domain/entity/post';

interface Props {
  postList: IPostEntity[];
}

const Main: FC<Props> = ({ postList }) => {
  return (
    <S.Main>
      <MainPost postList={postList} />
    </S.Main>
  );
};

export default Main;
