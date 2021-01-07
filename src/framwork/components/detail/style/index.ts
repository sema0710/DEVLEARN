import styled, { css } from 'styled-components';
import { pxToRem, color } from 'src/style';

export const DetailQuestion = styled.div`
  width: ${pxToRem(1100)}rem;
  min-width: ${pxToRem(400)}rem;
  min-height: ${pxToRem(200)}rem;
  background-color: ${color.sub};
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
`;

export const DetailTitle = styled.div`
  width: 100%;
  height: ${pxToRem(50)}rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  background-color: ${color.sub};
  color: ${color.font};
  font-size: ${pxToRem(30)}rem;
  display: flex;
  align-items: center;
  &::placeholder {
    color: white;
  }
`;

export const DetailQuestionTag = styled.div`
  height: ${pxToRem(25)}rem;
  display: inline-block;
  padding: 3px 10px;
  margin: 0px 3px;
  border-radius: ${pxToRem(10)}rem;
  font-size: ${pxToRem(20)}rem;
  color: white;
`;

export const DetailQuestionTagWrapper = styled.div`
  width: 100%;
  min-width: ${pxToRem(300)}rem;
  min-height: ${pxToRem(30)}rem;
  background-color: ${color.sub};
  box-sizing: border-box;
  margin: ${pxToRem(15)}rem 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailAnswerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DetailAnswerCompactButton = styled.div<{ isCompacted: boolean }>`
  display: flex;
  margin-top: ${pxToRem(15)}rem;
  height: ${pxToRem(40)}rem;
  transform: ${props => (props.isCompacted ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: all 0.4s;
  > div:first-child {
    width: ${pxToRem(25)}rem;
    height: ${pxToRem(1)}rem;
    border-radius: ${pxToRem(5)}rem;
    background-color: ${color.font};
    transform: translate(5px, 20px) rotate(50deg);
  }
  > div:last-child {
    width: ${pxToRem(25)}rem;
    height: ${pxToRem(1)}rem;
    border-radius: ${pxToRem(5)}rem;
    background-color: ${color.font};
    transform: translate(-4px, 20px) rotate(130deg);
  }
`;

export const DetailAnswer = styled(DetailQuestion)<{ isCompacted: boolean }>`
  width: ${pxToRem(1040)}rem;
  height: ${props => (props.isCompacted ? '0px' : 'auto')};
  min-height: ${props => (props.isCompacted ? '0' : pxToRem(200))}rem;
  ${props =>
    props.isCompacted
      ? css`
          height: 90px;
          min-height: 0px;
        `
      : css`
          height: auto;
          min-height: ${pxToRem(200)}rem;
        `}
  transition: all 0.5s;
`;

export const DetailButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DetailButton = styled.button`
  width: ${pxToRem(120)}rem;
  height: ${pxToRem(40)}rem;
  background-color: ${color.main};
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const DetailWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
`;

export const DetailText = styled.div`
  font-size: ${pxToRem(20)}rem;
  color: white;
  font-weight: 100;
  padding: 3px;
  box-sizing: border-box;
`;

export const DetailList = styled(DetailText)`
  padding-left: 10px;
  margin: ${pxToRem(10)}rem 0;
  box-sizing: border-box;
`;

export const DetailHeader = styled(DetailText)`
  font-size: ${pxToRem(25)}rem;
`;

export const DetailCode = styled(DetailText)`
  > p {
    color: white;
    margin: 0 0 ${pxToRem(10)}rem 0;
    background-color: ${color.main};
    border-radius: ${pxToRem(10)}rem;
    padding: 10px;
    box-sizing: border-box;
    font-size: ${pxToRem(17)}rem;
    min-width: ${pxToRem(400)}rem;
  }
`;

export const DetailContentWrapper = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
`;
