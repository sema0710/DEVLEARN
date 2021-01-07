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
        <Editor save={sth => console.log(sth)} data={{}} autoSaveButtonAble={true} />
      </S.WritePostBody>
    </S.WritePost>
  );
};

export default WritePost;
