import React, { FC } from 'react';
import IPostEntity from '../../../../domain/entity/post';
import Post from '../../post';
import * as S from '../style';

interface Props {
  postList: IPostEntity[];
}

const MainPost: FC<Props> = ({ postList }) => {
  const setPostElement = (postList: IPostEntity[]) => {
    return postList.map((post, index) => <Post key={index + post.title} {...post} />);
  };
  return <S.MainPostWrapper>{setPostElement(postList)}</S.MainPostWrapper>;
};

export default MainPost;
