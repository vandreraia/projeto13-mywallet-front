
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/home";
import Entrada from "./Components/entrada";
import Saida from "./Components/saida";
import { createGlobalStyle } from "styled-components";
import UserContext from "./Context/userContext";

export default function App() {
    const [token, setToken] = useState('');
    const [name, setName] = useState('');

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{ token, setToken, name, setName }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/saida" element={<Saida />} />
                </Routes>
            </UserContext.Provider>
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