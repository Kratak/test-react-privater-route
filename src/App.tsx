import React from 'react';
import {Route, Routes} from "react-router";

import {PrivateRoutes} from "./routing/privateRoute";

import './App.css';
import {DashboardPage, LoginPage, RegisterPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>Home page</div>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/" element={<PrivateRoutes/>}>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Route>
                <Route path="/*" element={<div>404</div>}/>
            </Routes>
        </div>
    );
}

export default App;

