import React from 'react'
import classnames from 'classnames'


import './AnotherNews.css'

class AnotherNews extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false
        }

        this.toggleItem1 = this.toggleItem1.bind(this)
        this.toggleItem2 = this.toggleItem2.bind(this)
        this.toggleItem3 = this.toggleItem3.bind(this)
        this.toggleItem4 = this.toggleItem4.bind(this)
        this.toggleItem5 = this.toggleItem5.bind(this)
        this.toggleItem6 = this.toggleItem6.bind(this)
        this.toggleItem7 = this.toggleItem7.bind(this)

    }

    toggleItem1(){
        this.setState({
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false,

        })
    }
    toggleItem2(){
        this.setState({
            isActive1: false,
            isActive2: true,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false,

        })
    }
    toggleItem3(){
        this.setState({
            isActive1: false,
            isActive2: false,
            isActive3: true,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false,

        })
    }
    toggleItem4(){
        this.setState({
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: true,
            isActive5: false,
            isActive6: false,
            isActive7: false,

        })
    }
    toggleItem5(){
        this.setState({
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: true,
            isActive6: false,
            isActive7: false,

        })
    }
    toggleItem6(){
        this.setState({
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: true,
            isActive7: false,

        })
    }
    toggleItem7(){
        this.setState({
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: true,

        })
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
                        <a href="" className="nav__prev">Каталог рабочих программ</a>
                        <svg width="15" height="1" viewBox="0 0 15 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.75" x2="15" y2="0.75" stroke="#C2C6FF" strokeWidth="0.5"/>
                        </svg>
                        <span className="nav__current">Очередная новость</span>
                </div>
            </nav>

            <main>
                <section className="another-news-wrapper">
                        <div className="container">

                            <h1>Очередная новость</h1>

                            <div className="another-news">
                                <div className={classnames("another-news_item", "another-news__first")}>
                                    <div className="another-news-img"><img src="https://images.hdqwalls.com/wallpapers/student-study-stress-img.jpg" alt="alt"/></div>
                                    <div className="another-news-disc">
                                        <p>По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. </p>
                                        <p>В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                        <p>Как правило их содержание бессмысленно. По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                    </div>
                                </div>
                                <div className="another-news_item">
                                    <div className="another-news-disc">
                                        <p>По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. </p>
                                        <p>В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                        <p>Как правило их содержание бессмысленно. По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                    </div>

                                    <nav className="nav-people">
                                        <ul>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive1})} onClick={ this.toggleItem1 }><a href="#">Учителям</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive2})} onClick={ this.toggleItem2 }><a href="#">Ученикам</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive3})} onClick={ this.toggleItem3 }><a href="#">Родителям</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive4})} onClick={ this.toggleItem4 }><a href="#">Поддержка</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive5})} onClick={ this.toggleItem5 }><a href="#">О проекте</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive6})} onClick={ this.toggleItem6 }><a href="#">Учителям</a></li>
                                            <li className={classnames("nav-people__item", {"active": this.state.isActive7})} onClick={ this.toggleItem7 }><a href="#">Ученикам</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <button className="btn btn-green svg-position-btn">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5286 3.33328C18.5286 4.8291 17.3162 6.04172 15.8203 6.04172C14.3245 6.04172 13.1121 4.8291 13.1121 3.33328C13.1121 1.83762 14.3245 0.625 15.8203 0.625C17.3162 0.625 18.5286 1.83762 18.5286 3.33328Z" fill="#3888FF"/>
                                        <path d="M15.8203 6.66672C13.982 6.66672 12.4871 5.17166 12.4871 3.33328C12.4871 1.49506 13.982 0 15.8203 0C17.6587 0 19.1536 1.49506 19.1536 3.33328C19.1536 5.17166 17.6587 6.66672 15.8203 6.66672ZM15.8203 1.25C14.6712 1.25 13.7371 2.18506 13.7371 3.33328C13.7371 4.48166 14.6712 5.41672 15.8203 5.41672C16.9695 5.41672 17.9036 4.48166 17.9036 3.33328C17.9036 2.18506 16.9695 1.25 15.8203 1.25Z" fill="#3888FF"/>
                                        <path d="M18.5286 16.6664C18.5286 18.1621 17.3162 19.3747 15.8203 19.3747C14.3245 19.3747 13.1121 18.1621 13.1121 16.6664C13.1121 15.1706 14.3245 13.958 15.8203 13.958C17.3162 13.958 18.5286 15.1706 18.5286 16.6664Z" fill="#3888FF"/>
                                        <path d="M15.8203 19.9997C13.982 19.9997 12.4871 18.5047 12.4871 16.6664C12.4871 14.8281 13.982 13.333 15.8203 13.333C17.6587 13.333 19.1536 14.8281 19.1536 16.6664C19.1536 18.5047 17.6587 19.9997 15.8203 19.9997ZM15.8203 14.583C14.6712 14.583 13.7371 15.5181 13.7371 16.6664C13.7371 17.8147 14.6712 18.7497 15.8203 18.7497C16.9695 18.7497 17.9036 17.8147 17.9036 16.6664C17.9036 15.5181 16.9695 14.583 15.8203 14.583Z" fill="#3888FF"/>
                                        <path d="M6.86203 10.0003C6.86203 11.4961 5.64941 12.7086 4.15359 12.7086C2.65793 12.7086 1.44531 11.4961 1.44531 10.0003C1.44531 8.50446 2.65793 7.29199 4.15359 7.29199C5.64941 7.29199 6.86203 8.50446 6.86203 10.0003Z" fill="#3888FF"/>
                                        <path d="M4.15359 13.3336C2.31537 13.3336 0.820312 11.8387 0.820312 10.0003C0.820312 8.1619 2.31537 6.66699 4.15359 6.66699C5.99197 6.66699 7.48703 8.1619 7.48703 10.0003C7.48703 11.8387 5.99197 13.3336 4.15359 13.3336ZM4.15359 7.91699C3.00446 7.91699 2.07031 8.8519 2.07031 10.0003C2.07031 11.1487 3.00446 12.0836 4.15359 12.0836C5.30289 12.0836 6.23703 11.1487 6.23703 10.0003C6.23703 8.8519 5.30289 7.91699 4.15359 7.91699Z" fill="#3888FF"/>
                                        <path d="M6.12201 9.60047C5.83194 9.60047 5.55026 9.44956 5.39691 9.17963C5.1694 8.78046 5.30948 8.27127 5.70865 8.04285L13.441 3.63459C13.8402 3.4054 14.3494 3.54548 14.5778 3.94618C14.8053 4.34535 14.6652 4.85453 14.2661 5.08295L6.53354 9.49121C6.40353 9.56537 6.26193 9.60047 6.12201 9.60047Z" fill="#3888FF"/>
                                        <path d="M13.8527 16.4753C13.7127 16.4753 13.5711 16.4402 13.4411 16.3661L5.70853 11.9578C5.30936 11.7303 5.16944 11.2211 5.39695 10.821C5.62354 10.4211 6.13349 10.2802 6.53357 10.5094L14.2661 14.9177C14.6653 15.1452 14.8052 15.6544 14.5777 16.0545C14.4236 16.3244 14.1419 16.4753 13.8527 16.4753Z" fill="#3888FF"/>
                                    </svg>
                                    <span>Поделиться в соц.сетях</span>
                                </button>
                            </div>
                        </div>
                </section>
            </main>
            </>
        )
    }
    
}

export default AnotherNews