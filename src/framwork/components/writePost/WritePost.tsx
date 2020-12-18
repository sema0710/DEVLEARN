import React, { FC } from 'react';
import * as S from './style';
import { WritePostTag, WritePostTitle } from './editor';
import Editor from '../editor';

const WritePost: FC = () => {
  return (
    <S.WritePost>
      <S.WritePostBody>
        <WritePostTitle />
        <WritePostTag tags={[]} />
        <Editor />
      </S.WritePostBody>
    </S.WritePost>
  );
};

export default WritePost;
