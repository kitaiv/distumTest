import React from 'react'

import './ClassDetail.css'

import ItemsList from './ItemsList.module'


class ClassDetail extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            data: {
                name: "",
                gender: "Мужской",
                activeClass: 'student-item_active',
                select: () => {
                    let items = Array.from(document.querySelectorAll(".student-item"));

                    items.forEach( elem => {
                            let el = elem;

                            el.addEventListener("click", (e) => {
                
                                if(e.target.classList.contains('select-wrapper') || e.target.id === 'select-value'){
                                    e.target.classList.add('select-wrapper_active');
                                    el.querySelector('.select').style.display = 'block';
                                }
                                if(e.target.classList.contains('select__item')){
                                    e.stopPropagation();
                                    el.querySelector('#select-value').textContent = e.target.textContent;
                                    el.querySelector('.select-wrapper').classList.remove('select-wrapper_active');
                                    el.querySelector('.select').style.display = 'none';
                                }
                
                            });
                    })
                },
                edit: () => {
                    let items = Array.from(document.querySelectorAll(".student-item"));
                    
    
                    items.forEach( elem => {
                        
                        let el = elem.lastChild;
                        el.addEventListener('click', () => {
                            el = el.closest('.student-item')
                            el.classList.toggle("student-item_active");
                
                            el.addEventListener("click", (e) => {
                
                                if(e.target.classList.contains('select-wrapper') || e.target.classList.contains('student-item__edit') ){
                                    e.target.classList.add('select-wrapper_active');
                                    el.querySelector('.select').style.display = 'block';
                                }
                                if(e.target.classList.contains('select__item')){
                                    e.stopPropagation();
                                    el.querySelector('#select-value').textContent = e.target.textContent;
                                    el.querySelector('.select-wrapper').classList.remove('select-wrapper_active');
                                    el.querySelector('.select').style.display = 'none';
                                }
                
                                e.stopImmediatePropagation();
                                if (e.target == el.querySelector('.edit-cancel')) {
                                    el.classList.remove("student-item_active");
                                    el.getElementsByTagName("input")[0].value = el.getElementsByTagName("a")[0].textContent;
                                } else if (e.target == el.querySelector('.edit-ok')) {
                                    el.getElementsByTagName("a")[0].textContent = el.getElementsByTagName("input")[0].value;
                                    el.getElementsByTagName("p")[0].textContent = el.querySelector("#select-value").textContent;
                                    el.classList.remove("student-item_active");
                                }
                            });
                        })
                    })  
                }
            }            
        }

    }

    addItem(){
        let itemList = this.state.items
        itemList.push(this.state.data)
        this.setState({
            items: itemList
        });
    }

    render(){
        return(
            <>
                <nav    className="nav">
                    <div className="container">
                        <a href="" className="nav__prev">Главная</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">9А класс</span>
                    </div>
                </nav>
                    
                <main>
                    <section className="main">
                        <div className="container">
                            <h1>9А класс</h1>
                            <div className="content__wrapper content__class">
                                <div className="class-wrapper">
                                    <div className="student-wrapper">
                                        <div className="student-container">
                                            <div className="student-container__header">
                                                <div className="student-name">Ученики</div>
                                                <div className="student-gender">Пол</div>
                                                <div className="student-edit">Ред<span>актирование</span></div>
                                            </div>
                                            
                                            <ItemsList items={[
                                                {
                                                    name: 'Неценко Дмитрий Сергеевич',
                                                    gender: 'Женский',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Стричишин Кирилл Николаевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Довбня Юрий Валерьевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Буланов Олег Александрович',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Стричишин Кирилл Николаевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Стричишин Кирилл Николаевич',
                                                    gender: 'Женский',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Довбня Юрий Валерьевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Неценко Дмитрий Сергеевич',
                                                    gender: 'Женский',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Стричишин Кирилл Николаевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Довбня Юрий Валерьевич',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                },
                                                {
                                                    name: 'Буланов Олег Александрович',
                                                    gender: 'Мужской',
                                                    edit: this.state.data.edit
                                                }
                                            ]} />
                                            

                                            <div>
                                                <ItemsList items={this.state.items}/>
                                            </div>

                                            
                                        </div>
                                        <div className="file-wrapper file-wrapper_nomination" onClick={ this.addItem.bind(this) }>
                                            <span className="student-add">Добавить</span>
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

export default ClassDetail