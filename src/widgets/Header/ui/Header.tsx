import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { className } = props;

    return (
    <header className={classNames(cls.header, {}, [className, "main-header position-fixed bg-white shadow"])}>
		<div className="container">
			<div className="logo d-flex align-items-center">
				<Link className="d-flex" to="/"><img src="assets/img/site_logo.jpg" alt="logo" style={{width: '100px', height: 'auto'}}/></Link>
			</div>
			<div className="menu d-flex align-items-center">
				{/* <!-- desktop navbar --> */}
				<nav className="desktop-nav">
					<ul className="first-level">
						<li><NavLink to="/doctors" className="animsition-link">Врачи</NavLink></li>
						<li><NavLink to="/" className="animsition-link">О компании</NavLink></li>
						<li><NavLink to="/"className="animsition-link">О сервисе</NavLink></li>
						<li><NavLink to="/" className="animsition-link">Контакты</NavLink></li>
					</ul>
				</nav>
				<a href="tel:+74993914800" className="fw-bold fs-4 pt-5 pe-5 pt-lg-0 pe-lg-0 ps-lg-5 mt-3 mt-lg-0">+7 499 391 48 00</a>
				{/* <!-- mobile navbar --> */}
				<nav className="mobile-nav"></nav>
				<div className="menu-icon">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</div>
		</div>
	</header>
 )
}