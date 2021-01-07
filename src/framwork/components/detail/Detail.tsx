import React, { FC } from 'react';
import * as S from './style';
import { DetailQuestion, DetailAnswer } from './content';
import IPostEntity from 'src/domain/entity/post/interface';
import DetailAnswerInput from './content/DetailAnswerInput';

interface Props {
  question: IPostEntity;
  answers: IPostEntity[];
}

const Detail: FC<Props> = ({ question, answers }) => {
  return (
    <S.DetailWrapper>
      <div>
        <DetailQuestion {...question} />
        {answers.map(answer => (
          <DetailAnswer key={answer.title} {...answer} />
        ))}
        <DetailAnswerInput />
      </div>
    </S.DetailWrapper>
  );
};

export default Detail;
