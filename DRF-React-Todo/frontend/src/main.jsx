import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './components/Login';


function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/todos" element={<App />} />
      </Routes>
    </BrowserRouter>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
