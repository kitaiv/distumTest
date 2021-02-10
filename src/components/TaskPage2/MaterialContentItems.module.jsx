import React from 'react'

const MaterialContentItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="content-item" key={i}>
                    <div className="content-item__img">
                        <img src={item.img} alt="webinar"/>
                    </div>
                    <p className="content-item__title">{item.title}</p>
                    <div className="content-item__category">Категория: <span>{item.category}</span></div>
                    <div className="content-item__grade">{item.grade} класс</div>
                    <div className="content-item__descr">
                        {item.description}
                    </div>
                    <a href="#" className="btn">Подробнее</a>
                </div>
            ))}
        </>
    )
}

export default MaterialContentItems