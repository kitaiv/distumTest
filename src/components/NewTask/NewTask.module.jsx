import React from 'react'

import './NewTask.css'
import StudentItem from './StudentItem.module'

class NewTask extends React.Component{
    render(){
        return(
            <>
                <nav class="nav">
                    <div class="container">
                        <a href="" class="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span class="nav__current">Новое задание</span>
                    </div>
                </nav>
                    
                <main>
                    <section class="main">
                        <div class="container">
                            <h1>Новое задание</h1>

                            <div class="table-wrapper">
                                <div class="table-container">
                                    <form action="#">
                                        
                                        <div class="form-flex">
                                            <p class="form-label">Название задания</p>
                                            <input type="text"/>

                                            <p class="form-label">Вознаграждение за задание</p>
                                            <span class="form-reward"><input type="text"/></span>

                                            <p class="form-label">Ссылка для кнопки «Учебный» материал»</p>
                                            <input type="text"/>

                                            <p class="form-label">Ссылка для кнопки «Выполнить»</p>
                                            <input type="text"/>
                                        </div>

                                        <div class="form-flex">
                                            <div class="form-flex__inner">
                                                <p class="form-label">Выбрать учеников</p>
                                                <ul class="students-list">
                                                   <StudentItem items={[
                                                       {
                                                           name: 'Все'
                                                       },
                                                       {
                                                           name: 'Неценко Дмитрий Сергеевич'
                                                       },
                                                       {
                                                           name: 'Стричишин Кирилл Николаевич'
                                                       },
                                                       {
                                                           name: 'Довбня Юрий Валерьевич'
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
                                                            name: 'Буланов Олег Александрович'
                                                        },
                                                        {
                                                            name: 'Квант Елена Валерьевна'
                                                        },
                                                        {
                                                            name: 'Буланов Олег Александрович'
                                                        },
                                                        {
                                                            name: 'Стричишин Кирилл Николаевич'
                                                        },
                                                        {
                                                            name: 'Неценко Дмитрий Сергеевич'
                                                        },
                                                        {
                                                            name: 'Довбня Юрий Валерьевич'
                                                        },


                                                    
                                                   ]}/>
                                                </ul>
                                            </div>
                                        </div>

                                        <button class="btn btn-green" type="submit">Сохранить</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default NewTask