import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Loading } from '../Components'
import styled from 'styled-components'


const AuthWrapper = ({children}) => {

    const { isLoading, error } = useAuth0()

    if(isLoading) {
        return (
            <Loading />
        )
    }

    if(error) {
        return (
            <Wrapper>
                <h4>{error.message}</h4>
            </Wrapper>
        )
    }

    return (
        <>
            {children}
        </>
    )

}


const Wrapper = styled.div `

    display: grid;
    place-items: center;
    min-height: 100vh;

`


export default AuthWrapper
