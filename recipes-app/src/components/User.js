import React, { memo, useState } from "react";
import firstUser from '../data/user'

const Cat = ({name, meow = f => f}) => {
    console.log(`rendering ${name}`)
    return <p onClick={() => meow(name)}>{name}</p>
}

const PureCat = memo(
    Cat,
    (prevProps, nextProps) => prevProps.name === nextProps.name
)

export default function User() {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"])
    return (
        <>
            {cats.map((name, i) => (
                <PureCat key={i} name={name} meow={name => console.log(`${name} has meowd`) }/>
            ))}
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
                Add a Cat
            </button>
        </>
    )
}