import React from 'react'

import './TasksPage.css'
import TaskItems from './TaskItems.module'

class TasksPage extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                            <a href="" className="nav__prev">Главная</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <span className="nav__current">Задания</span>
                    </div>
                </nav>

                <main>
                    <section>
                            <div className="container">

                                <h1>Задания</h1>

                                <div className="tasks-wrapper">

                                    <TaskItems items={[
                                        {
                                            title: 'Название задания',
                                            reward: 5000,
                                        },
                                        {
                                            title: 'Название задания',
                                            reward: 4000,
                                        },
                                        {
                                            title: 'Название задания',
                                            reward: 3500,
                                        },
                                        {
                                            title: 'Название задания',
                                            reward: 5500,
                                        },
                                        {
                                            title: 'Название задания',
                                            reward: 4700,
                                        },
                                    ]}/>

                                </div>

                            </div>
                    </section>
                </main>
            </>
        )
    }
}


export default TasksPage