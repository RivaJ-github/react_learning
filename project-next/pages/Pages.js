import fetch from "isomorphic-unfetch"

Pets.getInitialProps = async function() {
    const res = await fetch(
        `http://pet-library.moonhighway.com/api/pets`
    )
    const data = await res.json()
    return {
        pets: data
    }
}