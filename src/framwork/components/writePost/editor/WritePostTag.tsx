import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  tags: string[];
}

const WritePostTag: FC<Props> = ({ tags }) => {
  const tagComponents: React.ReactNode[] = tags.map(tag => (
    <S.WritePostTag key={tag + 'tag'}>{tag}</S.WritePostTag>
  ));
  return (
    <S.WritePostTagWrapper>
      {tagComponents}
      <S.WritePostTagInput placeholder='태그를 입력하세요.' />
    </S.WritePostTagWrapper>
  );
};

export default WritePostTag;
