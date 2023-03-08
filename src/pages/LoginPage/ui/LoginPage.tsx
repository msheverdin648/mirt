import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from 'widgets/LoginForm';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.loginPage, {}, ['container', className])}>
            <h1 className={cls.title}>Вход</h1>
            <LoginForm />
        </div>
 );
}