import React from 'react'

import './NameClass.css'
import ClassItem from './ClassItem.module'

class NameClass extends React.Component{
    render(){
        return(
            <>
                <nav class="nav">
                    <div class="container">
                            <a href="" class="nav__prev">Главная</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" stroke-width="0.5"/>
                            </svg>
                            <span class="nav__current">9 класс</span>
                    </div>
                </nav>

                <main>
                    <section>
                            <div class="container">

                                <h1>9 класс</h1>

                                <div class="class-title-wrap">

                                    <ClassItem items={[
                                        {
                                            classTitle: 'Название класа',
                                            students: 14
                                        },
                                        {
                                            classTitle: 'Название класа',
                                            students: 10
                                        },
                                        {
                                            classTitle: 'Название класа',
                                            students: 11
                                        },
                                        {
                                            classTitle: 'Название класа',
                                            students: 20
                                        },
                                        {
                                            classTitle: 'Название класа',
                                            students: 7
                                        },
                                        {
                                            classTitle: 'Название класа',
                                            students: 9
                                        }
                                    ]}/>
                                    
                                </div>

                            </div>
                    </section>
                </main>
            </>
        )
    }
}

export default NameClass