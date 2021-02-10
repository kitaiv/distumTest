import React from 'react'

const CatalogItem = ({items}) => {
    return(
        <>
            {items.map((item, i) => (
                <div className="catalog-item" key={i}>
                    <div className="catalog-item__img">
                        <img src={item.img} alt="publication-photo"/>
                    </div>
                    <div className="catalog-item__descr">
                        <h2>{item.title}</h2>
                        <div className="catalog-item__text">
                            {item.text}
                        </div>
                        <a href="#" className="btn">Читать подробнее</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CatalogItem