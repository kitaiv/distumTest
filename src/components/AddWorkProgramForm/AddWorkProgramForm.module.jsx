import React from 'react'
import classnames from 'classnames'

import '../../assets/css/fonts.css'
import '../../assets/css/main.css'
import './AddWorkProgramForm.css'



class AddWorkProgramForm extends React.Component{
    constructor(){
        super()
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
                        <span className="nav__current">Добавить рабочую программу</span>
                    </div>
                </nav>
                    
                <main>
                    <section>
                        <div className="container">
                            <h1>Добавить рабочую программу</h1>

                            <div className="table-wrapper">
                                <div className={classnames("table-container","form-post")}>
                                    <form action="#">
                                        <div className="form-container">
                                            <div className="form-flex">
                                                <p className="form-label">Введите название рабочей программы</p>
                                                <input type="text"/>
                                            </div>
                                            <div className="form-container">
                                                <p className="form-label">Введите текст рабочей программы</p>
                                                <textarea className="form-textarea" name="description" cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                        
                                        <button className={classnames("btn", "button-green")} type="submit">Разместить рабочую программу</button>
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

export default AddWorkProgramForm