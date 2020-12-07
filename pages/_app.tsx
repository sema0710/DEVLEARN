import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/data/store';
import GlobalStyle from '../src/style/GlobalStyle';

export default class RootApp extends App {
	render() {
		const { Component, ...other } = this.props;
		return (
			<>
				<GlobalStyle />
				{/* <Provider store={store}> */}
				<Component {...other}></Component>
				{/* </Provider> */}
			</>
		);
	}
}
