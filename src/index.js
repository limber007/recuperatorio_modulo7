import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

const basename = process.env.NODE_ENV === 'production' ? '/recuperatorio_modulo7' : '/';

ReactDOM.render(
  <Provider store={store}>
    <Router basename={basename}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
