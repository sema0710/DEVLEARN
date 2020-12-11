import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: ${pxToRem(70)}rem;
  background-color: ${color.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  box-sizing: border-box;
`;

export const HeaderTitle = styled.div`
  font-size: ${pxToRem(40)}rem;
  color: white;
  font-weight: 100;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
`;

export const HeaderMypageButton = styled.button`
  width: ${pxToRem(60)}rem;
  height: ${pxToRem(60)}rem;
  border-radius: ${pxToRem(30)}rem;
`;

export const HeaderSearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  > div {
    width: 1px;
    height: 0px;
    background-color: white;
    transition: width 0.5s;
    position: absolute;
    bottom: 0;
    height: 1px;
  }
  > input:focus + div {
    width: 100%;
  }
  > input:not(:focus) + div {
    width: 0px;
  }
`;

export const HeaderSearchInput = styled.input`
  width: ${pxToRem(300)}rem;
  height: ${pxToRem(40)}rem;
  border: none;
  border-bottom: 1px solid ${color.sub};
  background-color: ${color.header};
  outline: none;
  color: white;
  font-size: 20px;
`;
