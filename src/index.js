import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import App from './App';
import createBrowserHistory from './modules/history';
import { CookiesProvider } from 'react-cookie';

const customHistory = createBrowserHistory; // 라우터를 위한 history 객체 얻기위해서?
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory // yield geContext('history'); 로 history 객체 얻을수 있다.
  }
}); // 사가 미들웨어 만들기

const store = createStore( // 스토어 만들어주는 함수
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)) // 미들웨어 설정. logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
);
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

sagaMiddleware.run(rootSaga); // 루트 사가 실행시켜줌. 이 코드는 반드시 스토어 생성 후에 실행되어야함.

ReactDOM.render(// 어디서든 리덕스 store에 접근하도록 provider로 감싸기
  <Provider store={store}>
    <CookiesProvider >
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
