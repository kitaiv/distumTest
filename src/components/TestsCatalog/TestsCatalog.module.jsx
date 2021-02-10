import React from 'react'

import './TestsCatalog.css'
import TestItems from './TestItems.module'

class TestsCatalog extends React.Component{
    render(){
        return(
            <>
                <nav class="nav">
                    <div class="container">
                        <a href="" class="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span class="nav__current">Каталог тестов</span>
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
                                        <input type="checkbox" />
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox" />
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter mob">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox" />
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter mob">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox" />
                                        <span class="filter__label">Родителям</span>
                                    </label>
                                </div>
                            </li>
                            <li class="filter">
                                <h5 class="filter__header">Заголовок фильтра</h5>
                                <div class="checkbox__wrap">
                                    <label class="checkbox green">
                                        <input type="checkbox" defaultChecked={true} />
                                        <span class="filter__label">Учителям</span>
                                    </label>
                                    <br/>
                                    <label class="checkbox green">
                                        <input type="checkbox" />
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
                    <section class="tests-catalog">
                        <div class="container">
                            <h1>Каталог тестов</h1>
                            <div class="content__wrapper">
                                
                                <TestItems items={[
                                    {
                                        title: 'Животный мир',
                                        category: 'Химия',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Биология',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Биология',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Химия',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Химия',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Химия',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Биология',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    },
                                    {
                                        title: 'Животный мир',
                                        category: 'Химия',
                                        text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                    }
                                ]}/>

                                <div class="sidebar-pagen">
                                    <ul>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_active">1</li>
                                        <li class="sidebar-pagen__item">2</li>
                                        <li class="sidebar-pagen__item">3</li>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_separator">...</li>
                                        <li class="sidebar-pagen__item">9</li>
                                        <li class="sidebar-pagen__item sidebar-pagen__item_next"></li>
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

export default TestsCatalog