import React from 'react'

import VideoItem from './VideoItem.module'

class FavoritesVideo extends React.Component{
    componentDidMount(){
        // Tabs

        let tab = function () {

            let tabNav = document.querySelectorAll('.tabs-nav__item'),
                    tabContent = document.querySelectorAll('.tab'),
                    tabName;

            tabNav.forEach(item => {
                item.addEventListener('click', selectTabNav);
            });

            function selectTabNav () {

                tabNav.forEach(item => {
                    item.classList.remove('is-active');
                });

                this.classList.add('is-active');
                tabName = this.getAttribute('data-tab-name');
                selectTabContent(tabName);

            };

            function selectTabContent (tabName) {
                tabContent.forEach(item => {
                    
                    if (item.classList.contains(tabName)) {
                        item.classList.add('is-active');
                    } else {
                        item.classList.remove('is-active')
                    }

                });
            };

        };

        tab();
    }
render(){
return(
<>
    <nav className="nav">
        <div className="container">
            <a href="" className="nav__prev">Главная</a>
            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5" />
            </svg>
            <span className="nav__current">Избранное</span>
        </div>
    </nav>

    <main>
        <section className="tests-catalog catalog-video">
            <div className="container">
                <h1>Избранное</h1>

                <div className="wrap">
                    <div className="tabs">

                        <div className="tabs__nav tabs-nav">
                            <div className="tabs-nav__item is-active" data-tab-name="tab-1">Видеоуроки</div>
                            <div className="tabs-nav__item" data-tab-name="tab-2">Видеолекции</div>
                            <div className="tabs-nav__item" data-tab-name="tab-3">Видеолекции</div>
                            <div className="tabs-nav__item" data-tab-name="tab-4">Вебинары</div>
                            <div className="tabs-nav__item" data-tab-name="tab-5">Рабочие программы</div>
                            <div className="tabs-nav__item" data-tab-name="tab-6">Публикации</div>
                        </div>

                        <div className="tabs__contant">
                            <div className="tab is-active tab-1">
                                <div className="content__wrapper">

                                    <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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

                            <div className="tab tab-2">
                                <div className="content__wrapper">

                                <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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

                            <div className="tab tab-3">
                                <div className="content__wrapper">

                                <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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

                            <div className="tab tab-4">
                                <div className="content__wrapper">

                                <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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

                            <div className="tab tab-5">
                                <div className="content__wrapper">

                                <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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

                            <div className="tab tab-6">
                                <div className="content__wrapper">

                                <VideoItem items={[
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
                                        },
                                        {
                                            title: 'Название видеоролика',
                                            videoUrl: '',
                                            subText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.'
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
export default FavoritesVideo