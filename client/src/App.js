import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

function App() {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element = {user? <Home/> : <Register/>}></Route>
                <Route path = "/login" element = {<Login/>}></Route>
                <Route path = "/register" element = {<Register/>}></Route>
                <Route path = "/profile/:username" element = {<Profile/>}></Route>
            </Routes>
        </Router>
    )
}

export default App
