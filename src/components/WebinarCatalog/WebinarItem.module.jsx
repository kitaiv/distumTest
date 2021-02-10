import React from 'react'

const WebinarItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="content-item" key={i}>
                    <div className="content-item__img">
                        <img src={item.img} alt="webinar" />
                    </div>
                    <p className="content-item__title">{item.title}</p>
                    <a href="#" className="btn">Подробнее</a>
                </div>
            ))}
        </>
    )
}

export default WebinarItem