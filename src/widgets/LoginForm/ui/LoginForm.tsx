import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/api/Authorization/UserActions';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;

    const {
        register, 
        formState: {
          errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
      })

      const dispatch = useAppDispatch()
      const navigate = useNavigate()
    

    function OnSubmitHandler(data: any){
        dispatch(login(data))
        .then(()=>navigate(-1))
    }
      

    return (
        <form className="row mx-auto" onSubmit={handleSubmit(OnSubmitHandler)} encType='multipart/form-data'>
            
            <div className="col-md-12">
                {
                errors?.fio && <p className={cls.error}>{errors?.fio?.message}</p>
                }
                <div className={ classNames(cls.input, { [cls.inputError]: Boolean(errors?.fio) }, ['input_1']) }
                    style={{marginBottom: "30px"}}>
                    <input type="text" {...register( 'username' , { required: 'Это поле обязательно для заполнения' } )} />
                    <span className={classNames(cls.span, {}, [])}>Логин</span>

                </div>
            </div>
            <div className="col-md-12">
                {
                errors?.position && <p className={cls.error}>{errors?.position?.message}</p>
                }
                <div className={ classNames(cls.input, { [cls.inputError]: Boolean(errors?.position) }, ['input_1']) }
                    style={{marginBottom: "30px"}}>
                    <input type="password" {...register( 'password' , { required: 'Это поле обязательно для заполнения' }
                        )} />
                    <span className={classNames(cls.span, {}, [])}>Пароль</span>
                </div>
            </div>
            <div className="col-md-12 d-flex flex-wrap justify-content-end">
                <button type='submit' className="btn btn-primary text-white"><span className={classNames(cls.span,
                        {}, [])}>Войти</span></button>
            </div>
        </form>
 );
}