import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    const { className } = props;

    return (
        <>
        {/* <!-- HERO SECTION  --> */}
	<div className="site-hero"></div>

	{/* <!-- RULES OF WRITE --> */}
	<section>
		<div className="container">
			<div className="row">
				<div className="section-title">
					<span>Виды оказываемых услуг</span>
				</div>
			</div>
			<div className="accordion accordion-flush wow fadeInUp" id="accordionExample">
				<div className="accordion-item border-top">
				  <h2 className="accordion-header" id="headingOne">
					<button className="accordion-button collapsed montserrat-text fs-3 py-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
					  При оказании первичной врачебной медико- санитарной помощи в амбулаторных условиях по:
					</button>
				  </h2>
				  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div className="accordion-body">
					  <p className="ps-3 pb-3">Организации здравоохранения и общественному здоровью, эпидемиологии;</p>
					  <p className="ps-3 pb-3">Педиатрии;</p>
					  <p className="ps-3 pb-3">Терапии;</p>
					</div>
				  </div>
				</div>
				<div className="accordion-item">
				  <h2 className="accordion-header" id="headingTwo">
					<button className="accordion-button collapsed montserrat-text fs-3 py-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					  При оказании первичной специализированной медико-санитарной помощи в амбулаторных условиях по:
					</button>
				  </h2>
				  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
					<div className="accordion-body">
					  <p className="ps-3 pb-3">Акушерству и гинекологии (за исключением использования вспомогательных репродуктивных технологий и искусственного прерывания беременности);</p>
					  <p className="ps-3 pb-3">Гастроэнтерологии;</p>
					  <p className="ps-3 pb-3">Детской кардиологии;</p>
					  <p className="ps-3 pb-3">Диетологии;</p>
					  <p className="ps-3 pb-3">Кардиологии;</p>
					  <p className="ps-3 pb-3">Неврологии;</p>
					  <p className="ps-3 pb-3">Нефрологии;</p>
					  <p className="ps-3 pb-3">Онкологии;</p>
					  <p className="ps-3 pb-3">Психиатрии;</p>
					  <p className="ps-3 pb-3">Ультразвуковой диагностике;</p>
					  <p className="ps-3 pb-3">Урологии;</p>
					  <p className="ps-3 pb-3">Функциональной диагностике;</p>
					  <p className="ps-3 pb-3">Эндокринологии;</p>
					</div>
				  </div>
				</div>
				<div className="accordion-item border-bottom">
				  <h2 className="accordion-header" id="headingThree">
					<button className="accordion-button collapsed montserrat-text fs-3 py-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					  При проведении медицинских экспертиз организуются и выполняются следующие работы (услуги) по:
					</button>
				  </h2>
				  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
					<div className="accordion-body">
					  <p className="ps-3 pb-3">Экспертизе качества медицинской помощи</p>
					</div>
				  </div>
				</div>
			  </div>

		</div>
	</section>
	
	{/* <!-- WHAT WE DO --> */}
	<section>
		<div className="container">
			<div className="row">
				<div className="section-title">
					<span>Правила записи</span>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 wow fadeInUp">
					<div className="benefits_1_single">
						<div className="d-flex align-items-center pb-3">
							<img className="d-block w-auto mx-auto" src="assets/img/doctor.png" alt="" />
						</div>
						<p>
							Выберите подходящего врача. А также дату и время начала консультации
						</p>
					</div>
				</div>
				<div className="col-md-4 wow fadeInUp" data-wow-delay=".1s">
					<div className="benefits_1_single">
						<div className="d-flex align-items-center pb-3">
							<img className="d-block w-auto mx-auto" src="assets/img/dollar.png" alt="" />
						</div>
						<p>
							Оплатите консультацию. После оплаты вы можете заранее написать и отправить врачу все, что посчитаете нужным
						</p>
					</div>
				</div>
				<div className="col-md-4 wow fadeInUp" data-wow-delay=".2s">
					<div className="benefits_1_single">
						<div className="d-flex align-items-center pb-3">
							<img className="d-block w-auto mx-auto" src="assets/img/upload.png" alt="" />
						</div>
						<p>
							Зайдите на сайт в назначенное время. Врач сам свяжется с вами. Важно, чтобы вы были онлайн
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- WHY CHOOSE US --> */}
	<section className="services">
		<div className="container">
			<div className="row">
				<div className="section-title">
					<span>Нормативные документы</span>
				</div>
			</div>
			<div className="row wow fadeInUp">
				<span className="montserrat-text service-title pricing_plan fs-3 mb-5">Стоимость оказываемых медицинских услуг, с приложением утвержденного документа с ценами в электронном виде</span>
				<span className="montserrat-text service-title pricing_plan fs-3 mb-5">Графики приема врачей, контактные данные специалистов или организации – электронная почта, телефон;</span>
				<span className="montserrat-text service-title pricing_plan fs-3 mb-5">Информация об органах охраны здоровья, надзору в сфере здравоохранения, надзору защиты прав потребителей</span>
				<span className="montserrat-text service-title pricing_plan fs-3 mb-5">Информация об страховых учреждениях, с которыми заключены договора на оказание и оплату медуслуг по ОМС</span>
				<span className="montserrat-text service-title pricing_plan fs-3">Лицензии организации на ведение медицинской деятельности</span>
			</div>
		</div>
	</section>

	{/* <!-- newsletter --> */}
	<section className="green-section wow fadeInUp" style={{padding:"50px 0"}}>
		<div className="container">
			<span className="white-text montserrat-text uppercase mb-5" style={{fontSize: '30px', display: 'block'}}>
				контакты
			</span>
			<div className="d-flex flex-wrap flex-lg-row-reverse">
				<div className="col-lg-6">
					<div className="row">
						<div className="white-section text-center pt-5" style={{padding: '20px'}}>
							<span className="montserrat-text uppercase">Общество с ограниченной ответственностью «Медицинские Инновационные Решения и Технологии»</span>
							<p className="pb-3">Дата госрегистрации учреждения: 28.08.2019г.</p>
							<p className="pb-3"><span className="text-decoration-underline">Юридический адрес:</span> 115035, г. Москва, ул. Садовническая, д.72, стр.1, этаж 1, помещение III, комната 5, офис Б1П<br/><span className="text-decoration-underline">Почтовый адрес:</span> 115419, г. Москва, ул. Орджоникидзе, д. 7, пом. № III</p>
							<p className="pb-3"><span className="text-decoration-underline">Лицензия:</span> Л041-01137-77/00325371 от 19.08.2021 г. Выдана Департаментом здравоохранения города Москвы</p>
							<div className="d-flex justify-content-center pb-4">
								<a className="link me-3" href="tel:+74993914800">+7 499 391 48 00</a>
								<a className="link ms-3" href="mailto:info@pediatr247.ru">info@pediatr247.ru</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 map-box">
					<div className="row">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.104112654998!2d37.63865531609842!3d55.73932000049904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae3708e11bd%3A0x95736ad31c019153!2z0KHQsNC00L7QstC90LjRh9C10YHQutCw0Y8g0YPQuy4sIDcyINGB0YLRgNC-0LXQvdC40LUgMSwg0JzQvtGB0LrQstCwLCAxMTUwMzU!5e0!3m2!1sru!2sru!4v1675988638616!5m2!1sru!2sru" width="100%" height="100%" scrolling="no"  style={{border: 0, padding: 0}}  loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</div>
	</section>
            
        </>
 )
}