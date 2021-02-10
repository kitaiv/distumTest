import React from 'react'
import classnames from 'classnames'

import './AddClass.css'



class AddClass extends React.Component{
    constructor(props){
        super(props);

 

    }
    componentDidMount(){
        // Select

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
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <span className="nav__current">Добавить класс</span>
                    </div>
                </nav>

                <main>
                    <section className="classroom-wrapper">
                            <div className="container">

                                <h1>Добавить класс</h1>

                                <div className="classroom">
                                    <div>
                                        <span className="classroom__title">Выберите класс</span>
                                        <div className={classnames("select-wrapper")}>
                                            <span id="select-value">Выбрать</span>
                                            <ul className="select">
                                                    <li className="select__item">Выбрать</li>
                                                    <li className="select__item">9 класс</li>
                                                    <li className="select__item">5 класс</li>
                                                    <li className="select__item">3 класс</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="classroom__title">Укажите букву</span>
                                        <div className={classnames("select-wrapper")} onClick={ this.toggleSelect2 }>
                                            <span id="select-value">Выбрать</span>
                                            <ul className="select">
                                                    <li className="select__item">Выбрать</li>
                                                    <li className="select__item">А</li>
                                                    <li className="select__item">Б</li>
                                                    <li className="select__item">В</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="items-checklist">

                                        <span className="items-checklist__title">Список предметов</span>

                                        <div className="items-checklist__content">
                                                <label className="checkbox green">
                                                        <input type="checkbox"/>
                                                        <span className="filter__label">Математика</span>
                                                </label>
                                                <label className="checkbox green">
                                                        <input type="checkbox"/>
                                                        <span className="filter__label">Биология</span>
                                                </label>
                                                <label className="checkbox green">
                                                        <input type="checkbox"/>
                                                        <span className="filter__label">Русский язык</span>
                                                </label>
                                                <label className="checkbox green">
                                                        <input type="checkbox"/>
                                                        <span className="filter__label">Физика</span>
                                                </label>
                                                <label className="checkbox green">
                                                        <input type="checkbox"/>
                                                        <span className="filter__label">Химия</span>
                                                </label>
                                        </div>
                                </div>

                                <button className="btn btn-green">Сохранить</button>

                                </div>

                            </div>
                    </section>
                </main>
            </>
        )
        
    }
}

export default AddClass