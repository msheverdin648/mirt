import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.footer, {}, [className, "main-footer wow fadeInUp"])}>
		<div className="container">
			<div className="col-md-7 col-sm-12">
				<div className="row">
					<nav className="footer-nav">
						<ul>
							<li><a href="doctors.html" className="animsition-link link">Врачи</a></li>
							<li><a href="about.html" className="animsition-link link">О компании</a></li>
							<li><a href="services.html"className="animsition-link link">О сервисе</a></li>
							<li><a href="contact.html" className="animsition-link link">Контакты</a></li>
							<li><a href="license.html" className="animsition-link link">Лицензия</a></li>
						</ul>
					</nav>
					<a href="index.html"><img className="py-4" src="assets/img/site_logo.jpg" alt="logo" style={{width: '100px', height: 'auto'}} /></a>
				</div>
				
			</div>

			<div className="col-md-5 col-sm-12" style={{textAlign: 'right'}}>
				<div className="row">
                    <small className="fst-italic text-muted pb-3">
                        Юридический адрес: 115035, г. Москва, ул. Садовническая, д.72, стр.1, этаж 1, помещение III, комната 5, офис Б1П<br/><br/>Почтовый адрес: 115419, г. Москва, ул. Орджоникидзе, д. 7, пом. № III 
                    </small>
					<div className="uppercase gray-text">
						&copy;2023 Все права защищены.
					</div>
					<ul className="social-icons d-lg-flex justify-content-lg-end pt-4">
						<li><a href="#"><i className="icon ion-social-facebook"></i></a></li>
						<li><a href="#"><i className="icon ion-social-twitter"></i></a></li>
						<li><a href="#"><i className="icon ion-social-youtube"></i></a></li>
						<li><a href="#"><i className="icon ion-social-linkedin"></i></a></li>
						<li><a href="#"><i className="icon ion-social-pinterest"></i></a></li>
						<li><a href="#"><i className="icon ion-social-instagram"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
 );
}