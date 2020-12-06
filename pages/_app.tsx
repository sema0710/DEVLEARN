import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/data/store';

export default class RootApp extends App {
	render() {
		const { Component, ...other } = this.props;
		return (
			<Container>
				<Provider store={store}>
					<Component {...other}></Component>
				</Provider>
			</Container>
		);
	}
}
