import React from 'react'

const SelectItem = ({items}) => {
return(
        <>
            {items.map( (item, i) => (
                <div className="selects-wrapper__item" key={i}>
                    <div className="select-label">Выберите класс</div>
                    <div className="select-wrapper">
                        <span id="select-value">Выбрать</span>
                        <ul className="select">
                            <li className="select__item">Выбрать</li>
                            <li className="select__item">{item.option1}</li>
                            <li className="select__item">{item.option2}</li>
                            <li className="select__item">{item.option3}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SelectItem