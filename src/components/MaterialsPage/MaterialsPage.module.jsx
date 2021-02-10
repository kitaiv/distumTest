import React from 'react'

import './MaterialsPage.css'

class MaterialsPage extends React.Component{
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
                            <span className="nav__current">Развивающий материал</span>
                    </div>
                </nav>

                <main>
                    <section className="material-wrapper">
                            <div className="container">

                                <h1>Развивающий материал</h1>

                                <div className="material-disc">
                                    <div className="material-disc__item">
                                        <div className="circle"></div>
                                        <h4>Категория материала</h4>
                                    </div>
                                    <div className="material-disc__item">
                                        <div className="circle"></div>
                                        <h4>Класс материала</h4>
                                    </div>
                                    <div className="material-disc__item">
                                        <div className="circle"></div>
                                        <h4>Сложность материала</h4>
                                    </div>
                                    <div className="material-disc__item">
                                        <div className="circle"></div>
                                        <h4>Улучшение навыков</h4>
                                    </div>
                                </div>

                                <div className="material-article">
                                    <div className="material-article-dics">
                                        <p>По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                        <p>Как правило их содержание бессмысленно. По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. В случае произвольного набора букв и длины слов ничто не отвлекает от оценки воздействия и читаемости различных шрифтов, а также от распределения текста на странице (макет или площадь набора). </p>
                                        <p>По причине своей функции текста-заполнителя для макетов нечитабельность рыбных текстов имеет особое значение, так как человеческое восприятие имеет особенность, распознавать определенные образцы и повторения. </p>
                                    </div>
                                    <div className="material-article-btn">
                                        <button className="btn btn-green svg-position-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.89119 12.8671C5.89119 12.535 5.66072 12.3369 5.25408 12.3369C5.08803 12.3369 4.97557 12.3533 4.91675 12.369V13.4346C4.9864 13.4503 5.07201 13.4556 5.19003 13.4556C5.62347 13.4556 5.89119 13.2366 5.89119 12.8671Z" fill="#3888FF"/>
                                                <path d="M8.40834 12.3486C8.22623 12.3486 8.10855 12.3644 8.03894 12.3807V14.7408C8.10859 14.7571 8.22105 14.7571 8.32272 14.7571C9.06147 14.7624 9.54328 14.3557 9.54328 13.4941C9.5485 12.7448 9.10946 12.3486 8.40834 12.3486Z" fill="#3888FF"/>
                                                <path d="M13.0859 0H5.05306C3.87955 0 2.92443 0.95578 2.92443 2.12863V9.99996H2.71652C2.24289 9.99996 1.85876 10.3837 1.85876 10.8578V16.0597C1.85876 16.5337 2.24284 16.9175 2.71652 16.9175H2.92443V17.8713C2.92443 19.0455 3.87955 20 5.05306 20H16.0135C17.1863 20 18.1415 19.0454 18.1415 17.8713V5.03791L13.0859 0ZM4.10902 11.7965C4.3604 11.7541 4.71374 11.722 5.21157 11.722C5.71466 11.722 6.07323 11.8181 6.31415 12.011C6.54429 12.1927 6.6996 12.4928 6.6996 12.8459C6.6996 13.1989 6.58192 13.499 6.36779 13.7023C6.08928 13.9644 5.67741 14.0821 5.1956 14.0821C5.08837 14.0821 4.99225 14.0768 4.91709 14.0664V15.3563H4.10902V11.7965ZM16.0135 18.6964H5.05306C4.59867 18.6964 4.22866 18.3263 4.22866 17.8713V16.9175H14.446C14.9197 16.9175 15.3038 16.5337 15.3038 16.0597V10.8578C15.3038 10.3837 14.9197 9.99996 14.446 9.99996H4.22866V2.12863C4.22866 1.67491 4.59872 1.30489 5.05306 1.30489L12.5982 1.29701V4.08595C12.5982 4.90057 13.2591 5.56216 14.0744 5.56216L16.8065 5.55432L16.8372 17.8713C16.8372 18.3263 16.4678 18.6964 16.0135 18.6964ZM7.22065 15.34V11.7965C7.52036 11.7488 7.91099 11.722 8.32324 11.722C9.00835 11.722 9.45262 11.8449 9.80073 12.1071C10.1754 12.3856 10.4107 12.8295 10.4107 13.4669C10.4107 14.1573 10.1593 14.6339 9.81114 14.928C9.4313 15.2438 8.85308 15.3935 8.14669 15.3935C7.72366 15.3935 7.42395 15.3667 7.22065 15.34ZM13.0624 13.242V13.9056H11.7669V15.3563H10.9481V11.7488H13.1532V12.4176H11.7669V13.242H13.0624Z" fill="#3888FF"/>
                                            </svg>
                                            <span>Сохранить в PDF</span>
                                        </button>
                                        <button className="btn btn-green svg-position-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.44851 0.802551C9.55206 0.592769 9.7657 0.459961 9.99967 0.459961C10.2336 0.45992 10.4473 0.592728 10.5509 0.802511L12.9483 5.65944C13.1737 6.11613 13.6094 6.43275 14.1135 6.50595L19.4737 7.28515C19.7052 7.31883 19.8975 7.48097 19.9699 7.70349C20.0421 7.92598 19.9819 8.17025 19.8144 8.33357L15.936 12.1146C15.5713 12.4701 15.4049 12.9823 15.4909 13.4843L16.406 18.822C16.4455 19.0526 16.3508 19.2857 16.1615 19.4231C15.9722 19.5607 15.7213 19.5787 15.5142 19.4698L10.7198 16.9498C10.269 16.7128 9.73044 16.7128 9.27955 16.9499L4.4856 19.4698C4.27849 19.5787 4.02757 19.5605 3.83832 19.423C3.64903 19.2855 3.55428 19.0524 3.5938 18.8219L4.50934 13.4845C4.59548 12.9824 4.42904 12.4701 4.06425 12.1145L0.185631 8.33361C0.0181296 8.17029 -0.0422081 7.92602 0.0300998 7.70354C0.102408 7.48105 0.294742 7.31891 0.526273 7.28519L5.88631 6.50603C6.39036 6.43275 6.82611 6.11617 7.05156 5.6594L9.44851 0.802551Z" fill="#3888FF"/>
                                            </svg>
                                            <span>Добавить в избранное</span>
                                        </button>
                                        <button className="btn btn-green svg-position-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5721 5.71387H1.42862C0.640023 5.71387 0 6.34746 0 7.13678V14.2799H2.85724V17.14C2.85724 17.9279 3.49584 18.5658 4.28301 18.5658H15.7127C16.5027 18.5658 17.1428 17.9257 17.1428 17.1357V14.2799H20V7.14249C20.0007 6.35389 19.3607 5.71387 18.5721 5.71387ZM2.85724 8.57111H1.42862V7.14249H2.85724V8.57111ZM15.7148 17.1428H4.28587V9.99402H15.7148V17.1428Z" fill="#3888FF"/>
                                                <path d="M17.1436 1.43359H2.85742V4.27941H17.1436V1.43359Z" fill="#3888FF"/>
                                                <path d="M14.2866 11.4287H5.71484V12.8573H14.2866V11.4287Z" fill="#3888FF"/>
                                                <path d="M14.2866 14.2861H5.71484V15.7148H14.2866V14.2861Z" fill="#3888FF"/>
                                            </svg>
                                            <span>Распечатать</span>
                                        </button>
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
                                    
                            </div>
                    </section>
                </main>
            </>
        )
    }
}

export default MaterialsPage