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
  min-width: ${pxToRem(400)}rem;
  min-height: ${pxToRem(855)}rem;
  background-color: ${color.sub};
  padding: ${pxToRem(30)}rem;
  box-sizing: border-box;
  margin: ${pxToRem(30)}rem;
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
  width: 93%;
  min-width: ${pxToRem(300)}rem;
  min-height: ${pxToRem(30)}rem;
  background-color: ${color.sub};
  padding: 0px 3.5% 0px 3.5%;
  box-sizing: border-box;
  margin: ${pxToRem(15)}rem 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const WritePostTag = styled.div<{ cursored: boolean }>`
  height: ${pxToRem(25)}rem;
  display: inline-block;
  padding: 3px 10px;
  margin: 0px 3px;
  border-radius: ${pxToRem(10)}rem;
  background-color: ${props => (props.cursored ? color.fail : color.main)};
  font-size: ${pxToRem(20)}rem;
  color: white;
`;

export const WritePostTagInput = styled.input`
  display: block;
  border: none;
  outline: none;
  background-color: ${color.sub};
  font-size: ${pxToRem(20)}rem;
  color: ${color.font};
  &::placeholder {
    color: ${color.font};
  }
`;
