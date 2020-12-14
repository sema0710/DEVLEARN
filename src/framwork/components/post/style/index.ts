import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const PostElement = styled.div`
  width: 100%;
  color: ${color.font};
  border-bottom: 1px solid ${color.font};
  padding: ${pxToRem(10)}rem ${pxToRem(40)}rem;
  box-sizing: border-box;
  margin: ${pxToRem(20)}rem 0px;
`;

export const PostElementTitle = styled.h1`
  font-weight: 100;
  font-size: ${pxToRem(35)}rem;
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid white;
    box-sizing: border-box;
  }
`;

export const PostElementTagWrapper = styled.div`
  display: flex;
  height: ${pxToRem(20)}rem;
  margin-bottom: 10px;
`;

export const PostElementTag = styled.div`
  font-weight: 100;
  font-size: ${pxToRem(15)}rem;
  cursor: pointer;
`;

export const PostElementDescription = styled.div`
  font-weight: 100;
  font-size: ${pxToRem(25)}rem;
`;
