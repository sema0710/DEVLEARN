import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/framwork/module/redux/store';
import GlobalStyle from '../src/style/GlobalStyle';
import Header from '../src/framwork/components/header';
import Background from '../src/framwork/components/default/background';

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Background>
        <Header />
        <GlobalStyle />
        <Provider store={store}>
          <Component {...other} />
        </Provider>
      </Background>
    );
  }
}
