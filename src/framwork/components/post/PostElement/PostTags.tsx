import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  tags: string[];
}

const PostTags: FC<Props> = ({ tags }) => {
  const setTagsElement = tags => {
    return tags.map((tag, index) => <S.PostElementTag key={tag + index}>{tag}</S.PostElementTag>);
  };
  return <S.PostElementTagWrapper>{setTagsElement(tags)}</S.PostElementTagWrapper>;
};

export default PostTags;
