import React from 'react'

import people from '../../assets/images/svg/people.svg'

const ProgramItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="catalog-item" key={i}>
                    <div className="catalog-item__img">
                        <img src={item.img} alt="publication-photo" />
                    </div>
                    <div className="catalog-item__descr">
                        <h2>{item.title}</h2>
                        <div className="catalog-item__text">
                            {item.text}
                        </div>
                        <a href="#" className="catalog-item__author">
                            <img src={people} alt="people"/> 
                            <span>{item.author}</span></a>
                        <a href="#" className="btn">Читать подробнее</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProgramItem