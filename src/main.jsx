import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLink,
  faAdjust,
  faFilePdf,
  faSpinner,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
library.add(faLink,faAdjust,faFilePdf, faSpinner, faTimes);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
