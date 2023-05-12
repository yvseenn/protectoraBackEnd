import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PostContextProvider from './context/post.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </BrowserRouter>
)