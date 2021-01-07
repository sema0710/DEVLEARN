import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background-color: ${color.main};
  padding-top: ${pxToRem(70)}rem;
  min-width: ${pxToRem(1300)}rem;
`;
