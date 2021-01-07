import React, { FC } from 'react';
import useQuestion from 'src/framwork/util/redux/post/useQuestion';
import Detail from '../../components/detail';

const DetailContainer: FC = () => {
  const { detail, answers } = useQuestion();
  return <Detail question={detail} answers={answers} />;
};

export default DetailContainer;
