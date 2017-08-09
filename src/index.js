import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Reducer from './reducers/reducer'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App store={store}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
