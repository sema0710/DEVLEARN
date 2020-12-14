import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${color.sub};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainPostWrapper = styled.div`
  width: ${pxToRem(1000)}rem;
`;
