import React, { FC } from 'react';
import Header from '../../components/header';

const useHeader = (component: React.ReactNode): JSX.Element => (
  <>
    <Header />
    {component}
  </>
);

export default useHeader;
