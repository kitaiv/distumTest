import React from 'react'

const DetailItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <li className="contant-program__item" key={i} ><span>{item.text}</span></li>
            ))}
        </>
    )
}

export default DetailItem