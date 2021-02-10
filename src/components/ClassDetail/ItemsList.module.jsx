import React from 'react'
import svg from '../../assets/images/svg/edit.svg'
import classnames from 'classnames'

const NewItem = ({items}) => {



return(
<>
    {items.map((item, i) => (

        <div className={classnames("student-item", item.activeClass)} onClick={ item.edit } key={i}>
            
            <div className="student-item__name">
                <a href="#">{item.name}</a>
                <span className="active-hidden">
                    <input defaultValue={item.name} type="text" />
                </span>
            </div>
            <div className="student-item__gender">
                <p>{item.gender}</p>
                <span className="active-hidden">
                    <div className="select-wrapper" onClick={ item.select }>
                        <span id="select-value">Мужской</span>
                        <ul className="select">
                            <li className="select__item">Мужской</li>
                            <li className="select__item">Женский</li>
                        </ul>
                    </div>
                </span>
            </div>
            <div className="student-item__edit">
                <img src={svg} alt="edit" />
                <p>Изменить данные участника</p>
                <span className="active-hidden">
                    <span className="edit-cancel">Отмена</span>
                    <span className="edit-ok">Сохранить</span>
                </span>
            </div>
        </div>
    ))}
</>

)
}

export default NewItem