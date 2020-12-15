import React, { FC } from 'react';
import { useMyPost } from 'src/framwork/util/redux/post';
import { useUser } from 'src/framwork/util/redux/user';
import Mypage from '../../components/mypage';

const MypageContainer: FC = () => {
  const user = useUser();
  const mypost = useMyPost();
  return <Mypage user={user} post={mypost} />;
};

export default MypageContainer;
