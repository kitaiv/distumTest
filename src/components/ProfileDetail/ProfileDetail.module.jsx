import React from 'react'
import { Chart } from "react-google-charts";

import './ProfileDetail.css'
class ProfileDetail extends React.Component{

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
                <span className="nav__current">Неценко Дмитрий Сергеевич</span>
            </div>
        </nav>

        <main>
            <section className="main">
                <div className="container">
                    <h1>Неценко Дмитрий Сергеевич</h1>

                    <div className="profile-container">

                        <div className="profile-wrapper profile-wrapper_wide">
                            <div className="profile-wrapper_white">
                                <div className="profile-wrapper__inner">
                                    <div className="profile__img"><img src="https://www.careergro.com/images/usa-img.jpg"
                                            alt="profile" /></div>
                                    <div className="profile__descr">
                                        <div className="profile__descr-item">
                                            <span>Класс</span><span>9Б</span>
                                        </div>
                                        <div className="profile__descr-item">
                                            <span>Учитель</span><span>Ревенко Наталья Ивановна</span>
                                        </div>
                                        <div className="profile__descr-item">
                                            <span>Профиль</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-wrapper profile-wrapper_narrow">
                            <div className="profile-wrapper_white">
                                <h2>Прогресс заданий</h2>
                                <div className="profile-wrapper__inner">
                                    <div className="profile-progress">
                                        <div id="donutchart">
                                            <Chart width={'400px'}
                                                    height={'300px'}
                                                    chartType="PieChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={[
                                                        ['Task', 'Hours per Day'],
                                                        ['Work', 11],
                                                        ['Eat', 2],
                                                        ['Commute', 2],
                                                        ['Watch TV', 2],
                                                        ['Sleep', 7],
                                                    ]}
                                                    options={{
                                                        // Just add this option
                                                        pieHole: 0.4
                                                    }}
                                                    rootProps={{ 'data-testid': '3' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="profile-checklist">
                                        <div className="profile__descr-item">
                                            <span>Предметы</span>
                                        </div>
                                        <div className="profile-checklist__list">
                                            <label className="checkbox green">
                                                <input type="checkbox" />
                                                <span className="filter__label">Математика</span>
                                            </label>
                                            <label className="checkbox green">
                                                <input type="checkbox" />
                                                <span className="filter__label">Биология</span>
                                            </label>
                                            <label className="checkbox green">
                                                <input type="checkbox" />
                                                <span className="filter__label">Русский язык</span>
                                            </label>
                                            <label className="checkbox green">
                                                <input type="checkbox" />
                                                <span className="filter__label">Физика</span>
                                            </label>
                                            <label className="checkbox green">
                                                <input type="checkbox" />
                                                <span className="filter__label">Химия</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-wrapper profile-wrapper_wide">
                            <h2>Пройденные курсы</h2>
                            <div className="profile-wrapper__inner profile-wrapper__inner_column">
                                <div className="tabs__nav tabs-nav tabs-nav_column">
                                    <div className="tabs-nav__item is-active" data-tab-name="tab-1">Математика</div>
                                    <div className="tabs-nav__item" data-tab-name="tab-2">Русский язык</div>
                                    <div className="tabs-nav__item" data-tab-name="tab-3">Литература</div>
                                    <div className="tabs-nav__item" data-tab-name="tab-4">Физика</div>
                                    <div className="tabs-nav__item" data-tab-name="tab-5">Химия</div>
                                    <div className="tabs-nav__item" data-tab-name="tab-6">История России</div>
                                </div>

                                <div className="profile-wrapper_white">
                                    <h2>Сложноподчиненные предложения</h2>
                                    <div className="lesson-list__wrapper">
                                        <ul className="lessons-list">
                                            <li className="lesson-completed"><a href="#">Урок 1</a></li>
                                            <li className="lesson-completed"><a href="#">Урок 2</a></li>
                                            <li className="lesson-completed"><a href="#">Урок 3</a></li>
                                            <li><a href="#">Урок 4</a></li>
                                            <li><a href="#">Урок 5</a></li>
                                        </ul>
                                        <ul className="lessons-list">
                                            <li><a href="#">Урок 6</a></li>
                                            <li><a href="#">Урок 7</a></li>
                                            <li><a href="#">Урок 8</a></li>
                                            <li><a href="#">Урок 9</a></li>
                                            <li><a href="#">Урок 10</a></li>
                                        </ul>
                                    </div>

                                    <h2>Деепричастные обороты</h2>
                                    <div className="lesson-list__wrapper">
                                        <ul className="lessons-list">
                                            <li className="lesson-completed"><a href="#">Урок 1</a></li>
                                            <li><a href="#">Урок 2</a></li>
                                            <li><a href="#">Урок 3</a></li>
                                            <li><a href="#">Урок 4</a></li>
                                            <li><a href="#">Урок 5</a></li>
                                        </ul>
                                        <ul className="lessons-list">
                                            <li><a href="#">Урок 6</a></li>
                                            <li><a href="#">Урок 7</a></li>
                                            <li><a href="#">Урок 8</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-wrapper profile-wrapper_narrow">
                            <h2>Достижения</h2>
                            <div className="profile-wrapper_white">
                                <div className="profile-achievements">
                                    <div className="table-wrapper">

                                        <div className="table-wrapper__title">
                                            <p>Название</p>
                                            <p>Статус</p>
                                        </div>

                                        <div className="table-wrapper__row table-apprentice">
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Название достижения</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-checked" width="12" viewBox="0 0 10 8" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.35899 0.0263672L3.69398 4.69137L1.64105 2.63844L0 4.27954L3.69398 7.97344L10 1.66742L8.35899 0.0263672Z"
                                                            fill="#42CC71" />
                                                    </svg>
                                                    <span>Выполнил</span>
                                                </div>
                                            </div>
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Второе достижение</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-not-checked" width="12" height="12" viewBox="0 0 12 12"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.5939 2.36364L7.95797 5.99995L11.5939 9.6361C12.1347 10.1771 12.1347 11.0535 11.5939 11.5946C11.3237 11.8648 10.9694 12 10.6153 12C10.2606 12 9.90628 11.865 9.63626 11.5946L5.99954 7.95801L2.36309 11.5945C2.0929 11.8648 1.73858 12 1.38416 12C1.02984 12 0.67577 11.865 0.405339 11.5945C-0.135488 11.0537 -0.135488 10.1773 0.405339 9.63606L4.04117 5.99992L0.405132 2.36364C-0.135695 1.82281 -0.135695 0.946199 0.405132 0.405372C0.945856 -0.135043 1.82195 -0.135043 2.36288 0.405372L5.9995 4.04169L9.63585 0.405372C10.1769 -0.135043 11.0531 -0.135043 11.5937 0.405372C12.1347 0.946199 12.1347 1.82281 11.5939 2.36364Z"
                                                            fill="#CED0EC" /></svg>
                                                    <span>Не выполнил</span>
                                                </div>
                                            </div>
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Еще одно достижение</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-not-checked" width="12" height="12" viewBox="0 0 12 12"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.5939 2.36364L7.95797 5.99995L11.5939 9.6361C12.1347 10.1771 12.1347 11.0535 11.5939 11.5946C11.3237 11.8648 10.9694 12 10.6153 12C10.2606 12 9.90628 11.865 9.63626 11.5946L5.99954 7.95801L2.36309 11.5945C2.0929 11.8648 1.73858 12 1.38416 12C1.02984 12 0.67577 11.865 0.405339 11.5945C-0.135488 11.0537 -0.135488 10.1773 0.405339 9.63606L4.04117 5.99992L0.405132 2.36364C-0.135695 1.82281 -0.135695 0.946199 0.405132 0.405372C0.945856 -0.135043 1.82195 -0.135043 2.36288 0.405372L5.9995 4.04169L9.63585 0.405372C10.1769 -0.135043 11.0531 -0.135043 11.5937 0.405372C12.1347 0.946199 12.1347 1.82281 11.5939 2.36364Z"
                                                            fill="#CED0EC" /></svg>
                                                    <span>Не выполнил</span>
                                                </div>
                                            </div>
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Просто достижения</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-not-checked" width="12" height="12" viewBox="0 0 12 12"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.5939 2.36364L7.95797 5.99995L11.5939 9.6361C12.1347 10.1771 12.1347 11.0535 11.5939 11.5946C11.3237 11.8648 10.9694 12 10.6153 12C10.2606 12 9.90628 11.865 9.63626 11.5946L5.99954 7.95801L2.36309 11.5945C2.0929 11.8648 1.73858 12 1.38416 12C1.02984 12 0.67577 11.865 0.405339 11.5945C-0.135488 11.0537 -0.135488 10.1773 0.405339 9.63606L4.04117 5.99992L0.405132 2.36364C-0.135695 1.82281 -0.135695 0.946199 0.405132 0.405372C0.945856 -0.135043 1.82195 -0.135043 2.36288 0.405372L5.9995 4.04169L9.63585 0.405372C10.1769 -0.135043 11.0531 -0.135043 11.5937 0.405372C12.1347 0.946199 12.1347 1.82281 11.5939 2.36364Z"
                                                            fill="#CED0EC" /></svg>
                                                    <span>Не выполнил</span>
                                                </div>
                                            </div>
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Название достижения</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-not-checked" width="12" height="12" viewBox="0 0 12 12"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.5939 2.36364L7.95797 5.99995L11.5939 9.6361C12.1347 10.1771 12.1347 11.0535 11.5939 11.5946C11.3237 11.8648 10.9694 12 10.6153 12C10.2606 12 9.90628 11.865 9.63626 11.5946L5.99954 7.95801L2.36309 11.5945C2.0929 11.8648 1.73858 12 1.38416 12C1.02984 12 0.67577 11.865 0.405339 11.5945C-0.135488 11.0537 -0.135488 10.1773 0.405339 9.63606L4.04117 5.99992L0.405132 2.36364C-0.135695 1.82281 -0.135695 0.946199 0.405132 0.405372C0.945856 -0.135043 1.82195 -0.135043 2.36288 0.405372L5.9995 4.04169L9.63585 0.405372C10.1769 -0.135043 11.0531 -0.135043 11.5937 0.405372C12.1347 0.946199 12.1347 1.82281 11.5939 2.36364Z"
                                                            fill="#CED0EC" /></svg>
                                                    <span>Не выполнил</span>
                                                </div>
                                            </div>
                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Второе достижение</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-checked" width="12" viewBox="0 0 10 8" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.35899 0.0263672L3.69398 4.69137L1.64105 2.63844L0 4.27954L3.69398 7.97344L10 1.66742L8.35899 0.0263672Z"
                                                            fill="#42CC71" />
                                                    </svg>
                                                    <span>Выполнил</span>
                                                </div>
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

export default ProfileDetail