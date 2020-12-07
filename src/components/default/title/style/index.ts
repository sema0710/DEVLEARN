import { color, pxToRem } from 'src/style';
import styled from 'styled-components';

export const Title = styled.div<{ margin: string }>`
	font-size: ${pxToRem(60)}rem;
	color: ${color.font};
	font-weight: 100;
	margin-bottom: ${pxToRem(60)}rem;
	text-align: center;
	margin: ${props => props.margin};
`;

export const SubTitle = styled.div<{ margin: string }>`
	font-size: ${pxToRem(30)}rem;
	color: ${color.font};
	font-weight: 100;
	margin-bottom: ${pxToRem(30)}rem;
	text-align: center;
	margin: ${props => props.margin};
`;
