import React from 'react'
import styled from 'styled-components'
import { Pie, Doughnut, VerticalBar, HorizontalBar } from './Charts'
import { useGlobalContext } from '../context'


const Repos = () => {

    const { repos } = useGlobalContext()

    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item
        if(!language) return total
        if(!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count }
        }
        else {
            total[language] = {...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count}
        }
        return total
    }, {})

    const mostUsed = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5)

    const mostPopular = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .map(item => {
            return { ...item, value: item.stars }
        })
        .slice(0, 5)

    let { stars, forks } = repos.reduce((total, item) => {
        const { stargazers_count, name, forks } = item
        total.stars[stargazers_count] = { label: name, value: stargazers_count }
        total.forks[forks] = { label: name, value: forks }
        return total
    }, {
        stars: {},
        forks: {}
    })

    stars = Object.values(stars)
        .slice(-5)
        .reverse()

    forks = Object.values(forks)
        .slice(-5)
        .reverse()

    return (
        <section className="section">
            <Wrapper className="section">
                <Pie data={mostUsed} />
                <VerticalBar data={stars} />
                <Doughnut data={mostPopular} />
                <HorizontalBar data={forks} />
            </Wrapper>
        </section>
    )

}


const Wrapper = styled.div `

    margin-top: 3rem;
    display: grid;
    justify-items: center;
    grid-gap: 2rem;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }

    div {
        width: 100% !important;
    }

    .fusioncharts-container {
        width: 100% !important;
    }

    svg {
        width: 100% !important;
        border-radius: 0.25rem !important;
    }

`


export default Repos
