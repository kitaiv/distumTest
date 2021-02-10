import React from 'react'

const TestItems = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div class="tests-catalog__item" key={i}>
                    <div class="tests-catalog__title">{item.title}</div>
                    <div class="tests-catalog__label">Категория: <span>{item.category}</span></div>
                    <div class="test-catalog__text">{item.text}</div>
                    <a href="#" class="btn">Пройти курс</a>
                </div>
            ))}
        </>
    )
}

export default TestItems