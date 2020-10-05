import React from 'react'

export default ({ _id, supermarket, category, url }) => {
    return (
        <>
            <p>{_id}</p>
            <h4>{supermarket}</h4>
            <h5>{category}</h5>
            <p>{url}</p>

        </>
    )
}