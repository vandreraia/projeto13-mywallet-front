
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/home";
import Entrada from "./Components/entrada";
import Saida from "./Components/saida";
import { createGlobalStyle } from "styled-components";

export default function App() {
    return (
        <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/entrada" element={<Entrada />} />
                <Route path="/saida" element={<Saida />} />
            </Routes>
        </BrowserRouter>
    );
}

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #8C11BE;
        font-family: Raleway;
        box-sizing: border-box;
        color: white
    }
`