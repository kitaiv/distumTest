import React from 'react'

const StudentItem = ({items}) => {

    return(
        <>
            {items.map((item, i)=> (
                <li>
                    <label class="checkbox green" key={i}>
                        <input type="checkbox" />
                        <span class="filter__label">{item.name}</span>
                    </label>
                </li>
            ))}
        </>
    )

}

export default StudentItem