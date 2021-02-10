import React from 'react'

import './ProfileEditing.css'

class ProfileEditing extends React.Component{
    render(){
        return(
            <>
                <nav className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Редактирование профиля</span>
                    </div>
                </nav>
                    
                <main>
                    <section className="main">
                        <div className="container">
                            <h1>Редактирование профиля</h1>

                            <div className="table-wrapper">
                                <div className="table-container">
                                    <form action="#">
                                        <div className="form-container">
                                            <div className="form-flex">
                                                <p className="form-label">Имя</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-flex">
                                                <p className="form-label">Фамилия</p>
                                                <input type="text"/>
                                            </div>
                                            <p className="form-label">Фото</p>
                                            <div className="input-container">
                                                <div className="file-wrapper">
                                                    <span>Выбрать</span>
                                                    <input type="file"/>
                                                </div>
                                                <a href="#" className="btn btn-details">Загрузить</a>
                                            </div>
                                            <div className="form-flex">
                                                <p className="form-label">Город</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-flex">
                                                <p className="form-label">Учебное заведение</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-container">
                                                <p className="form-label">Вступительное слово</p>
                                                <textarea className="form-textarea" name="description" cols="30" rows="10"></textarea>
                                            </div>
                                            <div className="form-flex">
                                                <p className="form-label">E-mail</p>
                                                <input type="email"/>
                                            </div>
                                            <div></div>
                                            <div className="form-flex">
                                                <p className="form-label">Телефон</p>
                                                <input type="tel" autoComplete="username"/>
                                            </div>
                                            <div></div>
                                            <div className="form-flex">
                                                <p className="form-label">Пароль</p>
                                                <input type="password" autoComplete="current-password"/>
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-green" type="submit">Сохранить</button>
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

export default ProfileEditing