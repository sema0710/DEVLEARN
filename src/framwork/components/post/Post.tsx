import React, { FC } from 'react';
import * as S from './style';
import { PostTags } from './PostElement';

interface Props {
  title: string;
  description: string;
  tags: string[];
  isResolved: boolean;
}

const Post: FC<Props> = ({ title, description, tags, isResolved }) => {
  return (
    <S.PostElement>
      <S.PostElementTitle>{title}</S.PostElementTitle>
      <S.PostElementCheckIcon isResolved={isResolved}>
        <div></div>
      </S.PostElementCheckIcon>
      <PostTags tags={tags} />
      <S.PostElementDescription>{description}</S.PostElementDescription>
    </S.PostElement>
  );
};

export default Post;
