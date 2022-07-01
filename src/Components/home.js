import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import UserContext from '../Context/userContext';

export default function Home() {
    const { name, token} = useContext(UserContext);
    const [entries, setEntries] = useState();

    useEffect(() => {
        console.log(token)
        axios.get("http://localhost:5000/entry", token)
            .then((res) => setEntries(res.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <Top>
                Ola, {name}
                <ion-icon size="large" name="exit-outline"></ion-icon>
            </Top>
            <Center>
                {entries
                    ? entries.map((entry, index) =>
                        <Entry key={index}>
                            <div>
                                {entry.date} {entry.description}
                            </div>
                            <div>
                                {entry.value}
                            </div>
                        </Entry>
                    )
                    : "Não há registros de entrada ou saída"}
            </Center>
            <Bottom>
                <Link to="/entrada">
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova<br></br> entrada
                    </div>
                </Link>
                <Link to="/saida">
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        Nova<br></br> saída
                    </div>
                </Link>
            </Bottom>
        </>
    )
}


const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`


const Center = styled.div`
overflow: scroll;
background-color: white;
color: #868686;
height: 70vh;
margin: 10px 0;
padding 10px 5px;
`

const Entry = styled.div`
margin: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Bottom = styled.div`
display: flex;

div{
    background-color: #A328D6;
    margin: 10px;
    padding: 10px;
    width: 40vw;
    height: 13vh;
    display: flex;
    flex-direction: column;
}
`