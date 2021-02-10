import React from 'react'

import confirmation from '../../assets/images/png/confirmation.png'
import capabilities1 from '../../assets/images/png/capabilities1.png'
import capabilities2 from '../../assets/images/png/capabilities2.png'
import capabilities3 from '../../assets/images/png/capabilities3.png'
import proffesor from '../../assets/images/png/proffesor.png'

import '../Header/Header.css'

import videojs from 'video.js'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './SwiperJs.css'

import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/video-js.css'

// import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
/////
import './Video.css'

import s from './Main.module.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class Main extends React.Component{

	componentDidMount() {
		document.querySelector('.header-blue').classList.remove('header-blue');
		document.querySelector('.addVectorHEAD').classList.add('vector-head');

		this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
			console.log('onPlayerReady', this)
		  });
    }

    componentDidUpdate() {
		document.querySelector('.header-blue').classList.remove('header-blue');
		document.querySelector('.addVectorHEAD').classList.add('vector-head');

		if (this.player) {
			this.player.dispose()
		}
    }


	
	render(){

		return (
			<>
		
				<article className="top-content">
					<div className={s.backProffesor}>
						<div className="refresher-qual">
							<h1 className="refresher-qual__title">Курсы повышения квалификации</h1>
							<p className="refresher-qual__disc">По своей сути рыбатекст является альтернативой традиционному lorem
								ipsum, который вызывает у некторых людей недоумение</p>
							<div className="refresher-qual__benefit">
								<span><img src={confirmation} alt="benefit" /> Дистанционное обучение</span>
								<span><img src={confirmation} alt="benefit" /> Практические занятия</span>
								<span><img src={confirmation} alt="benefit" /> Более 30 преподавателей</span>
							</div>
							<a href="#" className="btn btn-details">Подробнее</a>
						</div>
					</div>
				</article>
		
				<main>
					<section>
						<div className="container">
		
							<h2 className="disc-section">Возможности</h2>
		
							<div className="capabilities">
								<div className="capabilities__item">
									<h3>Для учеников</h3>
									<div className="capabilities-list">
										<p>По своей сути рыбатекст является</p>
										<p>альтернативой традиционному</p>
										<p>lorem ipsum</p>
									</div>
		
									<a href="#" className="btn btn-capabilities">Узнать больше</a>
									<img src={capabilities1} alt="book" />
								</div>
								<div className="capabilities__item">
									<h3>Для учеников</h3>
									<div className="capabilities-list">
										<p>По своей сути рыбатекст является</p>
										<p>альтернативой традиционному</p>
										<p>lorem ipsum</p>
									</div>
									<a href="#" className="btn btn-capabilities">Узнать больше</a>
									<img src={capabilities2} alt="teacher" />
								</div>
								<div className="capabilities__item">
									<h3>Для учеников</h3>
									<div className="capabilities-list">
										<p>По своей сути рыбатекст является</p>
										<p>альтернативой традиционному</p>
										<p>lorem ipsum</p>
									</div>
									<a href="#" className="btn btn-capabilities">Узнать больше</a>
									<img src={capabilities3} alt="proffesor" />
								</div>
							</div>
		
						</div>
		
					</section>
					<section>
						<div className="container">
		
							<h2 className="disc-section">Курсы</h2>
		
							<div className="swiper-container swiper-courses">
								<div className="swiper-wrapper">
								<Swiper
											navigation={{
												nextEl : '#nex',
												prevEl : '#prev'
											}
											}
											slidesPerView={ window.innerWidth < 439 ? 1 : 2}
											spaceBetween={30}
											onReachEnd={() => {}}
											loop={true}
											
										>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
									<div className="btn-swiper btn-courses">
										<div className="swiper-button-prev" id="prev"></div>
										<div className="swiper-button-next" id="nex"></div>
									</div>
							</div>
		
						</div>
					</section>
					<section>
							<div className="container">
		
								<h2 className="disc-section">Публикации</h2>
		
								<div className="swiper-container swiper-courses">
									<div className="swiper-wrapper">
		
										<Swiper
											navigation={{
												nextEl : '#nex1',
												prevEl : '#prev1'
											}
											}
											slidesPerView={window.innerWidth < 439 ? 1 : 2}
											spaceBetween={30}
											loop={true}
											
										>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="swiper-slide">
													<div className="courses">
														<div className="courses__disc">
															<span className="subject-area">Биология</span>
															<h3>Курс разработка методических программ для 8 классов</h3>
															<p>Курс разработка методических программ для 8 классов</p>
															<a href="#" className="btn">Подробнее</a>
														</div>
														<div className="courses__picture">
															<img src={proffesor} alt="proff"/>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
									<div className="btn-swiper btn-courses">
											<div className="swiper-button-prev" id="prev1"></div>
											<div className="swiper-button-next" id="nex1"></div>
									</div>
								</div>
		
							</div>
						</section>
					<section className="section-white">
							<div className="container">
								<div className="wrapper-slider btn-swiper-events swiper-btn-style swiper-pagin-style">
									<div className="swiper-container swiper-events">
										<div className="swiper-wrapper">
												<Swiper
													navigation={{
														nextEl : '#nex2',
														prevEl : '#prev2'
													}}
													pagination={{clickable: true}}
													loop={true}
													spaceBetween={30}

													
												>
													<SwiperSlide>
														<div className="swiper-slide">
															<div className="upcoming-events-wrapper">
																<div className="upcoming-events">
																	<h2 className="disc-section">Ближайшие события</h2>
																	<div className="video">
																		<video id="my-video" className="video-js video-distum" controls preload="auto" data-setup="{}">
																			<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
																		</video>
																	</div>
																	<div className="events-arrow">
																		<svg width="42" height="63" viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<g clipPath="url(#clip0)">
																			<path d="M20.9986 24.6201C18.2035 24.6201 15.9297 26.8939 15.9297 29.6891C15.9297 32.4842 18.2035 34.758 20.9986 34.758C23.7938 34.758 26.0676 32.4842 26.0676 29.6891C26.0676 26.8939 23.7938 24.6201 20.9986 24.6201Z" fill="#FF496F"/>
																			<path d="M28.9674 15.9307C26.1723 15.9307 23.8984 18.2045 23.8984 20.9996C23.8984 23.7948 26.1723 26.0686 28.9674 26.0686C31.7625 26.0686 34.0364 23.7948 34.0364 20.9996C34.0364 18.2045 31.7626 15.9307 28.9674 15.9307Z" fill="#FF496F"/>
																			<path d="M36.9322 7.24121C34.1371 7.24121 31.8633 9.51504 31.8633 12.3102C31.8633 15.1053 34.1371 17.3791 36.9322 17.3791C39.7275 17.3791 42.0012 15.1053 42.0012 12.3102C42.0012 9.51504 39.7274 7.24121 36.9322 7.24121Z" fill="#FF496F"/>
																			<path d="M18.1028 20.9996C18.1028 18.2045 15.829 15.9307 13.0339 15.9307C10.2388 15.9307 7.96484 18.2045 7.96484 20.9996C7.96484 23.7948 10.2387 26.0686 13.0338 26.0686C15.8289 26.0686 18.1028 23.7948 18.1028 20.9996Z" fill="#FF496F"/>
																			<path d="M10.1379 12.3102C10.1379 9.51504 7.86409 7.24121 5.06896 7.24121C2.27382 7.24121 0 9.51495 0 12.3102C0 15.1054 2.27382 17.3791 5.06896 17.3791C7.86409 17.3791 10.1379 15.1053 10.1379 12.3102Z" fill="#FF496F"/>
																			<path d="M20.9986 45.6201C18.2035 45.6201 15.9297 47.8939 15.9297 50.6891C15.9297 53.4842 18.2035 55.758 20.9986 55.758C23.7938 55.758 26.0676 53.4842 26.0676 50.6891C26.0676 47.8939 23.7938 45.6201 20.9986 45.6201Z" fill="#8BD231"/>
																			<path d="M28.9674 36.9307C26.1723 36.9307 23.8984 39.2045 23.8984 41.9996C23.8984 44.7948 26.1723 47.0686 28.9674 47.0686C31.7625 47.0686 34.0364 44.7948 34.0364 41.9996C34.0364 39.2045 31.7626 36.9307 28.9674 36.9307Z" fill="#8BD231"/>
																			<path d="M36.9322 28.2412C34.1371 28.2412 31.8633 30.515 31.8633 33.3102C31.8633 36.1053 34.1371 38.3791 36.9322 38.3791C39.7275 38.3791 42.0012 36.1053 42.0012 33.3102C42.0012 30.515 39.7274 28.2412 36.9322 28.2412Z" fill="#8BD231"/>
																			<path d="M18.1028 41.9996C18.1028 39.2045 15.829 36.9307 13.0339 36.9307C10.2388 36.9307 7.96484 39.2045 7.96484 41.9996C7.96484 44.7948 10.2387 47.0686 13.0338 47.0686C15.8289 47.0686 18.1028 44.7948 18.1028 41.9996Z" fill="#8BD231"/>
																			<path d="M10.1379 33.3102C10.1379 30.515 7.86409 28.2412 5.06896 28.2412C2.27382 28.2412 0 30.515 0 33.3102C0 36.1054 2.27382 38.3791 5.06896 38.3791C7.86409 38.3791 10.1379 36.1053 10.1379 33.3102Z" fill="#8BD231"/>
																			</g>
																			<defs>
																			<clipPath id="clip0">
																			<rect width="42" height="63" fill="white"/>
																			</clipPath>
																			</defs>
																		</svg>
																	</div>
																	
																	<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
																	<p>ри создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
																	<a href="#" className="btn">Подробнее</a>
																</div>
																
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
													<div className="swiper-slide">
															<div className="upcoming-events-wrapper">
																<div className="upcoming-events">
																	<h2 className="disc-section">Ближайшие события</h2>
																	<div className="video">
																		<video id="my-video" className="video-js video-distum" controls preload="auto" data-setup="{}">
																			<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
																		</video>
																	</div>
																	<div className="events-arrow">
																		<svg width="42" height="63" viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<g clipPath="url(#clip0)">
																			<path d="M20.9986 24.6201C18.2035 24.6201 15.9297 26.8939 15.9297 29.6891C15.9297 32.4842 18.2035 34.758 20.9986 34.758C23.7938 34.758 26.0676 32.4842 26.0676 29.6891C26.0676 26.8939 23.7938 24.6201 20.9986 24.6201Z" fill="#FF496F"/>
																			<path d="M28.9674 15.9307C26.1723 15.9307 23.8984 18.2045 23.8984 20.9996C23.8984 23.7948 26.1723 26.0686 28.9674 26.0686C31.7625 26.0686 34.0364 23.7948 34.0364 20.9996C34.0364 18.2045 31.7626 15.9307 28.9674 15.9307Z" fill="#FF496F"/>
																			<path d="M36.9322 7.24121C34.1371 7.24121 31.8633 9.51504 31.8633 12.3102C31.8633 15.1053 34.1371 17.3791 36.9322 17.3791C39.7275 17.3791 42.0012 15.1053 42.0012 12.3102C42.0012 9.51504 39.7274 7.24121 36.9322 7.24121Z" fill="#FF496F"/>
																			<path d="M18.1028 20.9996C18.1028 18.2045 15.829 15.9307 13.0339 15.9307C10.2388 15.9307 7.96484 18.2045 7.96484 20.9996C7.96484 23.7948 10.2387 26.0686 13.0338 26.0686C15.8289 26.0686 18.1028 23.7948 18.1028 20.9996Z" fill="#FF496F"/>
																			<path d="M10.1379 12.3102C10.1379 9.51504 7.86409 7.24121 5.06896 7.24121C2.27382 7.24121 0 9.51495 0 12.3102C0 15.1054 2.27382 17.3791 5.06896 17.3791C7.86409 17.3791 10.1379 15.1053 10.1379 12.3102Z" fill="#FF496F"/>
																			<path d="M20.9986 45.6201C18.2035 45.6201 15.9297 47.8939 15.9297 50.6891C15.9297 53.4842 18.2035 55.758 20.9986 55.758C23.7938 55.758 26.0676 53.4842 26.0676 50.6891C26.0676 47.8939 23.7938 45.6201 20.9986 45.6201Z" fill="#8BD231"/>
																			<path d="M28.9674 36.9307C26.1723 36.9307 23.8984 39.2045 23.8984 41.9996C23.8984 44.7948 26.1723 47.0686 28.9674 47.0686C31.7625 47.0686 34.0364 44.7948 34.0364 41.9996C34.0364 39.2045 31.7626 36.9307 28.9674 36.9307Z" fill="#8BD231"/>
																			<path d="M36.9322 28.2412C34.1371 28.2412 31.8633 30.515 31.8633 33.3102C31.8633 36.1053 34.1371 38.3791 36.9322 38.3791C39.7275 38.3791 42.0012 36.1053 42.0012 33.3102C42.0012 30.515 39.7274 28.2412 36.9322 28.2412Z" fill="#8BD231"/>
																			<path d="M18.1028 41.9996C18.1028 39.2045 15.829 36.9307 13.0339 36.9307C10.2388 36.9307 7.96484 39.2045 7.96484 41.9996C7.96484 44.7948 10.2387 47.0686 13.0338 47.0686C15.8289 47.0686 18.1028 44.7948 18.1028 41.9996Z" fill="#8BD231"/>
																			<path d="M10.1379 33.3102C10.1379 30.515 7.86409 28.2412 5.06896 28.2412C2.27382 28.2412 0 30.515 0 33.3102C0 36.1054 2.27382 38.3791 5.06896 38.3791C7.86409 38.3791 10.1379 36.1053 10.1379 33.3102Z" fill="#8BD231"/>
																			</g>
																			<defs>
																			<clipPath id="clip0">
																			<rect width="42" height="63" fill="white"/>
																			</clipPath>
																			</defs>
																		</svg>
																	</div>
																	
																	<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
																	<p>ри создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
																	<a href="#" className="btn">Подробнее</a>
																</div>
																
															</div>
														</div>
													</SwiperSlide>
												</Swiper>
										</div>
									</div>
		
									<div className="button-container">
										<div className="swiper-button-prev prev-events" id="prev2"></div>
										<div className="swiper-button-next next-events" id="nex2"></div>
									</div>
		
								</div>
							</div>
						</section>
					<section className="section-video">
							<div className="container">
		
								<h2 className="disc-section">Видеоуроки</h2>
		
								<div className="wrapper-slider btn-swiper-video swiper-btn-style">
									<div className="swiper-container swiper-video">
		
										<div className="swiper-wrapper">

											<Swiper
												navigation={{
													nextEl : '#nex3',
													prevEl : '#prev3'
												}}
												slidesPerView={1}
												spaceBetween={30}
												loop={true}

											>

												<SwiperSlide style={{width: "400px"}}>
													<div className="swiper-slide">
														<div className="video" data-vjs-player style={{width: "55%", margin: "0 auto"}}>
															<video id="my-video" className="video-js video-distum-green" controls preload="auto" data-setup="{}" ref={ node => this.videoNode = node }>
																<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
															</video>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide style={{width: "400px"}}>
													<div className="swiper-slide">
														<div className="video" style={{width: "55%", margin: "0 auto"}}></div>
													</div>
												</SwiperSlide>
												<SwiperSlide style={{width: "400px"}}>
													<div className="swiper-slide">
														<div className="video" style={{width: "55%", margin: "0 auto"}}></div>
													</div>
												</SwiperSlide>

											</Swiper>
			
				
										</div>
								
									</div>
										<div className="button-container">
											<div className="swiper-button-prev prev-video" id="prev3"></div>
											<div className="swiper-button-next next-video" id="nex3"></div>
										</div>
					
								</div>
		
								<h3 className="disc-video">Курс разработка методических программ</h3>
		
							</div>
						</section>
					<section className="section-video">
							<div className="container">
		
								<h2 className="disc-section">Вебинары</h2>
		
								<div className="wrapper-slider btn-swiper-video swiper-btn-style">
								<div className="swiper-container swiper-video-two">

									<div className="swiper-wrapper">
			
											<Swiper
												navigation={{
													nextEl : '#nex4',
													prevEl : '#prev4'
												}}
												slidesPerView={1}
												spaceBetween={30}
												loop={true}
											>
												<SwiperSlide style={{width: "400px"}}>
													<div className="swiper-slide">
														<div className="video" data-vjs-player style={{width: "55%", margin: "0 auto"}}>
															<video id="my-video" preload="auto" data-setup="{}" controls className="video-js distum-green-two" ref={ node => this.videoNode = node }>
																<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
															</video>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide style={{width: "400px"}} >
													<div className="swiper-slide">
														<div className="video" style={{width: "55%", margin: "0 auto"}}></div>
													</div>
												</SwiperSlide>
												<SwiperSlide style={{width: "400px"}}>
													<div className="swiper-slide">
														<div className="video" style={{width: "55%", margin: "0 auto"}}></div>
													</div>
												</SwiperSlide>
											</Swiper>
			
									</div>
							
								</div>
										<div className="button-container">
											<div className="swiper-button-prev prev-video" id="prev4"></div>
											<div className="swiper-button-next next-video" id="nex4"></div>
										</div>

					</div>					
		
								<h3 className="disc-video">Курс разработка методических программ</h3>
		
							</div>
						</section>
					<section>
							<div className="container">
		
								<h2 className="disc-section">Мы в цифрах</h2>
		
								<div className="achievements">
									<div className="achievements__item">
										<span>11</span>
										<h3>Специалистов</h3>
										<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру </p>
									</div>
									<div className="achievements__item">
										<span>350</span>
										<h3>Специалистов</h3>
										<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру </p>
									</div>
									<div className="achievements__item">
										<span>45</span>
										<h3>Специалистов</h3>
										<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру </p>
									</div>
								</div>
		
							</div>
						</section>
					<section>
							<div className="container">
		
								<h2 className="disc-section">Отзывы о платформе</h2>
		
								<div className="wrapper-slider btn-swiper-review swiper-btn-style swiper-pagin-style">
		
									<div className="swiper-container swiper-review">
		
										<div className="swiper-wrapper">

											<Swiper
												navigation
												pagination={{ clickable: true }}
												spaceBetween={30}
												slidesPerView={window.innerWidth <= 768 ? 1 : 2}
												loop={true}
											>
												<SwiperSlide style={{paddingLeft: "20px"}}>
													<div className="swiper-slide">
														<div className="review">
															<div className="review__data">
																<div className="review__img"></div>
																<h3 className="review__name">Андрей Знающий <span>Профессор академии наук</span></h3>
																
															</div>
															<p className="review__comment">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
															<div className="review__time">15 августа 2020</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="swiper-slide">
														<div className="review">
															<div className="review__data">
																<div className="review__img"></div>
																<h3 className="review__name">Андрей Знающий <span>Профессор академии наук</span></h3>
																
															</div>
															<div className="video">
																<video id="my-video" className="video-js video-distum" controls preload="auto" data-setup="{}">
																	<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
																</video>
															</div>
															<div className="review__time">15 августа 2020</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
												<div className="swiper-slide">
													<div className="review">
														<div className="review__data">
															<div className="review__img"></div>
															<h3 className="review__name">Андрей Знающий <span>Профессор академии наук</span></h3>
															
														</div>
														<p className="review__comment">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
														<div className="review__time">15 августа 2020</div>
													</div>
												</div>
												</SwiperSlide>
												

											</Swiper>
		
								
										</div>
									</div>
								
		
								</div>
								
							</div>
		
						</section>
					<section>
							<div className="container">
								
								<h2 className="disc-section">Новости ресурса</h2>
		
								<div className="wrapper-content">
		
									<article className="resource">
										<div className="resource__item">
												<p><a href="#">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать</a></p>
													<div className="review__time">15 августа 2020</div>
										</div>
										<div className="resource__item">
											<p><a href="#">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать</a></p>
										<div className="review__time">15 августа 2020</div>
									</div>
										<div className="resource__item">
											<p><a href="#">Сайт рыбатекст поможет дизайнеру, 
												верстальщику, вебмастеру сгенерировать
												несколько абзацев
												15 августа 2020 года</a></p>
											<div className="review__time">15 августа 2020</div>
										</div>
									</article>
		
									<div className="swiper-container swiper-news swiper-btn-style swiper-pagin-style">
										<div className="swiper-wrapper">
		
												<Swiper
													navigation
													pagination={{ clickable: true }}
													loop={true}
													spaceBetween={30}

												>
													<SwiperSlide>
														<div className="swiper-slide">
															<div className="disc-news-wrapper">
																<div className="disc-news">
																	<div className="video"></div>
																	<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском </p>
																	<a href="#" className="btn btn-capabilities">Подробнее</a>
																</div>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
													<div className="swiper-slide">
															<div className="disc-news-wrapper">
																<div className="disc-news">
																	<div className="video"></div>
																	<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском </p>
																	<a href="#" className="btn btn-capabilities">Подробнее</a>
																</div>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide>
													<div className="swiper-slide">
															<div className="disc-news-wrapper">
																<div className="disc-news">
																	<div className="video"></div>
																	<p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском </p>
																	<a href="#" className="btn btn-capabilities">Подробнее</a>
																</div>
															</div>
														</div>
													</SwiperSlide>
												</Swiper>
		
										</div>
		
										<div className="swiper-pagination"></div>
		
										{/* <div className="button-container">
											<div className="swiper-button-prev"></div>
											<div className="swiper-button-next"></div>
										</div> */}
									</div>
		
								</div>
		
							</div>
						</section>
				</main>
		
			</>
		
		)
	}

}

export default Main;