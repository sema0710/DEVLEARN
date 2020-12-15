import React from 'react';
import Background from '../../components/default/background';

const useBackground = (component: React.ReactNode) => {
  return <Background>{component}</Background>;
};

export default useBackground;
