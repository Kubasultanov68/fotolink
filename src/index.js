import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import './styles/style.scss';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "./features/store";
import Progress from "./components/Progress/Progress";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Provider store={store}>
          <Progress/>
          <App />
          <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
      </Provider>
  </BrowserRouter>
);
