import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Auth0Provider }  from '@auth0/auth0-react';
const domain = "dev-mgi2drpxgmrso2he.us.auth0.com";
const clientId = "tQ24C6Lm0UanIEokNUrE0oIdNUtE1Gbs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(98, 109, 75)',
        },
      }}
    >
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ConfigProvider>
  </React.StrictMode>
);

