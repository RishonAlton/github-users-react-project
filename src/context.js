import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import mockUser from "./Data/mockUser"
import mockFollowers from "./Data/mockFollowers"
import mockRepos from "./Data/mockRepos"


const AppContext = React.createContext()

const baseURL = "https://api.github.com"


const AppProvider = ({children}) => {

    const [githubUser, setGithubUser] = useState(mockUser)
    const [followers, setFollowers] = useState(mockFollowers)
    const [repos, setRepos] = useState(mockRepos)

    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ show: false, message: "" })

    const displayError = (show = false, message = "") => {
        setError({show, message})
    }

    const checkRequests = () => {
        axios(baseURL + "/rate_limit")
            .then(({data}) => {
                const { remaining } = data.rate
                setRequests(remaining)
                if(remaining === 0) {
                    displayError(true, "Sorry, you have exceeded your hourly rate limit!")
                }
            })
            .catch(error => console.log(error))
    }

    const searchUser = async (user) => {
        displayError()
        setLoading(true)
        const response = await axios(baseURL + "/users/" + user)
            .catch(error => console.log(error))
        if(response) {
            setGithubUser(response.data)
            const { login, followers_url } = response.data
            await Promise.allSettled([axios(`${baseURL}/users/${login}/repos?per_page=100`), axios(followers_url + "?per_page=100")])
                .then(results => {
                    const [repos, followers] = results
                    if(repos.status === "fulfilled") {
                        setRepos(repos.value.data)
                    }
                    if(followers.status === "fulfilled") {
                        setFollowers(followers.value.data)
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            displayError(true, "There is no user with that name")
        }
        checkRequests()
        setLoading(false)
    }

    useEffect(checkRequests, [])

    return (
        <AppContext.Provider 
            value={{
                githubUser,
                followers,
                repos,
                requests,
                error,
                loading,
                searchUser,
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export { AppProvider, useGlobalContext }