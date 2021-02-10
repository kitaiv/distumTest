import React from 'react'

import './TestsDetailPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class TestsDetailPage extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <a href="" className="nav__prev">Каталог тестов</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Животный мир</span>
                    </div>
                </nav>
                    
                <main>
                    <section className="tests-detail">
                        <div className="container">
                            <h1>Животный мир</h1>

                            <div className="content__wrapper test__description">
                                <div className="test__description-test">
                                    Рыбные тексты также применяются для демонстрации различных видов шрифта и в разработке макетов. Как правило их содержание бессмысленно. 
                                    <br/><br/>
                                    По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. 
                                    В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). 
                                </div>
                                <a href="#" className="btn btn-start-test"><FontAwesomeIcon size="lg" icon={faPlay} color={"white"} style={{marginRight: "10px"}} />Начать тест</a>
                            </div>
                                
                            
                            <div className="content__wrapper test-block">

                                <div className="tests__test">
                                    <h2>Представители какой среды обитания преобладают на суше?</h2>
                                    <div className="test__answers">
                                        <label className="radiobox green">
                                            <input type="radio" name="answer" />
                                            <span className="radio__label">Позвоночные</span>
                                        </label>
                                        <label className="radiobox green">
                                            <input type="radio" name="answer" />
                                            <span className="radio__label">Позвоночные</span>
                                        </label>
                                        <label className="radiobox green">
                                            <input type="radio" name="answer" />
                                            <span className="radio__label">Хордовые</span>
                                        </label>
                                        <label className="radiobox green">
                                            <input type="radio" name="answer" />
                                            <span className="radio__label">Хордовые</span>
                                        </label>
                                    </div>
                                    <div className="test__btns">
                                        <a href="#" className="btn btn">Назад</a>
                                        <a href="#" className="btn btn_green">Далее</a>
                                    </div>
                                </div>

                                <div className="sidebar-pagen">
                                    <ul>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_active">1</li>
                                        <li className="sidebar-pagen__item">2</li>
                                        <li className="sidebar-pagen__item">3</li>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_separator">...</li>
                                        <li className="sidebar-pagen__item">9</li>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_next"></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="content__wrapper test-result">
                                <div>
                                    <h2>Результаты теста</h2>
                                    <div className="test-result__result"> 
                                        <div className="test-result__value">Всего вопросов: <span>20</span></div>
                                        <div className="test-result__value">Правильных ответов: <span>15</span></div>
                                    </div>
                                    <div className="test__btns">
                                        <a href="#" className="btn btn_green">Пройти заново</a>
                                        <a href="#" className="btn"><i className="fas fa-share-alt"></i>Поделиться в соц.сетях</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default TestsDetailPage