import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
  background-color: ${color.main};
  display: flex;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
`;

export const MainPostWrapper = styled.div`
  width: ${pxToRem(1000)}rem;
  height: calc(100vh - 70px);
`;
