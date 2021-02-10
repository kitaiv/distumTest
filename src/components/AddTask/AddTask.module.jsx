import React from 'react'
import classnames from 'classnames'

import './AddTask.css'
import './NewTask.css'

class AddTask extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            task1: false,
            task2: false,
            task3: false,
            task4: false,
            task5: false,
            task6: false,
            task7: false,
            task8: false,
            task9: false,
            task10: false,
            task11: false,
        }
        this.taskToggle1 = this.taskToggle1.bind(this);
        this.taskToggle2 = this.taskToggle2.bind(this);
        this.taskToggle3 = this.taskToggle3.bind(this);
        this.taskToggle4 = this.taskToggle4.bind(this);
        this.taskToggle5 = this.taskToggle5.bind(this);
        this.taskToggle6 = this.taskToggle6.bind(this);
        this.taskToggle7 = this.taskToggle7.bind(this);
        this.taskToggle8 = this.taskToggle8.bind(this);
        this.taskToggle9 = this.taskToggle9.bind(this);
        this.taskToggle10 = this.taskToggle10.bind(this);
        this.taskToggle11 = this.taskToggle11.bind(this);


    }

    taskToggle1(){
        let isTask = (this.state.task1 === true) ? false : true

        this.setState({
            task1: isTask
        })

    }
    taskToggle2(){
        let isTask = (this.state.task2 === true) ? false : true

        this.setState({
            task2: isTask
        })

    }
    taskToggle3(){
        let isTask = (this.state.task3 === true) ? false : true

        this.setState({
            task3: isTask
        })

    }
    taskToggle4(){
        let isTask = (this.state.task4 === true) ? false : true

        this.setState({
            task4: isTask
        })

    }
    taskToggle5(){
        let isTask = (this.state.task5 === true) ? false : true

        this.setState({
            task5: isTask
        })

    }
    taskToggle6(){
        let isTask = (this.state.task6 === true) ? false : true

        this.setState({
            task6: isTask
        })

    }
    taskToggle7(){
        let isTask = (this.state.task7 === true) ? false : true

        this.setState({
            task7: isTask
        })

    }
    taskToggle8(){
        let isTask = (this.state.task8 === true) ? false : true

        this.setState({
            task8: isTask
        })

    }
    taskToggle9(){
        let isTask = (this.state.task9 === true) ? false : true

        this.setState({
            task9: isTask
        })

    }
    taskToggle10(){
        let isTask = (this.state.task10 === true) ? false : true

        this.setState({
            task10: isTask
        })

    }
    taskToggle11(){
        let isTask = (this.state.task11 === true) ? false : true

        this.setState({
            task11: isTask
        })

    }

    componentDidMount(){
        const selectWrapper = document.querySelectorAll('.select-wrapper');

        selectWrapper.forEach(item => {

            item.addEventListener('click', (e) => {
                if(e.target === item){
                    item.classList.add('select-wrapper_active');
                    item.querySelector('.select').style.display = 'block';
                }
                else if(e.target.classList.contains('select__item')){
                    e.stopPropagation();
                    item.querySelector('#select-value').textContent = e.target.textContent;
                    item.classList.remove('select-wrapper_active');
                    item.querySelector('.select').style.display = 'none';
                }
            });

            item.addEventListener('click', (e) => {
                let target = e.target;

                if (target === item) {
                    item.classList.add('select-wrapper_active');
                } else {
                    item.classList.remove('select-wrapper_active');
                }
            })

        });

    }


    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5" />
                        </svg>
                        <span className="nav__current">Добавить задание</span>
                    </div>
                </nav>

                <main>
                    <section className="addTask-wrapper">
                        <div className="container">
                            <h1>Добавить задание</h1>

                            <div className="table-wrapper">
                                <div className="table-container">
                                    <form action="#">

                                        <div className="form-flex">
                                            <p className="form-label">Введите название</p>
                                            <input type="text"/>

                                            <p className="form-label">Укажите класс</p>
                                            <div className={classnames("select-wrapper")}>
                                                <span id="select-value">Укажите класс</span>
                                                <ul className="select">
                                                    <li className="select__item">Выбрать</li>
                                                    <li className="select__item">9 класс</li>
                                                    <li className="select__item">5 класс</li>
                                                    <li className="select__item">3 класс</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="form-flex">
                                            <div className="form-flex__inner">
                                                <p className="form-label">Выбрать учеников</p>
                                                <ul className="students-list">
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Все</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Неценко Дмитрий Сергеевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Стричишин Кирилл Николаевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Довбня Юрий Валерьевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Буланов Олег Александрович</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Квант Елена Валерьевна</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Неценко Дмитрий Сергеевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Довбня Юрий Валерьевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Стричишин Кирилл Николаевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Буланов Олег Александрович</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Квант Елена Валерьевна</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Все</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Неценко Дмитрий Сергеевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Стричишин Кирилл Николаевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Довбня Юрий Валерьевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Буланов Олег Александрович</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Квант Елена Валерьевна</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Неценко Дмитрий Сергеевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Довбня Юрий Валерьевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Стричишин Кирилл Николаевич</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Буланов Олег Александрович</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className={classnames("checkbox", "green")}>
                                                            <input type="checkbox"/>
                                                            <span className="filter__label">Квант Елена Валерьевна</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="indicate-video">
                                <div className={classnames("tests-catalog", "catalog-video")}>
                                    <h1>Укажите видеоурок</h1>

                                    <div className="indicate-selects">
                                        <div className={classnames("select-wrapper")}>
                                            <span id="select-value">Класс</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper")}>
                                            <span id="select-value">Предмет</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper")}>
                                            <span id="select-value">Учебник</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper")}>
                                            <span id="select-value">Тема</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="content__wrapper">
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task1})} onClick={ this.taskToggle1 }>
                                            <div className="tests-catalog__title">Название видеоролика</div>
                                            <div className="video"></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Подробнее</a>
                                        </div>
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task2})} onClick={ this.taskToggle2 }>
                                            <div className="tests-catalog__title">Название видеоролика</div>
                                            <div className="video"></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Подробнее</a>
                                        </div>
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task3})} onClick={ this.taskToggle3 }>
                                            <div className="tests-catalog__title">Название видеоролика</div>
                                            <div className="video"></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Подробнее</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indicate-material">

                                <h1>Каталог развивающих материалов</h1>

                                <div className="indicate-selects">
                                    <div className={classnames("select-wrapper")}>
                                        <span id="select-value">Класс</span>
                                        <ul className="select">
                                            <li className="select__item">Выбрать</li>
                                            <li className="select__item">9 класс</li>
                                            <li className="select__item">5 класс</li>
                                            <li className="select__item">3 класс</li>
                                        </ul>
                                    </div>
                                    <div className={classnames("select-wrapper")}>
                                        <span id="select-value">Предмет</span>
                                        <ul className="select">
                                            <li className="select__item">Выбрать</li>
                                            <li className="select__item">9 класс</li>
                                            <li className="select__item">5 класс</li>
                                            <li className="select__item">3 класс</li>
                                        </ul>
                                    </div>
                                    <div className={classnames("select-wrapper")}>
                                        <span id="select-value">Учебник</span>
                                        <ul className="select">
                                            <li className="select__item">Выбрать</li>
                                            <li className="select__item">9 класс</li>
                                            <li className="select__item">5 класс</li>
                                            <li className="select__item">3 класс</li>
                                        </ul>
                                    </div>
                                    <div className={classnames("select-wrapper")}>
                                        <span id="select-value">Тема</span>
                                        <ul className="select">
                                            <li className="select__item">Выбрать</li>
                                            <li className="select__item">9 класс</li>
                                            <li className="select__item">5 класс</li>
                                            <li className="select__item">3 класс</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="content__wrapper">
                                    <div className={classnames("content-item", "task-selection", {"task-checked": this.state.task4})} onClick={ this.taskToggle4 }>
                                        <div className="content-item__img">
                                            <img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"/>
                                        </div>
                                        <p className="content-item__title">Животный мир</p>
                                        <div className="content-item__category">Категория: <span>Биология</span></div>
                                        <div className="content-item__grade">9 класс</div>
                                        <div className="content-item__descr">
                                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                                            абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                        </div>
                                        <a href="#" className="btn">Подробнее</a>
                                    </div>
                                    <div className={classnames("content-item", "task-selection", {"task-checked": this.state.task5})} onClick={ this.taskToggle5 }>
                                        <div className="content-item__img">
                                            {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                        </div>
                                        <p className="content-item__title">Животный мир</p>
                                        <div className="content-item__category">Категория: <span>Биология</span></div>
                                        <div className="content-item__grade">9 класс</div>
                                        <div className="content-item__descr">
                                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                                            абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                        </div>
                                        <a href="#" className="btn">Подробнее</a>
                                    </div>
                                    <div className={classnames("content-item", "task-selection",{"task-checked": this.state.task6})} onClick={ this.taskToggle6 }>
                                        <div className="content-item__img">
                                            {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                        </div>
                                        <p className="content-item__title">Животный мир</p>
                                        <div className="content-item__category">Категория: <span>Биология</span></div>
                                        <div className="content-item__grade">9 класс</div>
                                        <div className="content-item__descr">
                                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                                            абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                        </div>
                                        <a href="#" className="btn">Подробнее</a>
                                    </div>
                                    <div className={classnames("content-item", "task-selection", {"task-checked": this.state.task7})} onClick={ this.taskToggle7 }>
                                        <div className="content-item__img">
                                            {/* <!--img src="https://www.careergro.com/images/usa-img.jpg" alt="webinar"--> */}
                                        </div>
                                        <p className="content-item__title">Животный мир</p>
                                        <div className="content-item__category">Категория: <span>Биология</span></div>
                                        <div className="content-item__grade">9 класс</div>
                                        <div className="content-item__descr">
                                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                                            абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                                        </div>
                                        <a href="#" className="btn">Подробнее</a>
                                    </div>
                                </div>

                            </div>

                            <div className="indicate-test">
                                <div className="tests-catalog">
                                    <h1>Каталог тестов</h1>

                                    <div className="indicate-selects">
                                        <div className={classnames("select-wrapper", "task-selection")}>
                                            <span id="select-value">Класс</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper", "task-selection")}>
                                            <span id="select-value">Предмет</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper", "task-selection")}>
                                            <span id="select-value">Учебник</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                        <div className={classnames("select-wrapper", "task-selection")}>
                                            <span id="select-value">Тема</span>
                                            <ul className="select">
                                                <li className="select__item">Выбрать</li>
                                                <li className="select__item">9 класс</li>
                                                <li className="select__item">5 класс</li>
                                                <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="content__wrapper">
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task8})}
                                        onClick={ this.taskToggle8 }>
                                            <div className="tests-catalog__title">Животный мир</div>
                                            <div className="tests-catalog__label">Категория: <span>Биология</span></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Пройти курс</a>
                                        </div>
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task9})} onClick={ this.taskToggle9 }>
                                            <div className="tests-catalog__title">Ядерная физика</div>
                                            <div className="tests-catalog__label">Категория: <span>Физика</span></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Пройти курс</a>
                                        </div>
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task10})} onClick={ this.taskToggle10 }>
                                            <div className="tests-catalog__title">Щелочи</div>
                                            <div className="tests-catalog__label">Категория: <span>Химия</span></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Пройти курс</a>
                                        </div>
                                        <div className={classnames("tests-catalog__item", "task-selection", {"task-checked": this.state.task11})} onClick={ this.taskToggle11 }>
                                            <div className="tests-catalog__title">Правописание</div>
                                            <div className="tests-catalog__label">Категория: <span>Русский язык</span></div>
                                            <div className="test-catalog__text">Сайт рыбатекст поможет дизайнеру, верстальщику,
                                                вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру,
                                                верстальщику, вебмастеру.</div>
                                            <a href="#" className="btn">Пройти курс</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={classnames("btn", "btn-green")}>Создать задание</button>
                        </div>
                    </section>
                </main>

            </>
        )
    }

}

export default AddTask