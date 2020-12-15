import { color, pxToRem } from 'src/style';
import styled from 'styled-components';
import { defaultUserImg } from '../../../assets/mypage';

export const Mypage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0px;
  box-sizing: border-box;
`;

export const MypageWrapper = styled.div`
  width: ${pxToRem(1100)}rem;
  min-height: ${pxToRem(750)}rem;
  background-color: ${color.sub};
  padding: ${pxToRem(50)}rem;
  box-sizing: border-box;
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid ${color.font};
`;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const UserInfoImage = styled.div<{ img?: string }>`
  width: ${pxToRem(130)}rem;
  height: ${pxToRem(130)}rem;
  border-radius: ${pxToRem(65)}rem;
  background-image: url(${props => (props.img ? props.img : defaultUserImg)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const UserInfoName = styled.div`
  font-size: ${pxToRem(35)}rem;
  font-weight: 100;
  margin: 0px 0px ${pxToRem(10)}rem 0px;
  color: ${color.font};
`;

export const UserInfoDescription = styled.div`
  font-size: ${pxToRem(20)}rem;
  color: white;
  font-weight: 100;
`;

export const UserInfoTextWrapper = styled.div`
  margin-left: ${pxToRem(30)}rem;
`;
