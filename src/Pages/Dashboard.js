import React from 'react'
import { Navbar, Search, Info, User, Loading } from '../Components'
import Repos from '../Components/Repos'
import { useGlobalContext } from '../context'


const Dashboard = () => {

    const { loading } = useGlobalContext()

    if(loading) {
        return (
            <>
                <Navbar />
                <Search />
                <Loading />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </>
    )

}


export default Dashboard
