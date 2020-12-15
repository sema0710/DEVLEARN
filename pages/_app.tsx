import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/framwork/module/redux/store';
import GlobalStyle from '../src/style/GlobalStyle';
import { useHeader, useBackground } from '../src/framwork/util/style';

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return useBackground(
      useHeader(
        <>
          <GlobalStyle />
          <Provider store={store}>
            <Component {...other} />
          </Provider>
        </>,
      ),
    );
  }
}
