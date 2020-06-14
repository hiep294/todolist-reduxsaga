import React from 'react';
import Layout from './Layout';
import Body from './Content';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state-management/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Body />
        </Layout>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
