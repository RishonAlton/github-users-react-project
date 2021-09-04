import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react"


const Navbar = () => {

    const { isAuthenticated, logout, user } = useAuth0()

    const isUser = isAuthenticated && user

    return (
        <Wrapper>
            <div className="nav-center">
                {isUser && user.picture && <img src={user.picture} alt={user.name} />} 
                {isUser && user.name && (
                    <h4>
                        Welcome, <strong>{user.name.toUpperCase()}</strong>
                    </h4>
                )} 
                {isUser && <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>}
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.nav `

    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin-bottom: 5rem;

    .nav-center {
        width: 90%;
        max-width: 450px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-gap: 1rem;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    img {
        height: 40px;
        width: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

    h4 {
        margin: 0;
        font-weight: normal;
    }

    button {
        color: var(--gray-05);
        background: transparent;
        border: none;
        letter-spacing: 2px;
        font-size: 1.25rem;
    }

    @media all and (max-width: 350px) {
        button {
            font-size: 1rem;
        }
    }

`


export default Navbar
