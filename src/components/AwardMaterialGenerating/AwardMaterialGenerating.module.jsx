import React from 'react'

import classnames from 'classnames'

class AwardMaterialGenerating extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const selectWrapper = document.querySelectorAll('.select-wrapper');

        selectWrapper.forEach(item => {

            item.addEventListener('click', (e) => {
                if(e.target === item){
                    item.classList.add('select-wrapper_active');
                    item.querySelector('.select').style.display = 'block';
                }
                else if(e.target.classList.contains('select__item')){
                    e.stopPropagation();
                    item.querySelector('#select-value').textContent = e.target.textContent;
                    item.classList.remove('select-wrapper_active');
                    item.querySelector('.select').style.display = 'none';
                }
            });

            item.addEventListener('click', (e) => {
                let target = e.target;

                if (target === item) {
                    item.classList.add('select-wrapper_active');
                } else {
                    item.classList.remove('select-wrapper_active');
                }
            })

        });  
    }



    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Генерация наградных материалов</span>
                    </div>
                </nav>
                    
                <main>
                    <section className="main">
                        <div className="container">
                            <h1>Генерация наградных материалов</h1>

                            <div className="table-wrapper">
                                <div className="table-container">
                                    <form action="#">
                                        <p className="form-label">Выберите оформление</p>
                                        <div className="form-flex">
                                            <div className={classnames("select-wrapper")} >
                                                <span id="select-value">Выбрать</span>
                                                <ul className="select">
                                                    <li className="select__item">Выбрать</li>
                                                    <li className="select__item">First option</li>
                                                    <li className="select__item">Second option</li>
                                                    <li className="select__item">Third option</li>
                                                    <li className="select__item">Fourth option</li>
                                                    <li className="select__item">Fifth option</li>
                                                </ul>
                                            </div>
                                            <a href="#" className={classnames("btn", "btn-details")}>Выбрать</a>
                                        </div>
                                        <div className="form-grid">
                                            <div className="form-grid__item">
                                                <p className="form-label">Название награды</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-grid__item">
                                                <p className="form-label">Описание награды</p>
                                                <textarea className="form-textarea" name="description" cols="30" rows="10"></textarea>
                                            </div>
                                            <div className="form-grid__item">
                                                <p className="form-label">Кто вручает награду</p>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-flex">
                                            <p className="form-label">Фото</p>
                                            <div className="file-wrapper">
                                                <span>Выбрать</span>
                                                <input type="file"/>
                                            </div>
                                            <a href="#" className={classnames("btn", "btn-details")}>Загрузить</a>
                                        </div>
                                        <div className="form-flex">
                                            <p className="form-label">Печать</p>
                                            <div className="file-wrapper">
                                                <span>Выбрать</span>
                                                <input type="file"/>
                                            </div>
                                            <a href="#" className={classnames("btn", "btn-details")}>Загрузить</a>
                                        </div>
                                        <div className="form-flex">
                                            <p className="form-label">Номинация</p>
                                            <input type="text"/>
                                        </div>
                                        <div className="form-flex">
                                            <p className="form-label"></p>
                                            <div className={classnames("file-wrapper", "file-wrapper_nomination")}>
                                                <span>Добавить номинацию</span>
                                            </div>
                                        </div>
                                        <button className={classnames("btn", "btn-green")} type="submit">Сохранить</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default AwardMaterialGenerating