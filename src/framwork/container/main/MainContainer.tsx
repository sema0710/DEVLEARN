import React from 'react';
import Main from '../../components/main';
import { usePost } from '../../util/redux/post';

const MainContainer = () => {
  const postList = usePost();
  return <Main postList={postList} />;
};

export default MainContainer;
