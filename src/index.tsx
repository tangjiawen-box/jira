import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DevTools, loadServer } from "jira-dev-tool";
import 'antd/dist/antd'
import { AppProviders } from './context';
import { BrowserRouter } from 'react-router-dom';


loadServer(() => ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(

  <React.StrictMode>
    
    <AppProviders>
    <DevTools />
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProviders>
    
  </React.StrictMode>
))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
