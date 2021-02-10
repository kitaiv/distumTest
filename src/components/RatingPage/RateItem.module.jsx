import React from 'react'

const RateItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="rating-rows__item" key={i}>
                    <p><span>Ученик</span>{item.name}</p>
                    <p><span>Школа</span>{item.schoolName}</p>
                    <p><span>Класс</span>{item.grade}</p>
                    <p><span>Рейтинг</span>{item.rating}</p>
                </div>
            ))}
        </>
    )
}

export default RateItem