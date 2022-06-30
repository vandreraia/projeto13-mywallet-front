import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Top>
                Ola, Fulado
                <ion-icon size="large" name="exit-outline"></ion-icon>
            </Top>
            <Center>
                Não há registros de entrada ou saída
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
background-color: white;
color: #868686;
height: 70vh;
margin: 10px 0;
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