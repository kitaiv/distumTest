import React from 'react'

import './RatingPage.css'

import RateItem from './RateItem.module'
import SchoolRateItems from './SchoolRateItems.module'

class RatingPage extends React.Component{

    componentDidMount(){
        // Tabs

        let tab = function () {

            let tabNav = document.querySelectorAll('.tabs-nav__item'),
                    tabContent = document.querySelectorAll('.tab'),
                    tabName;

            tabNav.forEach(item => {
                item.addEventListener('click', selectTabNav);
            });

            function selectTabNav () {

                tabNav.forEach(item => {
                    item.classList.remove('is-active');
                });

                this.classList.add('is-active');
                tabName = this.getAttribute('data-tab-name');
                selectTabContent(tabName);

            };

            function selectTabContent (tabName) {
                tabContent.forEach(item => {
                    
                    if (item.classList.contains(tabName)) {
                        item.classList.add('is-active');
                    } else {
                        item.classList.remove('is-active')
                    }

                });
            };

        };

        tab();
        // Select

        const selectWrapper = document.querySelectorAll('.select-wrapper');
        const selectValue = document.querySelector('#select-value');
        const selectContainer = document.querySelector('.select');

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
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" stroke-width="0.5" />
                        </svg>
                        <span className="nav__current">Рейтинг</span>
                    </div>
                </nav>

                <main>
                    <section className="rating-wrapper">
                        <div className="container">
                            <h1>Рейтинг</h1>

                            <div className="wrap">
                                <div className="tabs">

                                    <div className="tabs__nav tabs-nav">
                                        <div className="tabs-nav__item is-active" data-tab-name="tab-1">Школы</div>
                                        <div className="tabs-nav__item" data-tab-name="tab-2">Ученики</div>
                                    </div>

                                    <div className="tabs__contant">
                                        <div className="tab is-active tab-1">

                                            <div className="rating-selects">
                                                <div className="selects-wrapper__item">
                                                    <div className="select-label">Выберите класс</div>
                                                    <div className="select-wrapper">
                                                        <span id="select-value">Выбрать</span>
                                                        <ul className="select">
                                                            <li className="select__item">Выбрать</li>
                                                            <li className="select__item">9 класс</li>
                                                            <li className="select__item">5 класс</li>
                                                            <li className="select__item">3 класс</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className="btn btn-blue">Показать</button>
                                            </div>

                                            <div className="rating-table table-school">
                                                <h2>Школы</h2>
                                                <div className="rating-table__content rating-wrap">
                                                    <div className="rating-wrap__title">
                                                        <p>Школа</p>
                                                        <p>Рейтинг</p>
                                                    </div>

                                                    <div className="rating-wrap__info rating-rows">
                                                        <SchoolRateItems items={[
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            },
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            },
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            },
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            },
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            },
                                                            {
                                                                schoolName: 'Гимназия №115',
                                                                rating: 3475
                                                            }
                                                        ]} />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="tab tab-2">

                                            <div className="rating-selects rating-selects-student rating-two">
                                                <div className="selects-wrapper__item">
                                                    <div className="select-label">Выберите город</div>
                                                    <div className="select-wrapper">
                                                        <span id="select-value">Выбрать</span>
                                                        <ul className="select">
                                                            <li className="select__item">Выбрать</li>
                                                            <li className="select__item">9 класс</li>
                                                            <li className="select__item">5 класс</li>
                                                            <li className="select__item">3 класс</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="selects-wrapper__item">
                                                    <div className="select-label">Выберите школу</div>
                                                    <div className="select-wrapper">
                                                        <span id="select-value">Выбрать</span>
                                                        <ul className="select">
                                                            <li className="select__item">Выбрать</li>
                                                            <li className="select__item">9 класс</li>
                                                            <li className="select__item">5 класс</li>
                                                            <li className="select__item">3 класс</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="selects-wrapper__item">
                                                    <div className="select-label">Выберите классы</div>
                                                    <div className="select-wrapper">
                                                        <span id="select-value">Выбрать</span>
                                                        <ul className="select">
                                                            <li className="select__item">Выбрать</li>
                                                            <li className="select__item">9 класс</li>
                                                            <li className="select__item">5 класс</li>
                                                            <li className="select__item">3 класс</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className="btn btn-blue">Показать</button>
                                            </div>

                                            <div className="rating-table table-students">
                                                <h2>Ученики</h2>
                                                <div className="rating-table__content rating-wrap">
                                                    <div className="rating-wrap__title">
                                                        <p>Ученик</p>
                                                        <p>Школа</p>
                                                        <p>Класс</p>
                                                        <p>Рейтинг</p>
                                                    </div>

                                                    <div className="rating-wrap__info rating-rows">
                                                        
                                                        <RateItem items={[
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            },
                                                            {
                                                                name: 'Неценко Дмитрий',
                                                                schoolName: 'Гимназия №115',
                                                                grade: '9А',
                                                                rating: 3475
                                                            }
                                                        ]}/>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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

export default RatingPage