import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import {AnalyticsProvider} from "use-analytics";
import {CssBaseline} from "@material-ui/core";


const myPlugin = {
    name: 'my-custom-plugin',
    page: ({ payload }) => {
        console.log('page view fired', payload)
    },
    track: ({payload}) => {
        console.log('track event payload', payload)
    }
}

const analytics = Analytics({
    app: 'writa',
    plugins: [
        myPlugin,
        googleAnalytics({
            trackingId: 'UA-222078699-1'
        })
    ]
})
console.log('analytics', analytics)



ReactDOM.render(
  // <React.StrictMode>
      <AnalyticsProvider instance={analytics}>
          <BrowserRouter>
              <CssBaseline/>
              <App />
          </BrowserRouter>
      </AnalyticsProvider>,

  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
