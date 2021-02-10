import React from 'react'

import './ListCourses.css'

import CourseItems from './CourseItems.module'

class ListCourses extends React.Component{
    render(){
        return(
            <>
                <nav class="nav">
                    <div class="container">
                        <a href="" class="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span class="nav__current">Список курсов</span>
                    </div>
                </nav>

                <article class="filters__wrap">
                    <div class="container">
                        <ul class="filters">
                            <li class="filter">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox"/>
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox"/>
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter mob">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox"/>
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter mob">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox"/>
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true}/>
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox"/>
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div class="filters__btn-wrap">
                            <button class="filters__btn show">Показать</button>
                            <button class="filters__btn reset">Сбросить фильтр</button>
                        </div>
                    </div>
                </article>

                <main>
                    <section class="main">
                        <div class="container">
                            <h1 class="main__header">Список курсов</h1>
                            <div class="courses__wrap">
                                <ul class="courses">

                                    <CourseItems items={[
                                        // possible colors: red, lime, green, violet
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'red',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 32,
                                            duration: 20,
                                            price: 1750,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'green',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 32,
                                            duration: 20,
                                            price: 2000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'red',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 20,
                                            duration: 15,
                                            price: 1750,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'violet',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 32,
                                            duration: 20,
                                            price: 2000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'violet',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 20,
                                            duration: 15,
                                            price: 1750,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'lime',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 28,
                                            duration: 60,
                                            price: 10000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'green',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 28,
                                            duration: 60,
                                            price: 10000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'red',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 28,
                                            duration: 60,
                                            price: 6000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'red',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 28,
                                            duration: 60,
                                            price: 6000,
                                        },
                                        {
                                            img: 'https://placehold.it/243x333',
                                            backColor: 'green',
                                            courseTitle: 'Тема курса',
                                            subTitle: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            courseDesc: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру',
                                            lessons: 28,
                                            duration: 60,
                                            price: 6000,
                                        },
                                    ]}/>
                                    
                                </ul>
                                <div class="sidebar-pagen">
                                    <ul>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_active">1</li>
                                        <li class="sidebar-pagen__item">2</li>
                                        <li class="sidebar-pagen__item">3</li>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_separator">...</li>
                                        <li class="sidebar-pagen__item">9</li>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_next"><span></span></li>
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

export default ListCourses;