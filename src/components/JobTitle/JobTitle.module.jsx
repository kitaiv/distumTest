import React from 'react'

import './JobTitle.css'

class JobTitle extends React.Component{
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

                                <h1>Название задания</h1>

                                <div className="table-task">

                                    <div className="table-task__reward">Вознаграждение: <span>500D</span></div>

                                    <a href="#" className="btn">Учебный материал</a>
                                    <a href="#" className="btn btn-green">Выполнить</a>

                                    <div className="table-wrapper">

                                        <div className="table-wrapper__title">
                                            <p>Ученики</p>
                                            <p>Статус</p>
                                        </div>

                                        <div className="table-wrapper__row table-apprentice">

                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Неценко Дмитрий</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-checked" width="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.35899 0.0263672L3.69398 4.69137L1.64105 2.63844L0 4.27954L3.69398 7.97344L10 1.66742L8.35899 0.0263672Z" fill="#42CC71"/>
                                                    </svg>
                                                    <span>Выполнил</span>
                                                </div>
                                            </div>

                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Сергеевич Стричишин</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-checked" width="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.35899 0.0263672L3.69398 4.69137L1.64105 2.63844L0 4.27954L3.69398 7.97344L10 1.66742L8.35899 0.0263672Z" fill="#42CC71"/>
                                                    </svg>
                                                    <span>Выполнил</span>
                                                </div>
                                            </div>

                                            <div className="table-apprentice__item">
                                                <div className="table-apprentice__name">Кирилл Николаевич</div>
                                                <div className="table-apprentice__status">
                                                    <svg className="svg-not-checked" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.5939 2.36364L7.95797 5.99995L11.5939 9.6361C12.1347 10.1771 12.1347 11.0535 11.5939 11.5946C11.3237 11.8648 10.9694 12 10.6153 12C10.2606 12 9.90628 11.865 9.63626 11.5946L5.99954 7.95801L2.36309 11.5945C2.0929 11.8648 1.73858 12 1.38416 12C1.02984 12 0.67577 11.865 0.405339 11.5945C-0.135488 11.0537 -0.135488 10.1773 0.405339 9.63606L4.04117 5.99992L0.405132 2.36364C-0.135695 1.82281 -0.135695 0.946199 0.405132 0.405372C0.945856 -0.135043 1.82195 -0.135043 2.36288 0.405372L5.9995 4.04169L9.63585 0.405372C10.1769 -0.135043 11.0531 -0.135043 11.5937 0.405372C12.1347 0.946199 12.1347 1.82281 11.5939 2.36364Z" fill="#CED0EC"/>
                                                    </svg>
                                                    <span>Не выполнил</span>
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

export default JobTitle