import React, { useState } from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import { useGlobalContext } from '../context'


const Search = () => {

    const { requests, error, searchUser, loading } = useGlobalContext()
    const [user, setUser] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user) {
            searchUser(user)
        }
    }

    return (
        <section className="section">
            <Wrapper>
                { error.show && <p className="error">{error.message}</p> }
                <form onSubmit={handleSubmit}>
                    <MdSearch className="icon" />
                    <input 
                        type="text" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Enter GitHub User"
                    />
                    {
                        (requests > 0) && !loading && <button className="button" type="submit">Search</button>
                    }
                </form>
                <h3>Requests: {requests} / 60</h3>
            </Wrapper>
        </section>
    )

}


const Wrapper = styled.div `

    position: relative;

    .error {
        position: absolute;
        top: -0.5rem;
        left: 0;
        transform: translateY(-100%);
    }

    form {
        display: grid;
        grid-template-columns: auto 1fr auto;
        background: var(--white);
        padding: 0.5rem;
        align-items: center;
        grid-gap: 1rem;
    }

    .icon {
        font-size: 1.25rem;
        color: var(--gray-04);
    }

    input {
        border: none;
        outline-color: var(--gray-10);
        padding: 0.5rem;
        font-size: 1.25rem;
        color: var(--gray-03);
        width: 100%;
        &::placeholder {
            color: var(--gray-03);
        } 
    }

    .button {
        margin: 0;
    }

    h3 {
        font-weight: lighter;
        color: var(--gray-05);
        display: inline-block;
        margin: 0;
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    @media (max-width: 500px) {
        button,
        input,
        svg {
            font-size: 0.85rem;
        }
    }

    @media all and (min-width: 750px) {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 2rem;
        align-items: center;
        h3 {
            margin: 0;
        }
    }

    @media all and (max-width: 425px) {
        button {
            font-size: 0.8rem;
            letter-spacing: 0;
            padding: 0.5rem;
        }
    }

`


export default Search
