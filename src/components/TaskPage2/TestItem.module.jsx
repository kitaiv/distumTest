import React from 'react'

const TestItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="tests-catalog__item" key={i}>
                    <div className="tests-catalog__title">{item.title}</div>
                    <div className="tests-catalog__label">Категория: <span>{item.category}</span></div>
                    <div className="test-catalog__text">{item.text}</div>
                    <a href="#" className="btn">Пройти курс</a>
                </div>
            ))}
        </>
    )
}

export default TestItem