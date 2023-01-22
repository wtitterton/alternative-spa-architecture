import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "inversify-react";
import {container} from "./ioc";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
    
  </React.StrictMode>,
)
