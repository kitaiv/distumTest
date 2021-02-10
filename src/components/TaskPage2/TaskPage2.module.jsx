import React from 'react'

import './TaskPage2.css'
import StudentsListItems from './StudentsListItems.module'
import VideoItems from './VideoItems.module'
import MaterialContentItems from './MaterialContentItems.module'
import TestItem from './TestItem.module'

class TaskPage2 extends React.Component{
    render(){
        return(
        <>
            <nav className="nav">
                <div className="container">
                    <a href="" className="nav__prev">Главная</a>
                    <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5" />
                    </svg>
                    <span className="nav__current">Задание</span>
                </div>
            </nav>

            <main>
                <section className="addTask-wrapper task-wrapper">

                    <div className="container">
                        <h1 className="task-wrapper__title">Задание</h1>
                    </div>

                    <div className="container">

                        <aside className="aside-content">
                            <div className="aside-content__disc">
                                <p>Предмет<span><a href="#">Русский язык</a></span></p>
                                <p>Тема<span><a href="#">Сложноподчиненные предложения</a></span></p>
                                <p>Класс<span>9 класс</span></p>
                            </div>
                            <div className="aside-student">
                                <div className="form-flex__inner">
                                    <p className="form-label">Выбрать учеников</p>
                                    <ul className="students-list">
                                        <StudentsListItems items={[
                                            {
                                                name: 'Все'
                                            },
                                            {
                                                name: 'Неценко Дмитрий Сергеевич'
                                            },
                                            {
                                                name: 'Квант Елена Валерьевна'
                                            },
                                            {
                                                name: 'Неценко Дмитрий Сергеевич'
                                            },
                                            {
                                                name: 'Довбня Юрий Валерьевич'
                                            },
                                            {
                                                name: 'Стричишин Кирилл Николаевич'
                                            },
                                            {
                                                name: 'Квант Елена Валерьевна'
                                            },
                                            {
                                                name: 'Неценко Дмитрий Сергеевич'
                                            },
                                            {
                                                name: 'Довбня Юрий Валерьевич'
                                            },
                                            {
                                                name: 'Стричишин Кирилл Николаевич'
                                            },
                                            {
                                                name: 'Буланов Олег Александрович'
                                            },
                                            {
                                                name: 'Квант Елена Валерьевна'
                                            },
                                            {
                                                name: 'Неценко Дмитрий Сергеевич'
                                            },

                                            {
                                                name: 'Стричишин Кирилл Николаевич'
                                            },
                                        ]}/>
                                        
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        <div className="indicate-video">
                            <div className="tests-catalog catalog-video">
                                <h1>Видеоуроки</h1>

                                <div className="indicate-selects">

                                    <div className="content__wrapper">
                                        
                                        <VideoItems items={[
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            },
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            },
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            },
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            },
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            },
                                            {
                                                title: 'Название видеоролика',
                                                url: '',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            }
                                            
                                        ]}/>

                                    </div>
                                </div>
                            </div>

                            <div className="indicate-material">

                                <h1>Материал</h1>

                                <div className="content__wrapper">

                                    <MaterialContentItems items={[
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Химия',
                                            grade: 1,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        },
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Биология',
                                            grade: 10,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        },
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Химия',
                                            grade: 7,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        },
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Химия',
                                            grade: 1,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        },
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Биология',
                                            grade: 5,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        },
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: 'Животный мир',
                                            category: 'Химия',
                                            grade: 1,
                                            descripition: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.',
                                        }
                                    ]}/>
                                    
                                    
                                </div>

                            </div>

                            <div className="indicate-test">
                                <div className="tests-catalog">
                                    <h1>Тесты</h1>

                                    <div className="content__wrapper">

                                        <TestItem items={[
                                            {
                                                title: 'Название',
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
                                                category: 'Метематика',
                                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                            }
                                            
                                        ]}/>  
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

export default TaskPage2