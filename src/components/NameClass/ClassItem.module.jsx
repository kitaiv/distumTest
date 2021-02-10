import React from 'react'

const ClassItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div class="class-item" key={i}>
                    <a href="#" class="class-item__title">{item.classTitle}</a>
                    <div class="class-item__student">Учеников: <span>{item.students}</span></div>
                </div>
            ))}
        </>
    )
}

export default ClassItem