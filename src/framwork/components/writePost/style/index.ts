import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const WritePost = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WritePostBody = styled.div`
  width: ${pxToRem(1100)}rem;
  height: ${pxToRem(915)}rem;
  background-color: ${color.sub};
  padding: ${pxToRem(30)}rem;
  box-sizing: border-box;
`;

export const WritePostTitle = styled.input`
  width: 100%;
  height: ${pxToRem(80)}rem;
  padding: 0px ${pxToRem(20)}rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  background-color: ${color.sub};
  color: ${color.font};
  font-size: ${pxToRem(30)}rem;
  &::placeholder {
    color: white;
  }
`;

export const WritePostTagWrapper = styled.div`
  width: 100%;
  height: ${pxToRem(30)}rem;
  background-color: ${color.sub};
  padding: 0px ${pxToRem(20)}rem;
  box-sizing: border-box;
`;

export const WritePostTag = styled.div`
  height: ${pxToRem(25)}rem;
  border-radius: ${pxToRem(30)}rem;
  background-color: ${color.main};
  font-size: ${pxToRem(20)}rem;
  color: white;
`;

export const WritePostTagInput = styled.input`
  width: auto;
  display: block;
  height: 100%;
  border: none;
  outline: none;
  background-color: ${color.sub};
  font-size: ${pxToRem(20)}rem;
  color: ${color.font};
  &::placeholder {
    color: ${color.font};
  }
`;
