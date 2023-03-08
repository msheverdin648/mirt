// import { authApi } from 'shared/api/Authorization/Authorization';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doctorsApi } from 'shared/api/Doctors/DoctrosApi';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { DoctorCard } from 'widgets/DoctorCard';
import cls from './DoctorsListPage.module.scss';

interface DoctorsListPageProps {
    className?: string;
}

export const DoctorsListPage: React.FC<DoctorsListPageProps> = (props) => {
    const { className } = props;

    const {isLoading, data: doctors, refetch} = doctorsApi.useFetchAllDoctorsQuery('')
    const [deledeDoctor] = doctorsApi.useDeleteDoctorMutation()

    useEffect(() => {
      refetch()
    }, [])
    
    

    return (
        <div className={classNames(cls.addDoctorsPage, {}, [className])}>
            <h1 className={cls.title}>
                Страница добавления врачей
            </h1>
            {/* <!-- CHOISE A DOCTOR --> */}
            <section>
                <div className="container pb-5 mb-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        
                        {
                            isLoading
                            ?
                                'Загрузка...'
                            :
                                doctors.map((doctor)=>(
                                    <div className={cls.block} key={doctor.id}>
                                        <DoctorCard doctor={doctor} />
                                        <div className={cls.btnRow}>
                                            <Link  to={`/doctor_edit?id=${doctor.id}`} className={classNames(cls.btn, {}, ['btn btn-primary'])}>Изменить</Link>
                                            <Button theme='danger' className={cls.btn} onClick={()=>{
                                                deledeDoctor(doctor.id).then(
                                                    () => refetch()
                                                )
                                            }} >Удалить</Button>
                                        </div>
                                    </div>
                                ))
                        }

                        <div className={cls.addBtnBlock}>
                            <Link className={classNames(cls.addBtn, {}, ['btn btn-success'])} to={'/doctor_form'} >
                                Добавить доктора
                            </Link>
                        </div>

                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                
            </section>
        </div>
 );
}