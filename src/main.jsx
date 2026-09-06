import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { FavouriteProvider } from "./context/FavouriteContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    <FavouriteProvider>
      <App />
    </FavouriteProvider>
  </StrictMode>
</BrowserRouter>,
)
