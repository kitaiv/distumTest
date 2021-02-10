import React from 'react'

import CompetitionsItem from './CompetitionsItem.module'
import './CompetitionsPage.css'

class CompetitionsPage extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                            <a href="" className="nav__prev">Главная</a>
                            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                            </svg>
                            <a className="nav__current">Олимпиады и конкурсы</a>
                    </div>
                </nav>

                <main>
                    <section>
                            <div className="container">
                                    
                                <h1 className="title-competition">Олимпиады / Конкурсы</h1>

                                <div className="competitions">
                                    <CompetitionsItem items={[
                                        {
                                            img: 'https://www.careergro.com/images/usa-img.jpg',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
                                        },
                                        {
                                            img: 'https://placehold.it/280x220',
                                            title: '',
                                            subtitles: {
                                                firstTitle: 'Для кого',
                                                secondTitle: 'Предмет',
                                                thirdTitle: 'Период проведения'
                                            },
                                            subtitlesValue: {
                                                firstTitleValue: 'Ученики 5-7 классов',
                                                secondTitleValue: 'Русский язык',
                                                thirdTitleValue: '20.10 - 29.10'
                                            }
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

export default CompetitionsPage