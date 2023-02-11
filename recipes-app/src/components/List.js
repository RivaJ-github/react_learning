import React from "react";

export default function List({ data=[], renderEmpty, renderItem = f=>f }) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    )
}