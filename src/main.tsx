import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faBars,
  faBolt,
  faBookOpen,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faTags,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes } from 'react-router'

library.add(
  faArrowLeft,
  faBars,
  faBolt,
  faBookOpen,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faTags,
  faTimes,
)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)