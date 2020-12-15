import { color, pxToRem } from 'src/style';
import styled from 'styled-components';
import { searchImg, searchHoverImg } from '../../../assets/header';

export const Header = styled.div`
  width: 100%;
  height: ${pxToRem(70)}rem;
  background-color: ${color.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const HeaderTitle = styled.div`
  font-size: ${pxToRem(40)}rem;
  color: white;
  font-weight: 100;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
`;

export const HeaderMypageButton = styled.button<{ image?: string }>`
  width: ${pxToRem(40)}rem;
  height: ${pxToRem(40)}rem;
  border-radius: ${pxToRem(30)}rem;
  background-image: url(${props => props.image});
  border: none;
  margin-left: ${pxToRem(10)}rem;
  outline: none;
`;

export const HeaderSearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 10px;
  > div {
    width: 1px;
    height: 0px;
    background-color: white;
    transition: width 0.3s;
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
  > input:focus ~ button {
    background-image: url(${searchHoverImg});
  }
  > input:not(:focus) ~ button {
    background-image: url(${searchImg});
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

export const HeaderSearchButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${color.header};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0px, -50%);
  border: none;
  background-image: url(${searchImg});
  transition: 0.3s;
`;
