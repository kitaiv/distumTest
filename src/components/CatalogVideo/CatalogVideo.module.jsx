import React from 'react'

class CatalogVideo extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Каталог тестов</span>
                    </div>
                </nav>

                <article className="filters__wrap">
                    <div className="container">
                        <ul className="filters">
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className="checkbox green">
                                        <input type="checkbox" />
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br />
                                    <label className="checkbox green">
                                        <input type="checkbox" />
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter mob">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br />
                                    <label className="checkbox green">
                                        <input type="checkbox" />
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter mob">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br />
                                    <label className="checkbox green">
                                        <input type="checkbox" />
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br />
                                    <label className="checkbox green">
                                        <input type="checkbox" />
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div className="filters__btn-wrap">
                            <button className="filters__btn show">Показать</button>
                            <button className="filters__btn reset">Сбросить фильтр</button>
                        </div>
                    </div>
                </article>
                    
                <main>
                    <section className="tests-catalog catalog-video">
                        <div className="container">
                            <h1>Каталог тестов</h1>
                            <div className="content__wrapper">
                                <div className="tests-catalog__item">
                                    <div className="tests-catalog__title">Название видеоролика</div>
                                    <div className="video"></div>
                                    <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="tests-catalog__item">
                                                            <div className="tests-catalog__title">Название видеоролика</div>
                                                            <div className="video"></div>
                                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                                            <a href="#" className="btn">Подробнее</a>
                                                        </div>
                                                        <div className="tests-catalog__item">
                                                            <div className="tests-catalog__title">Название видеоролика</div>
                                                            <div className="video"></div>
                                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                                            <a href="#" className="btn">Подробнее</a>
                                                        </div>
                                                        <div className="tests-catalog__item">
                                                            <div className="tests-catalog__title">Название видеоролика</div>
                                                            <div className="video"></div>
                                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                                            <a href="#" className="btn">Подробнее</a>
                                                        </div>
                                                        <div className="tests-catalog__item">
                                                            <div className="tests-catalog__title">Название видеоролика</div>
                                                            <div className="video"></div>
                                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                                            <a href="#" className="btn">Подробнее</a>
                                                        </div>
                                                        <div className="tests-catalog__item">
                                                            <div className="tests-catalog__title">Название видеоролика</div>
                                                            <div className="video"></div>
                                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.</div>
                                                            <a href="#" className="btn">Подробнее</a>
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
                        </div>
                    </section>
                </main>
            </>
        )
    }
    
}

export default CatalogVideo