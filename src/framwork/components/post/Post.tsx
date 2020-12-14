import React, { FC } from 'react';
import * as S from './style';
import { PostTags } from './PostElement';

interface Props {
  title: string;
  description: string;
  tags: string[];
}

const Post: FC<Props> = ({ title, description, tags }) => {
  return (
    <S.PostElement>
      <S.PostElementTitle>{title}</S.PostElementTitle>
      <PostTags tags={tags} />
      <S.PostElementDescription>{description}</S.PostElementDescription>
    </S.PostElement>
  );
};

export default Post;
