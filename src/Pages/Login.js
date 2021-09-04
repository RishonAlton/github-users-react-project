import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import loginImage from '../Images/Login Image.svg'


const Login = () => {

    const { loginWithRedirect } = useAuth0()

    return (
        <Wrapper>
            <div className="container">
                <img src={loginImage} alt="" />
                <h1>GitHub User</h1>
                <button className="button" onClick={loginWithRedirect}>Log in / Sign up</button>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    min-height: 100vh;
    display: grid;
    place-items: center;

    .container {
        width: 90vw;
        max-width: 650px;
        text-align: center;
    }

    img {
        margin-bottom: 2rem;
    }

    button {
        margin: 1.5rem auto;
    }

    @media all and (max-width: 315px) {
        h1 {
            font-size: 2rem;
        }
    }
    
`


export default Login
