import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'


const Followers = () => {

    const { followers } = useGlobalContext()

    return (
        <Wrapper>
            <div className="followers">
                {
                    followers.map((follower, index) => {
                        const { avatar_url, login, html_url } = follower
                        return (
                            <div className="follower" key={index}>
                                <img src={avatar_url} alt={login} />
                                <div>
                                    <h4>{login}</h4>
                                    <a href={html_url}>{html_url}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.article `

    background: var(--white);
    margin-top: 2rem;
    border-radius: 0.25rem;
    position: relative;
    &::before {
        content: "Followers";
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        background: white;
        padding: 0.5rem 1rem 0 1rem;
        color: var(--gray-05);
        letter-spacing: 2px;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    
    .followers {
        overflow: auto;
        max-height: 275px;
        padding: 1.5rem 2rem 0 1.5rem;
    }

    .follower {
        display: grid;
        grid-template-columns: 0.5fr 3fr;
        grid-gap: 1rem;
        margin-bottom: 1.5rem;
        align-items: center;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
        justify-self: center;
    }

    h4 {
        margin: 0;
        font-size: 1.1rem;
    }

    a {
        color: var(--gray-05);
    }

`


export default Followers
