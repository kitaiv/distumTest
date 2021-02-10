import React from 'react'

const StudentsListItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <li key={i}>
                    <label className="checkbox green">
                        <input type="checkbox" />
                        <span className="filter__label">{item.name}</span>
                    </label>
                </li>
            ))}
        </>
    )
}

export default StudentsListItems