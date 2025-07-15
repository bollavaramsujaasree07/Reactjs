import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import App from './Ternaryoperators/App.jsx'
// import { Jaya } from './jayalavakusha/jaya.jsx'
// import { Lava } from './jayalavakusha/lava.jsx'
// import { Kusha } from './jayalavakusha/kusha.jsx'
// import {Basicprops} from './jayalavakusha/props/Basicprops.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)
