import React from 'react'

const NewsItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="content-item" key={i}>
                    <div className="content-item__img">
                        <img src={item.img} alt="news"/>
                    </div>
                    <p className="content-item__title">{item.title}</p>
                    <div className="content-item__date">{item.date}</div>
                    <div className="content-item__descr">{item.description}</div>
                    <a href="#" className="btn">Подробнее</a>
                </div>
            ))}
        </>
    )
}

export default NewsItems