import './App.css'
// import { Dashboard } from 
import React from 'react';
const Dashboard = React.lazy(() => import("./components/dashboard"));
// react.lazy is just importing lazy--> import lazy from "react";
import { Landing } from './components/landing' 
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom'

function App() {
  return (
    <div>

      <div>
        FIXED CONTENT
      </div>

      <div>
         reloading the page
         <br></br>
        <button onClick={() => {
          window.location.href="/"; 
        }}>Home </button>
   
                <button onClick={() => {
          window.location.href="/dashboard";
        }}>Dashboard </button>

      </div>



      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

function Navbar(){
  const navigate = useNavigate();
 return<div>
      client side rendering
      <br></br>
        <button onClick={() => {
          navigate("/");
        }}>Home </button>
        <button onClick={() => {
          navigate("/dashboard");
          
        }}>Dashboard </button>
      </div>
  
}

export default App
