import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const EditorSaveButton = styled.button`
  width: ${pxToRem(150)}rem;
  height: ${pxToRem(60)}rem;
  background-color: ${color.main};
  border: none;
  outline: none;
  color: white;
  font-size: ${pxToRem(20)}rem;
  font-weight: 100;
  border-radius: 3px;
  position: fixed;
  bottom: ${pxToRem(40)}rem;
`;

export const EditorSaveButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const EditorWrapper = styled.div``;
