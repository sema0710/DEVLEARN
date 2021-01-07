import Editor from 'components/editor';
import React from 'react';
import * as S from '../style';

const DetailAnswerInput = () => {
  return (
    <S.DetailAnswerWrapper>
      <S.DetailAnswer isCompacted={false}>
        <Editor save={() => console.log('')} data={{}} placeholder='답변을 입력하세요' />
        <S.DetailButtonWrapper>
          <S.DetailButton>답변하기</S.DetailButton>
        </S.DetailButtonWrapper>
      </S.DetailAnswer>
    </S.DetailAnswerWrapper>
  );
};

export default DetailAnswerInput;
