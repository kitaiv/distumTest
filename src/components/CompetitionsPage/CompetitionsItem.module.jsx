import React from 'react'


const CompetitionsItem = ({items}) => {

        return(
            <>
                {items.map( (item, i) => (
                    <div className="competition__item" key={i}>
                        <div className="competitions__img"><img src={item.img} alt="alt"/></div>
                        <div className="competitions__contant">

                            <h2>Всероссийский конкурс</h2>

                            <div className="competitions-dics">
                                <div className="competitions-dics__item">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.1796 7.48166V6.18065C13.1796 5.95414 12.996 5.7705 12.7695 5.7705C11.9222 5.7705 11.1322 5.842 10.3858 5.98802C9.95078 5.56788 9.4204 5.26305 8.84604 5.09645C9.47232 4.56934 9.87105 3.78012 9.87105 2.89941C9.87105 1.3012 8.58308 0.000976562 6.99996 0.000976562C5.41684 0.000976562 4.12887 1.3012 4.12887 2.89941C4.12887 3.78012 4.5276 4.56934 5.1539 5.09642C4.57955 5.26305 4.04916 5.56788 3.6141 5.98799C2.86775 5.842 2.07779 5.77047 1.23047 5.77047C1.00395 5.77047 0.820311 5.95411 0.820311 6.18062V7.48164C0.342917 7.65095 0 8.10685 0 8.64156V9.46187C0 9.99657 0.342917 10.4525 0.820311 10.6218V11.9228C0.820311 12.1493 1.00395 12.333 1.23047 12.333C3.37501 12.333 5.13602 12.8411 6.77249 13.932C6.90962 14.0234 7.09025 14.0236 7.22751 13.932C8.86398 12.8411 10.625 12.333 12.7695 12.333C12.996 12.333 13.1797 12.1493 13.1797 11.9228V10.6218C13.6571 10.4525 14 9.99657 14 9.46187V8.64156C13.9999 8.10688 13.657 7.65098 13.1796 7.48166ZM4.94918 2.89941C4.94918 1.75352 5.86916 0.821287 6.99996 0.821287C8.13076 0.821287 9.05074 1.75352 9.05074 2.89941C9.05074 4.03021 8.13076 4.95019 6.99996 4.95019C5.86916 4.95019 4.94918 4.03021 4.94918 2.89941ZM1.23044 9.87205C1.00428 9.87205 0.820284 9.68806 0.820284 9.46189V8.64158C0.820284 8.41542 1.00428 8.23143 1.23044 8.23143C1.4566 8.23143 1.64059 8.41542 1.64059 8.64158V9.46189C1.64059 9.68806 1.4566 9.87205 1.23044 9.87205ZM6.5898 12.8548C5.10086 12.0033 3.50308 11.573 1.64059 11.5186V10.6218C2.11799 10.4525 2.46091 9.9966 2.46091 9.46189V8.64158C2.46091 8.10688 2.11799 7.65098 1.64059 7.48166V6.5966C3.56781 6.65192 5.11691 7.10574 6.5898 8.04352V12.8548ZM6.99996 7.33289C6.24292 6.85522 5.45493 6.49152 4.61373 6.23594C5.07595 5.93554 5.62006 5.7705 6.17965 5.7705H7.82027C8.37986 5.7705 8.92397 5.93554 9.38619 6.23594C8.54499 6.49152 7.75697 6.85522 6.99996 7.33289ZM12.3593 11.5186C10.4969 11.573 8.89903 12.0034 7.41011 12.8549V8.04385C8.88304 7.10599 10.432 6.65189 12.3593 6.5966V7.48166C11.8819 7.65098 11.539 8.10688 11.539 8.64158V9.46189C11.539 9.9966 11.8819 10.4525 12.3593 10.6218V11.5186ZM13.1796 9.46189C13.1796 9.68806 12.9956 9.87205 12.7695 9.87205C12.5433 9.87205 12.3593 9.68806 12.3593 9.46189V8.64158C12.3593 8.41542 12.5433 8.23143 12.7695 8.23143C12.9956 8.23143 13.1796 8.41542 13.1796 8.64158V9.46189Z" fill="#C2C6FF"/>
                                    </svg>
                                    <p>{item.subtitles.firstTitle} <span>{item.subtitlesValue.firstTitleValue}</span></p>
                                </div>
                                <div className="competitions-dics__item">
                                    <svg width="14" height="14" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6191 2.3674H12.0674L11.4226 1.07773C11.3548 0.942148 11.213 0.859679 11.0617 0.867728C8.56758 1.0006 6.57574 1.73657 6.5 1.75658C6.35558 1.71847 4.50907 1.00468 1.93832 0.867753C1.78722 0.859704 1.64521 0.942173 1.57742 1.07776L0.932572 2.3674H0.380859C0.170523 2.3674 0 2.53792 0 2.74826V10.3654C0 10.5758 0.170523 10.7463 0.380859 10.7463H1.04437C2.53693 10.7463 4.0124 10.9758 5.43316 11.4284C5.60894 11.8575 6.01341 12.1325 6.5 12.1325C6.98659 12.1325 7.39106 11.8575 7.56684 11.4284C8.98762 10.9758 10.4631 10.7463 11.9556 10.7463H12.6191C12.8295 10.7463 13 10.5758 13 10.3654V2.74826C13 2.53792 12.8295 2.3674 12.6191 2.3674ZM2.14614 1.64356C4.52623 1.80769 6.18584 2.46688 6.37952 2.51936C6.45772 2.54544 6.54228 2.54544 6.62048 2.51936C6.809 2.46828 8.48093 1.80718 10.8539 1.64356L11.2246 2.38502C9.83816 2.45139 8.47069 2.70644 7.1497 3.14593C7.14939 3.14603 7.14909 3.14613 7.14878 3.14623C7.00601 3.19379 6.91481 3.30236 6.88825 3.4353C6.8413 3.66999 6.65691 3.7536 6.49997 3.7536C6.34303 3.7536 6.15865 3.66999 6.1117 3.4353C6.08524 3.30271 5.99376 3.19366 5.85099 3.14615C5.85076 3.14608 5.85056 3.146 5.85033 3.14593C4.52933 2.70644 3.16182 2.45137 1.77536 2.38499L2.14614 1.64356ZM0.761719 9.98459V3.12912H1.04437C2.51045 3.12912 3.95995 3.3504 5.35742 3.78719V10.6083C3.95672 10.1942 2.50831 9.98459 1.04437 9.98459H0.761719ZM6.5 11.3708C6.35007 11.3708 6.17538 11.2941 6.11914 11.0826V4.45484C6.35786 4.5339 6.63244 4.5371 6.88086 4.45484V11.0826C6.82462 11.2941 6.64993 11.3708 6.5 11.3708ZM12.2383 9.98459H11.9556C10.4917 9.98459 9.04325 10.1942 7.64258 10.6083V3.78722C9.04005 3.3504 10.4896 3.12914 11.9556 3.12914H12.2383V9.98459Z" fill="#C2C6FF"/>
                                    </svg>
                                    <p>{item.subtitles.secondTitle} <span>{item.subtitlesValue.secondTitleValue}</span></p>
                                </div>
                                <div className="competitions-dics__item">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1953 1.09375H10.9375V0.4375C10.9375 0.195891 10.7416 0 10.5 0C10.2584 0 10.0625 0.195891 10.0625 0.4375V1.09375H3.9375V0.4375C3.9375 0.195891 3.74164 0 3.5 0C3.25836 0 3.0625 0.195891 3.0625 0.4375V1.09375H1.80469C0.809566 1.09375 0 1.90332 0 2.89844V12.1953C0 13.1904 0.809566 14 1.80469 14H12.1953C13.1904 14 14 13.1904 14 12.1953V2.89844C14 1.90332 13.1904 1.09375 12.1953 1.09375ZM1.80469 1.96875H3.0625V2.40625C3.0625 2.64786 3.25836 2.84375 3.5 2.84375C3.74164 2.84375 3.9375 2.64786 3.9375 2.40625V1.96875H10.0625V2.40625C10.0625 2.64786 10.2584 2.84375 10.5 2.84375C10.7416 2.84375 10.9375 2.64786 10.9375 2.40625V1.96875H12.1953C12.708 1.96875 13.125 2.3858 13.125 2.89844V3.9375H0.875V2.89844C0.875 2.3858 1.29205 1.96875 1.80469 1.96875ZM12.1953 13.125H1.80469C1.29205 13.125 0.875 12.708 0.875 12.1953V4.8125H13.125V12.1953C13.125 12.708 12.708 13.125 12.1953 13.125Z" fill="#C2C6FF"/>
                                    </svg>												
                                    <p>{item.subtitles.thirdTitle} <span>{item.subtitlesValue.thirdTitleValue}</span></p>
                                </div>
                            </div>

                            <a href="#" className="btn">Посмотреть олимпиаду</a>

                        </div>
                    </div>
                ))}
            </>
        )
}

export default CompetitionsItem