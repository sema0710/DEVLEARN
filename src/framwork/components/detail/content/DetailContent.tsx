import React, { FC } from 'react';
import * as S from '../style';
import { IContent } from 'src/domain/entity/post/interface/IPostEntity';

interface Props {
  contents: IContent[];
}

const renderText = (text: string, index: number) => {
  return <S.DetailText key={text + index}>{text}</S.DetailText>;
};

const renderList = (textList: string[], index: number) => {
  return textList.map((text, listIndex) => (
    <S.DetailList key={text + index + listIndex}>
      {listIndex + 1}. {text}
    </S.DetailList>
  ));
};

const renderTitle = (text: string, index: number) => {
  return <S.DetailHeader key={text + index}>{text}</S.DetailHeader>;
};

const renderCode = (code: string, index: number) => {
  return (
    <S.DetailCode key={code + index}>
      <p>{code}</p>
    </S.DetailCode>
  );
};

const renderContentFunc = {
  text: renderText,
  title: renderTitle,
  code: renderCode,
  list: renderList,
};

const DetailContent: FC<Props> = ({ contents }) => {
  const renderContent = (contents: IContent[]) =>
    contents.map((content, index) => renderContentFunc[content.type](content.content, index));
  return <S.DetailContentWrapper>{renderContent(contents)}</S.DetailContentWrapper>;
};

export default DetailContent;
