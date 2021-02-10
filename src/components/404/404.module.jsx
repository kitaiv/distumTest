import React from 'react'

import './404.css'


class NotFound extends React.Component{
    render(){
        return(
            <div className="wrapper">  
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Страница не найдена</span>
                    </div>
                </nav>
            
                <main>
                    <section className="404">
                        <div className="container">
                            <h1>Ошибка 404</h1>
                            <div className="error-404">
                                <span>404</span>
                                <p>К сожалению, данная страница больше не существует или находится по другому адресу</p>
                                <a href="#" className="btn">На главную</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default NotFound;