import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Login from './pages/login.tsx';
import Signin from './pages/sinin.tsx';
import Invest from './pages/invest.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/log' element={<Login />} />
      <Route path='/sin' element={<Signin />} />
      <Route path='/invest' element={<Invest />} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
