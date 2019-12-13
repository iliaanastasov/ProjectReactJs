import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider as AlertProvider } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './navigation/app';
import * as serviceWorker from './serviceWorker';

const options = {
    position: 'top center',
    timeout: 5000,
   
    type:"info",
    transition:"fade"
  }

  const AlertTemplate = ({  message, close }) => (
      <div className="alertStyle">
    <div >
      {message}
    </div>
     <button onClick={close}>X</button>
     </div>
  )
   
  const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )
   

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
