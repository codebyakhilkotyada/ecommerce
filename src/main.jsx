// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

import { CartProvider } from './context/CartContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <BrowserRouter>

    <ThemeProvider>

      <CartProvider>

        <WishlistProvider>

          <App />

          <Toaster position="top-right" />

        </WishlistProvider>

      </CartProvider>

    </ThemeProvider>

  </BrowserRouter>

)