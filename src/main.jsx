import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './Pages/App'
import Team from './Pages/Team';
import About from './Pages/About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
