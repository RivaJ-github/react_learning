import React, { useState } from "react";

export default function SearchForm({value, onSearch=f=>f}) {
    const [val, setVal] = useState(value)
    return <input value={val} onChange={setVal}></input>
}