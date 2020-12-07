import { color, pxToRem } from 'src/style';
import styled, { css } from 'styled-components';

export const SignUp = styled.div`
	width: 100%;
	min-width: ${pxToRem(900)}rem;
	min-height: 100vh;
	background-color: ${color.main};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SignUpTitle = styled.div`
	text-align: center;
	font-weight: 100;
	color: white;
`;

export const SignUpScrollWrapper = styled.div`
	width: ${pxToRem(900)}rem;
	height: ${pxToRem(660)}rem;
	overflow-x: hidden;
`;

export const SignUpBody = styled.div`
	width: ${pxToRem(900)}rem;
	height: ${pxToRem(660)}rem;
	background-color: ${color.sub};
	padding: ${pxToRem(40)}rem ${pxToRem(200)}rem;
	box-sizing: border-box;
`;

export const SignUpScrollBody = styled(SignUpBody)`
	width: ${pxToRem(1800)}rem;
	padding: 0px;
	display: flex;
`;

export const SignUpUserImgWrapper = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SignUpUserImg = styled.div<{ image?: string }>`
	width: ${pxToRem(150)}rem;
	height: ${pxToRem(150)}rem;
	border-radius: ${pxToRem(75)}rem;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
	${({ image }) =>
		image
			? css`
					background-image: ${image};
			  `
			: css`
					background-color: white;
			  `}
`;

export const SignUpUserImgInput = styled.input`
	display: none;
`;

export const ButtonStyle = {
	width: '100%',
	height: '50px',
	margin: '100px 0px 0px 0px',
};
