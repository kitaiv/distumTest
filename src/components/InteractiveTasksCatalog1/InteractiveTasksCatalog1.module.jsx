import React from 'react'

import InteractiveItem from './InteractiveItem.module'

class InteractiveTasksCatalog1 extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Интерактивные задания</span>
                    </div>
                </nav>

                <main>
                    <section className="main">
                        <div className="container">
                            <h1>Интерактивные задания</h1>
                            <div className="content__wrapper">

                                <InteractiveItem items={[
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    },
                                    {
                                        img: 'https://www.careergro.com/images/usa-img.jpg',
                                        title: 'Название интерактивного задания'
                                    }
                                ]}/>
                                

                                <div className="sidebar-pagen">
                                    <ul>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_active">1</li>
                                        <li className="sidebar-pagen__item">2</li>
                                        <li className="sidebar-pagen__item">3</li>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_separator">...</li>
                                        <li className="sidebar-pagen__item">9</li>
                                        <li className="sidebar-pagen__item sidebar-pagen__item_next"></li>
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

export default InteractiveTasksCatalog1