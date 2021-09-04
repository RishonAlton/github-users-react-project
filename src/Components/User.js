import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Followers from './Followers'


const User = () => {
    return (
        <Wrapper className="section">
          <Card />
          <Followers />  
        </Wrapper>
    )
}


const Wrapper = styled.section `
    
  @media all and (min-width: 950px) {
    display: grid;
    margin: 0 auto;
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr 1fr;
  }

`


export default User
