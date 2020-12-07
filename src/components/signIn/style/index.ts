import styled from 'styled-components';
import { color, pxToRem } from '../../../style';

export const SignIn = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: ${color.main};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SignInBody = styled.div`
	width: ${pxToRem(900)}rem;
	height: ${pxToRem(660)}rem;
	background-color: ${color.sub};
	padding: ${pxToRem(40)}rem ${pxToRem(200)}rem;
	box-sizing: border-box;
`;

export const SignInTitle = styled.div`
	font-size: ${pxToRem(60)}rem;
	color: ${color.font};
	font-weight: 100;
	margin-bottom: ${pxToRem(110)}rem;
	text-align: center;
`;

export const InputStyle = {
	width: '100%',
	height: '50px',
	margin: '0px 0px 50px 0px',
};

export const ButtonStyle = {
	width: '100%',
	height: '50px',
	margin: '30px 0px 0px 0px',
};
