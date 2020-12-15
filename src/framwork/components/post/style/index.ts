import { color, pxToRem } from 'src/style';
import styled, { css } from 'styled-components';

export const PostElement = styled.div`
  width: 100%;
  color: ${color.font};
  border-bottom: 1px solid ${color.font};
  padding: ${pxToRem(10)}rem ${pxToRem(40)}rem ${pxToRem(20)}rem ${pxToRem(40)}rem;
  box-sizing: border-box;
  margin: ${pxToRem(20)}rem 0px;
`;

export const PostElementTitle = styled.p`
  font-weight: 100;
  font-size: ${pxToRem(35)}rem;
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s;
  box-sizing: border-box;
  border-spacing: 0px;
  cursor: pointer;
  line-height: 0.9;
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

const successIcon = css`
  width: ${pxToRem(35)}rem;
  height: 1px;
  background-color: ${color.success};
  transform: ${`translate(${pxToRem(20)}rem, ${pxToRem(20)}rem) rotate(135deg)`};
  &::after {
    content: '';
    width: ${pxToRem(20)}rem;
    display: inline-block;
    height: 1px;
    background-color: ${color.success};
    transform: ${`translate(${pxToRem(25)}rem, ${pxToRem(-3)}rem) rotate(-90deg)`};
  }
`;

const failIcon = css`
  width: ${pxToRem(40)}rem;
  height: 1px;
  background-color: ${color.fail};
  transform: ${`translate(${pxToRem(0)}rem, ${pxToRem(20)}rem) rotate(45deg)`};
  &::after {
    width: ${pxToRem(40)}rem;
    content: '';
    display: inline-block;
    background-color: ${color.fail};
    height: 1px;
    transform: ${`translate(0px, ${pxToRem(-13)}rem) rotate(90deg)`};
  }
`;

export const PostElementCheckIcon = styled.div<{ isResolved: boolean }>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: ${`translate(${pxToRem(20)}rem, 8px)`};
  > div {
    display: inline-block;
    transition: all 0.3s;
    ${props => (props.isResolved ? successIcon : failIcon)};
    position: absolute;
  }
  &:hover > div {
    ${props => (props.isResolved ? failIcon : successIcon)};
  }
`;

export const MainPostWrapper = styled.div`
  width: ${pxToRem(1000)}rem;
`;
