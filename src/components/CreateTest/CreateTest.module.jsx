import React from 'react'

import './CreateTest.css'
import SelectItem from './SelectItem.module'
class CreateTest extends React.Component{

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
                            <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5" />
                        </svg>
                        <span className="nav__current">Создать тест</span>
                    </div>
                </nav>

                <main>
                    <section>
                        <div className="container">
                            <h1>Создать тест</h1>

                            <div className="table-wrapper">
                                <div className="table-container form-create-test">
                                    <form action="#">
                                        <div className="form-container">
                                            <div className="form-flex">
                                                <p className="form-label">Введите название теста</p>
                                                <input type="text" />
                                            </div>
                                            <div className="selects-wrapper">

                                                <SelectItem items={[
                                                    {
                                                        option1: '9 класс',
                                                        option2: '5 класс',
                                                        option3: '3 класс'
                                                    },
                                                    {
                                                        option1: '9 класс',
                                                        option2: '5 класс',
                                                        option3: '3 класс'
                                                    },{
                                                        option1: '9 класс',
                                                        option2: '5 класс',
                                                        option3: '3 класс'
                                                    },{
                                                        option1: '9 класс',
                                                        option2: '5 класс',
                                                        option3: '3 класс'
                                                    },
                                                ]}/>

                                            </div>
                                            <div className="create-test-wrapper">
                                                <div className="tests__test">
                                                    <h2>Тип ответов</h2>
                                                    <div className="test__answers">
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-1"/>
                                                            <span className="radio__label">Один правильный</span>
                                                        </label>
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-1"/>
                                                            <span className="radio__label">Несколько правильных</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tests__test">
                                                    <h2>Тип временного ограничения</h2>
                                                    <div className="test__answers">
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-2"/>
                                                            <span className="radio__label">Без ограничения</span>
                                                        </label>
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-2"/>
                                                            <span className="radio__label">Укажите длительность в мин.</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tests__test">
                                                    <h2>Ввести учет баллов</h2>
                                                    <div className="test__answers">
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-3"/>
                                                            <span className="radio__label">У каждого вопроса свои баллы</span>
                                                        </label>
                                                        <label className="radiobox green">
                                                            <input type="radio" name="answer-3"/>
                                                            <span className="radio__label"> Одинаковое число баллов за каждый
                                                                вопрос</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-test-wrapper">
                                                <div className="form-flex input-question">
                                                    <p className="form-label">Введите текст вопроса</p>
                                                    <input type="text"/>
                                                </div>
                                                <div className="form-flex input-answer">
                                                    <p className="form-label">Введите ответ</p>
                                                    <input type="text"/>
                                                </div>
                                                <button className="btn btn-blue">Добавить ответ</button>
                                            </div>

                                        </div>

                                        <button className="btn button-green" type="submit">Сохранить тест</button>
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

export default CreateTest