import React from 'react'

const VideoItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="tests-catalog__item" key={i}>
                    <div className="tests-catalog__title">{item.title}</div>
                    <div className="video"></div>
                    <div className="test-catalog__text">{item.subText}</div>
                    <a href="#" className="btn">Подробнее</a>
                </div>
            ))}
        </>
    )
}

export default VideoItem