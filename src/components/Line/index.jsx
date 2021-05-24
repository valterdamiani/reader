import React from 'react'

export default function Line ({data}) {
    return (
        <li>
          <h1>{data && data.title}</h1>
        </li>
    )
};