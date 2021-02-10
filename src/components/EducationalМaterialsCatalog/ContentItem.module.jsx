import React from 'react'

const ContentItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="content-item" key={i}>
                    <div className="content-item__img">
                        <img src={item.img} alt="webinar"/>
                    </div>
                    <p className="content-item__title">Животный мир</p>
                    <div className="content-item__category">Категория: <span>{item.category}</span></div>
                    <div className="content-item__grade">{item.grade} класс</div>
                    <div className="content-item__descr">
                        {item.subText}
                    </div>
                    <a href="#" className="btn">Подробнее</a>
                </div>
            ))}
        </>
    )
}

export default ContentItem