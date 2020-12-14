import React, { FC, useState } from 'react';
import * as S from '../style';
import { fileToUrl } from '../../../util/file';

const ABLE_FILE_TYPE = '.jpg,.png,.jpeg';

const ImgInput: FC = () => {
  const [imgUrl, urlChange] = useState<string>('');
  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const fileUrl = fileToUrl(file);
    urlChange(fileUrl);
  };
  return (
    <S.SignUpUserImgWrapper>
      <S.SignUpUserImg image={imgUrl} />
      <S.SignUpUserImgInput type='file' onChange={fileChangeHandler} accept={ABLE_FILE_TYPE} />
    </S.SignUpUserImgWrapper>
  );
};

export default ImgInput;
