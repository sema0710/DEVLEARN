import React, { FC, useState } from 'react';
import * as S from '../style';

interface Props {
  tags: string[];
}

const WritePostTag: FC<Props> = () => {
  const [tagDummy, setTags] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number>(-1);
  const inputKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const key = event.key;
    if (key === 'Enter' && value.length > 0) {
      copyAndSetTag(value, tagDummy);
      event.target.value = '';
    }
  };
  const inputKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const key = event.key;
    if (isDeleteTagAble(key, value, tagDummy)) {
      backspaceButtonClickHandler(tagDummy, cursor);
    }
    if (value.length > 0) return;
    if (key === 'ArrowRight') {
      rightArrowButtonClickHandler(cursor);
    } else if (key === 'ArrowLeft') {
      leftArrowButtonClickHandler(cursor, tagDummy);
    }
  };
  const isDeleteTagAble = (key: string, value: string, tags: string[]) => {
    if (key === 'Backspace' && value.length <= 0 && tags.length > 0) return true;
    return false;
  };
  const backspaceButtonClickHandler = (tags, cursor) => {
    const newTags = getRemovedTags(tags, tags.length - 1 - cursor);
    setTags(newTags);
  };
  const leftArrowButtonClickHandler = (cursor, tags) => {
    if (cursor + 1 < tags.length) {
      setCursor(cursor => cursor + 1);
    }
  };
  const rightArrowButtonClickHandler = cursor => {
    if (cursor > -1) {
      setCursor(cursor => cursor - 1);
    }
  };
  const copyAndSetTag = (tagText: string, tags: string[]) => {
    const buffer: string[] = [...tags, tagText];
    setTags(buffer);
  };
  const renderTags = (tags: string[]): React.ReactNode[] => {
    return tags.map((tag, index) => (
      <S.WritePostTag key={tag + index} cursored={index === tags.length - 1 - cursor}>
        {tag}
      </S.WritePostTag>
    ));
  };
  const getRemovedTags = (tags: string[], deleteIndex: number): string[] => {
    console.log(deleteIndex);
    return tags.filter((tag, index) => index !== deleteIndex);
  };
  return (
    <S.WritePostTagWrapper>
      {renderTags(tagDummy)}
      <S.WritePostTagInput
        onKeyPress={inputKeyPressHandler}
        onKeyDown={inputKeyDownHandler}
        placeholder='태그를 입력하세요.'
      />
    </S.WritePostTagWrapper>
  );
};

export default WritePostTag;
