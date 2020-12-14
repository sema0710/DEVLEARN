import styled from 'styled-components';
import { color } from '../../../../../style';

export const Input = styled.input<{
  width: string;
  height: string;
  margin?: string;
  fontSize?: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 0px;
  border-bottom: 1px solid white;
  outline: none;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  background-color: ${color.sub};
  color: ${color.font};
  margin: ${props => props.margin};
  &::placeholder {
    color: white;
  }
`;
