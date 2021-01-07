import React, { FC } from 'react';
import { IContent } from 'src/domain/entity/post/interface/IPostEntity';
import * as S from '../style';
import DetailContent from './DetailContent';

interface Props {
  title: string;
  tags: string[];
  content: IContent[];
}

const DetailQuestion: FC<Props> = ({ title, tags, content }) => {
  const renderTags = (tags: string[]) => {
    return tags.map((tag, index) => (
      <S.DetailQuestionTag key={tag + index}>{tag}</S.DetailQuestionTag>
    ));
  };
  return (
    <S.DetailQuestion>
      <S.DetailTitle>{title}</S.DetailTitle>
      <S.DetailQuestionTagWrapper>{renderTags(tags)}</S.DetailQuestionTagWrapper>
      <DetailContent contents={content} />
    </S.DetailQuestion>
  );
};

export default DetailQuestion;
