import styled from 'styled-components';
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/userContext';

export default function Entrada() {
    const navigate = useNavigate();
    const { name, token} = useContext(UserContext);
    const [value, setValue] = useState();
    const [description, setDescription] = useState();
    const [loading, setLoading] = useState(false);

    function newEntry(event) {
        event.preventDefault();
        setLoading(true);
        const body = {
            value: "6666",
            description: "satan",
            type: "in"
        }

        axios.post("http://localhost:5000/entry", body, token)
            .then((res) => {
                navigate("/home")
            })
            .catch((err) => {
                console.log(err);
            }
            )

        setLoading(false);
    }
    return (
        <>
            Nova entrada
            <Form onSubmit={newEntry} >
                <input disabled={loading ? true : false} type="text" placeholder="Valor" onChange={e => setValue(e.target.value)}></input>
                <input disabled={loading ? true : false} type="text" placeholder="Descricao" onChange={e => setDescription(e.target.value)}></input>
                <button type="submit"><PropagateLoader size={10} loading={loading} color="white" />{loading ? "" : "Salvar entrada"}</button>
            </Form>
        </>
    )
}

const Form = styled.form`
display: flex;
flex-direction: collum;
`