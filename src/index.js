import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

/*const render = Component => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
    , document.getElementById('main')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) })
}*/

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));