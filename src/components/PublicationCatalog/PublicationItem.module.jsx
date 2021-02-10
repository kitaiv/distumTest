import React from 'react'

import icon from '../../assets/images/svg/people.svg'

const PublicationItem = ({items}) => {
    return(
        <>
            {items.map((item, i)=> (
                <div className="catalog-item" key={i}>
                    <div className="catalog-item__img">
                        {/* <!--img src="#" alt="publication-photo"--> */}
                    </div>
                    <div className="catalog-item__descr">
                        <h2>{item.title}</h2>
                        <div className="catalog-item__text">
                            {item.subTitle}
                        </div>
                        <a href="#" className="catalog-item__author">
                            <img src={icon} alt="people" /> 
                            <span>{item.author}</span></a>
                        <a href="#" className="btn">Читать подробнее</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PublicationItem