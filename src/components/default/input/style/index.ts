import styled from 'styled-components';
import { color, pxToRem } from '../../../../style';

export const Input = styled.input<{ width: number; height: number }>`
	width: ${props => pxToRem(props.width)};
	height: ${props => pxToRem(props.height)};
	border: 0px 0px 1px 0px white;
	background-color: ${color.sub};
	color: ${color.font};
`;
