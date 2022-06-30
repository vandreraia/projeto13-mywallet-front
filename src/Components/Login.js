import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from 'axios';
import PropagateLoader from "react-spinners/PropagateLoader";


export default function Login() {
    // const { setToken } = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function login(event) {
        event.preventDefault();
        const body2 = {
            email: "ze@gmail.com",
            password: "123456"
        };
        const body = {
            email,
            password
        };
        setLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            body2);
        promise.then((res) => {
            // setToken({
            //     headers: {
            //         Authorization: `Bearer ${res.data.token}`
            //     }
            // });
            setLoading(false);
            navigate("/home");
        }
        )

        promise.catch(() => {
            setLoading(false);
            console.log("falha de login");
        }
        );
    }

    return (
        <>
            <Container>
                <h1>MyWallet</h1>
                <input disabled={loading ? true : false} type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)}></input>
                <input disabled={loading ? true : false} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}></input>
                <button onClick={login}><PropagateLoader size={10} loading={loading} color="white" />{loading ? "" : "Entrar"}</button>
                <Link to="/register">
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8C11BE;
    p {
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        text-decoration: none;
    }
    h1 {
        color: white;
        font-family: Saira Stencil One;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
    }
    button {
        background-color: #A328D6;
        height: 45px;
        width: 90%;
        border-width: 0;
        border-radius: 3px;
        color: #ffffff;
        margin: 0px 0px 10px 0px;
        padding: 0;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 90%;
        margin: 3px;
    }
`