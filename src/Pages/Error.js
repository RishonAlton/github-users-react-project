import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Error = () => {

    return (
        <Wrapper>
            <div>
                <h1>404</h1>
                <h3>Sorry, the Page cannot be Found</h3>
                <Link to="/" className="button">Back Home</Link>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.section `

    background: var(--primary-10);
    min-height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;

    h1 {
        font-size: 10rem;
    }

    h3 {
        color: var(--gray-03);
    }

`


export default Error
