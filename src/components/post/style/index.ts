import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const PostElement = styled.div`
  width: 100%;
  color: ${color.font};
  border-bottom: 1px solid ${color.font};
`;

export const PostElementTitle = styled.h1`
  font-weight: 100;
  font-size: ${pxToRem(30)}rem;
  text-decoration: underline;
`;

export const PostElementTagWrapper = styled.div`
  display: flex;
`;

export const PostElementTag = styled.div`
  font-weight: 100;
  font-size: ${pxToRem(15)}rem;
`;

export const PostElementDescription = styled.div`
  font-weight: 100;
  font-size: ${pxToRem(20)}rem;
`;
