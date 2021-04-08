import { useState } from 'react';

const userEntity = () => {
  const [user, setUser] = useState();
  return {
    user,
    setUser,
  };
};

export default userEntity;