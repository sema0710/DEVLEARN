import React, { FC, useState } from 'react';
import { IContent } from 'src/domain/entity/post/interface/IPostEntity';
import * as S from '../style';
import DetailContent from './DetailContent';

interface Props {
  title: string;
  content: IContent[];
}

const DetailAnswer: FC<Props> = ({ title, content }) => {
  const [isCompacted, setIsCompacted] = useState(false);
  const compactButtonClickHandler = () => {
    setIsCompacted(isCompacted => !isCompacted);
  };
  return (
    <S.DetailAnswerWrapper>
      <S.DetailAnswerCompactButton isCompacted={isCompacted} onClick={compactButtonClickHandler}>
        <div />
        <div />
      </S.DetailAnswerCompactButton>
      <S.DetailAnswer isCompacted={isCompacted}>
        {isCompacted ? '' : <DetailContent contents={content} />}
      </S.DetailAnswer>
    </S.DetailAnswerWrapper>
  );
};

export default DetailAnswer;
