import React from 'react'
import styled from 'styled-components'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
import { useGlobalContext } from '../context'


const Card = () => {

    const { githubUser } = useGlobalContext()

    const { avatar_url, html_url, name, login, company, blog, bio, location } = githubUser

    return (
        <Wrapper>
            <div className="user-info">
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{name}</h4>
                    <p>@{login}</p>
                </div>
                <a href={html_url} className="button button-rounded">Follow</a>
            </div>
            <div className="user-details">
                <p className="bio">{bio}</p>
                <div className="links">
                    {
                        company && (
                            <p>
                                <MdBusiness />
                                {company}
                            </p>
                        )
                    }
                    {
                        location && (
                            <p>
                                <MdLocationOn />
                                {location}
                            </p>
                        )
                    }
                    {
                        blog && (
                            <a href={`https://${blog}`}>
                                <MdLink />
                                {blog}
                            </a>
                        )
                    }
                </div>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.article `

    background: var(--white);
    padding: 1.5rem 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-radius: 0.25rem;
    position: relative;
    &::before {
        content: "User";
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

    .user-info {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        h4 {
            margin: 0;
            font-size: 1.1rem;
        }
        p {
            margin: 0;
        }
    }

    img {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        object-fit: cover;
        justify-self: center;
    }

    .button {
        margin: 0;
        background: transparent;
        color: var(--primary-05);
        border: 1px solid var(--primary-05);
        text-transform: capitalize;
        padding: 0.25rem 0.75rem;
        font-size: 1rem;
    }

    .button:hover {
        background: var(--primary-05);
        color: white;
    }

    .bio {
        color: var(--gray-01);
    }

    .links {
        p,
        a {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            svg {
                font-size: 1.25rem;
                margin-right: 0.5rem;
            }
        }
        a {
            color: var(--primary-05);
            transition: var(--transition);
            &:hover {
                color: var(--primary-03);
            }
            svg {
                color: var(--gray-05);
            }
        }
    }

    @media all and (max-width: 425px) {
        .user-info {
            grid-template-columns: auto 1fr;
        }
        img {
            height: 60px;
            width: 60px;
        }
    }

    @media all and (min-width: 950px) {
        margin-top: 2rem;
        margin-bottom: 0;
    }

`


export default Card
