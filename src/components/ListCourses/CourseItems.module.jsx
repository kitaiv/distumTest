import React from 'react'

import classnames from 'classnames'
import book from '../../assets/images/svg/book.svg'
import clock from '../../assets/images/svg/clock.svg'

const CourseItems = ({items}) => {
    return(
        <>  
            {items.map((item, i) => (
                <li className="course" key={i}>
                    <div className="course__preview">
                        <h4 className={classnames("course__heading", item.backColor)}>Курс по биологии</h4>
                        <img src={item.img} alt="" className="course__img"/>
                    </div>
                    <div className="course-description">
                        <h6 className="course-description__heading">{item.courseTitle}</h6>
                        <p className="course-description__desc">{item.subTitle}</p>

                        <h6 className="course-description__heading">Описание курса</h6>
                        <p className="course-description__desc bigLength">{item.courseDesc}</p>

                        <div className="course-description__details">
                            <div>
                                <h6 className="course-description__heading">Уроков</h6>
                                <span>
                                    <img src={book} alt="book" className="course-description__icon"/> {item.lessons}
                                </span>
                            </div>
                            <div>
                                <h6 className="course-description__heading">Длительность</h6>
                                <span>
                                    <img src={clock} alt="clock" className="course-description__icon"/> {item.duration} часов
                                </span>
                            </div>
                        </div>

                        <div className="course-description__priceBuy">
                            <div>
                                <h6 className="course-description__heading">Стоимость</h6>
                                <div className="course__price">{item.price} ₽</div>
                            </div>
                            <button className="bigBtn__blue">Посмотреть курс</button>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}

export default CourseItems