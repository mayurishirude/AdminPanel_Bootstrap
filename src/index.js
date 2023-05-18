import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import { store } from './redux/store';
// import { Provider } from 'react-redux';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Main />
    {/* </Provider> */}
  </React.StrictMode>
);
