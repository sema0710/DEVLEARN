import React, { FC } from 'react';
import Header from '../../components/header';

const useHeader: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default useHeader;
