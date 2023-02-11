import React, { useState, useEffect } from "react"
import faker from "faker"
import UserDetails from "./components/UserDetails";
import Fetch from "./components/Fetch";
import RepositoryReadme from "./components/RepositoryReadme"
import GitHubUser from "./components/GitHubUser"
import UserRepositories from "./components/UserRepositories";
// import SearchForm from "./components/SearchForm";

export default function App() {
    const [login, setLogin] = useState('RivaJ-github')
    const [repo, setRepo] = useState("learning-react")
    return (
        <>
            {/* <SearchForm value={login} onSearch={setLogin} /> */}
            <GitHubUser login={login} />
            <UserRepositories
                login={login}
                repo={repo}
                onSelect={setRepo}
            />
            <RepositoryReadme login={login} repo={repo} /> 
        </>
    )
}