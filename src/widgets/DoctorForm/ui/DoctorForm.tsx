import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { doctorsApi } from 'shared/api/Doctors/DoctrosApi';
import { IDoctor } from 'shared/api/Doctors/types';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DoctorForm.module.scss';

interface DoctorFormProps {
    className?: string;
    submitHandler: any;
    doctor?: IDoctor;
}

export const DoctorForm: React.FC<DoctorFormProps> = (props) => {
    const { className, submitHandler, doctor } = props;

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

    function OnSubmitHandler() {

        const formData = new FormData(document.forms[0]);
        submitHandler(formData)
        reset()
    } 

    useEffect(() => {
        reset(doctor)
    }, [doctor])
    
    

    return (
        <form className="row mx-auto" onSubmit={handleSubmit(OnSubmitHandler)} encType='multipart/form-data' >
        <div className="col-md-12">
            {
                errors?.photo && <p className={cls.error}>{errors?.photo?.message}</p> 
            }
            <img src={typeof(doctor?.photo)==='string' ? doctor.photo : ''} alt="" />
            <div
                style={{marginBottom: "30px"}}
                className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.photo)
                    }, ['input_1 d-flex align-items-center justify-content-center'])
                }
                >
                    
                <input type="file"
                   
                    {...register(
                        'photo', 
                        {
                            required: Boolean(doctor) ? false : 'Это поле обязательно для заполнения'
                        }
                    )}
                />
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Выберете фото</span>
            </div>
        </div>
        
        <div className="col-md-12">
            {
                errors?.fio && <p className={cls.error}>{errors?.fio?.message}</p> 
            }
            <div className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.fio)
                    }, ['input_1'])
                }
                style={{marginBottom: "30px"}}>
                <input type="text" 
                    {...register(
                        'fio', 
                        {
                            required: 'Это поле обязательно для заполнения'
                        }
                    )}
                />
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>ФИО специалиста</span>
                
            </div>
        </div>
        <div className="col-md-12">
            {
                errors?.position && <p className={cls.error}>{errors?.position?.message}</p> 
            }
            <div className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.position)
                    }, ['input_1'])
                } 
                style={{marginBottom: "30px"}}>
                <input type="text" 
                     {...register(
                        'position', 
                        {
                            required: 'Это поле обязательно для заполнения'
                        }
                    )}
                />
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Занимаемая должность</span>
            </div>
        </div>
        <div className="col-md-12">
            {
                errors?.recording_order && <p className={cls.error}>{errors?.recording_order?.message}</p> 
            }
            <div className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.recording_order)
                    }, ['input_1'])
                } 
                style={{marginBottom: "30px"}}>
                <input type="text" 
                     {...register(
                        'recording_order', 
                        {
                            required: 'Это поле обязательно для заполнения'
                        }
                    )}
                />
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Порядок записи на консультацию, прием, диагностику</span>
                
            </div>
        </div>
        <div className="col-md-12">
            {
                errors?.certificate_data && <p className={cls.error}>{errors?.certificate_data?.message}</p> 
            }
            <div className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.certificate_data)
                    }, ['textarea_1'])
                } 
                style={{marginBottom: "30px"}}>
                <textarea 
                    {...register(
                        'certificate_data', 
                        {
                            required: 'Это поле обязательно для заполнения'
                        }
                    )}
                ></textarea>
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Данные сертификата специалиста – специальность, срок действия сертификата,
                    соответствие занимающей должности</span>
                
            </div>
        </div>
        <div className="col-md-12">
            {
                errors?.additional_certificate_data && <p className={cls.error}>{errors?.additional_certificate_data?.message}</p> 
            }
            <div className={
                    classNames(cls.input, {
                        [cls.inputError]: Boolean(errors?.additional_certificate_data)
                    }, ['textarea_1'])
                } style={{marginBottom: "30px"}}>
                <textarea 
                     {...register(
                        'additional_certificate_data', 
                        {
                            required: 'Это поле обязательно для заполнения'
                        }
                    )}
                ></textarea>
                <span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Дополнительные данные сертификата – кем выдан, когда выдан, уровень образования,
                    квалификация</span>
            </div>
        </div>
        <div className="col-md-12 d-flex flex-wrap justify-content-end">
            <button type='submit' className="btn btn-success text-white"><span className={classNames(cls.span, {active: Boolean(doctor)}, [])}>Сохранить</span></button>
        </div>
    </form>
 );
}