import React from 'react'

import './WebinarDetail.css'

class WebinarDetail extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                            <a href="" className="nav__prev">Главная</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <a href="" className="nav__prev">Каталог рабочих программ</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <span className="nav__current">Вебинар по русскому языку</span>
                    </div>
                </nav>

                <main>
                    <section>
                            <div className="container">
                                    
                                <div className="detail-wrapper">

                                    <div className="detail-wrapper__disc">
                                        <h1>Детальная страница вебинара по русскому языку</h1>
                                        <p>Рыбные тексты также применяются для демонстрации различных видов шрифта и в разработке макетов. Как правило их содержание бессмысленно.</p>
                                        <p>По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение.</p>
                                    </div>

                                    <div className="detail-wrapper_video">
                                        <div className="video"></div>
                                    </div>

                                </div>
                                    
                            </div>
                    </section>
                </main>
            </>
        )
    }
}

export default WebinarDetail