import React from 'react'

const ContentItem = ({items}) => {
    return(
        <>
            {items.map( (item, i) => (
                <div className="content-item" key={i}>
                    <div className="content-item__img">
                        <img src={item.img} alt="webinar"/>
                    </div>
                    <p className="content-item__title">{item.taskTitle}</p>
                    <p className="content-item__progress">
                        Успешно выполнено: 
                        <span><span> {item.rating}</span> из <span>10</span></span>
                    </p>
                    <a href="#" className="btn">Выполнить</a>
                </div>
            ))}
        </>
    )
}

export default ContentItem