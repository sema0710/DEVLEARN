import { color } from 'src/style';
import styled from 'styled-components';

export const Button = styled.button<{
	width: string;
	height: string;
	fontSize?: string;
	margin?: string;
}>`
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${color.main};
	border-radius: 10px;
	color: white;
	border: none;
	font-weight: 100;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '20px')};
	margin: ${props => props.margin};
`;
