import React from "react"
import PropTypes from "prop-types"

export default function App({ name, using }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>
                {using ? "used here": "not used here"}
            </p>
        </div>
    )
}

App.propTypes = {
    name: PropTypes.string,
    uSing: PropTypes.bool
}