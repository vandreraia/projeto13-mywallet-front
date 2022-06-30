
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}