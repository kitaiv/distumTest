import React from 'react'

import './DescribeStudent.css'
import CatalogItem from './CatalogItem.module'


class DescribeStudent extends React.Component{
render(){
return(
<>
    <nav class="nav">
        <div class="container">
            <a href="" class="nav__prev">Главная</a>
            <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5" />
            </svg>
            <span class="nav__current">Каталог публикаций</span>
        </div>
    </nav>

    <main>
        <section class="desc-wrapper">

            <div class="container">
                <div class="discr-student">
                    <h1>Ревенко Наталья Ивановна</h1>

                    <div class="discr-content">
                        <div class="discr-content__img"><img
                                src="https://static3.bigstockphoto.com/2/6/2/large1500/262436392.jpg" alt="student" />
                        </div>
                        <div class="discr-content__info about-student">
                            <div class="about-student__disc">
                                <span>Город</span> Москва
                            </div>
                            <div class="about-student__disc">
                                <span>Школа</span> Гимназия №115
                            </div>
                            <div class="about-student__disc">
                                <span>Образование</span> Высшее, Педагогический факультет
                            </div>
                            <div class="about-student__disc">
                                <span>Специализация</span> Преподаватель иностранных языков
                            </div>
                        </div>
                        <p class="discr-content__text">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                            сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру.
                        </p>
                    </div>

                </div>
            </div>

            <div class="container">
                <h1>Каталог публикаций</h1>
                <div class="content__wrapper">
                    <div class="catalog__wrapper">
                        <CatalogItem items={[
                            {
                                img: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                                title: 'Животный мир',
                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру.'

                            },
                            {
                                img: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                                title: 'Животный мир',
                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру.'

                            },
                            {
                                img: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                                title: 'Животный мир',
                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру.'

                            },
                            {
                                img: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
                                title: 'Животный мир',
                                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев. Сайт рыбатекст поможет дизайнеру.'

                            }
                        ]}/>
                    </div>

                </div>
            </div>
        </section>
    </main>
</>
)
}
}

export default DescribeStudent