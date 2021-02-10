import React from 'react'

import './DetailedPage.css'
import './WebinarDetail.css'
import DetailItem from './DetailItem.module'

class DetailedPage extends React.Component{

    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                            <a href="" className="nav__prev">Главная</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <span className="nav__current">Название конференции</span>
                    </div>
                </nav>

                <main>
                    <section className="conderences-wrapper">
                            <div className="container">
                                    
                                <div className="detail-wrapper">

                                    <div className="detail-wrapper__disc">
                                        <h1>Страница подробная конференции</h1>

                                        <h4>Описание</h4>

                                        <div className="contant-program">
                                            <ul className="contant-program__list plus-type">
                                                <DetailItem items={[
                                                    {
                                                        text: 'Рыбные тексты также применяются для демонстрации'
                                                    },
                                                    {
                                                        text: 'Рыбные тексты также применяются для демонстрации'
                                                    },
                                                    {
                                                        text: 'Рыбные тексты также применяются для демонстрации'
                                                    },
                                                    {
                                                        text: 'Рыбные тексты также применяются для демонстрации'
                                                    },
                                                    {
                                                        text: 'Рыбные тексты также применяются для демонстрации'
                                                    },
                                                ]}/>
                                            </ul>
                                        </div>

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

export default DetailedPage