import React from 'react'


const ContentItems = ({items}) => {
    return(
        <>
            {items.map(item => (
                <li className="contant-program__item"><span>{item.text}</span></li>
            ))}
        </>
    )
}

export default ContentItems