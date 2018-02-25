import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const ReduxConnect = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ReduxConnect />, document.getElementById('root'));
registerServiceWorker();
