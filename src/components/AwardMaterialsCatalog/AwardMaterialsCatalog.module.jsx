import React from 'react'
import classnames from 'classnames'

class AwardMaterialsCatalog extends React.Component{
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
                        <span className="nav__current">Каталог материалов</span>
                    </div>
                </nav>

                <article className="filters__wrap">
                    <div className="container">
                        <ul className="filters">
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox"/>
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox"/>
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className={classnames("filter", "mob")}>
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox"/>
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className={classnames("filter", "mob")}>
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox"/>
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li className="filter">
                                <h5 className="filter__header">Заголовок фильтра</h5>
                                <div className="checkbox__wrap">
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span className="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label className={classnames("checkbox", "green")}>
                                        <input type="checkbox"/>
                                        <span className="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div className="filters__btn-wrap">
                            <button className={classnames("filters__btn", "show")}>Показать</button>
                            <button className={classnames("filters__btn", "reset")}>Сбросить фильтр</button>
                        </div>
                    </div>
                </article>
                    
                <main>
                    <section className="main">
                        <div className="container">
                            <h1>Каталог развивающих материалов</h1>
                            <div className="content__wrapper">

                                <div className="content-item">
                                    <div className="content-item__img">
                                        <img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"/>
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                <div className="content-item">
                                    <div className="content-item__img">
                                        {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                    </div>
                                    <p className="content-item__title">Название документа</p>
                                    <div className={classnames("content-item__descr", "content-item__descr_center")}>
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                    </div>
                                    <a href="#" className="btn">Подробнее</a>
                                </div>
                                
                                

                                <div className="sidebar-pagen">
                                    <ul>
                                        <li className={classnames("sidebar-pagen__item", "sidebar-pagen__item_active")}>1</li>
                                        <li className="sidebar-pagen__item">2</li>
                                        <li className="sidebar-pagen__item">3</li>
                                        <li className={classnames("sidebar-pagen__item", "sidebar-pagen__item_separator")}>...</li>
                                        <li className="sidebar-pagen__item">9</li>
                                        <li className={classnames("sidebar-pagen__item", "sidebar-pagen__item_next")}></li>
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

export default AwardMaterialsCatalog