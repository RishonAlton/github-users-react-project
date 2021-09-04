import React from 'react'
import styled from 'styled-components'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { useGlobalContext } from '../context'


const Info = () => {

    const { githubUser } = useGlobalContext()
    const { public_repos, public_gists, followers, following } = githubUser

    const items = [
        {
            id: 1,
            icon: <GoRepo className="icon" />,
            label: "repos",
            value: public_repos,
            color: "pink"
        },
        {
            id: 2,
            icon: <FiUsers className="icon" />,
            label: "followers",
            value: followers,
            color: "green"
        },
        {
            id: 3,
            icon: <FiUserPlus className="icon" />,
            label: "following",
            value: following,
            color: "purple"
        },
        {
            id: 4,
            icon: <GoGist className="icon" />,
            label: "gists",
            value: public_gists,
            color: "yellow"
        },
    ]

    return (
        <section className="section">
            <Wrapper>
                {
                    items.map(item => <Item key={item.id} {...item} />)
                }
            </Wrapper>
        </section>
    )

}


const Item = ({id, icon, label, value, color}) => {
    
    return (
        <div className="item">
            <span className={color}>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </div>
    )

}


const Wrapper = styled.article `

    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    grid-gap: 1rem 2rem;

    .item {
        padding: 1rem 2rem;
        background: var(--white);
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 2rem;
        border-radius: 0.25rem;
    }

    span {
        display: grid;
        place-items: center;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
    }

    .pink {
        background: #ffe0f0;
        color: #da4a91;
    }

    .green {
        background: var(--primary-10);
        color: var(--primary-05);
    }

    .purple {
        background: #e6e6ff;
        color: #5d55fa;
    }

    .yellow {
        background: #fffbea;
        color: #f0b429;
    }

    .icon {
        font-size: 1.5rem;
    }

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
        text-transform: capitalize;
    }

`


export default Info
