import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from "redux";
import taskreducer from "./reducers/reducer"
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Header.jsx';

var store = createStore(taskreducer)

store.subscribe(() => {
  console.log(store.getState());
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
