import { StrictMode } from 'react'
import { render } from 'react-dom/client'
import App from './App'
import './index.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')!
)
