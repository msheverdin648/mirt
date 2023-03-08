import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { doctorsApi } from 'shared/api/Doctors/DoctrosApi';
import { IDoctor } from 'shared/api/Doctors/types';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { DoctorForm } from 'widgets/DoctorForm';
import { FormSubmitHandler } from '../lib/FormSubmitHandler';
import cls from './DoctorFormPage.module.scss';

interface DoctorFormPageProps {
    className?: string;
}

export const DoctorFormPage: React.FC<DoctorFormPageProps> = (props) => {
    const { className } = props;

   
    const location = useLocation()
    const search = location.search
        .replace('?','')
        .split('&')
        .reduce(
            function(p: any,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        )
    const [addPost] = doctorsApi.useAddDoctorMutation()
    const [updateDoctor] = doctorsApi.useUpdateDoctorMutation()

    const [fetchOneDoctor, {data: doctor}] = doctorsApi.useFetchOneDoctorMutation()

    useEffect(()=>{
        fetchOneDoctor(search.id)
    }, [])

    const OnSubmitHandler = (data: FormData) => {
        switch(location.pathname){
            case '/doctor_edit':
                const file = data.get('photo') as File
                if (!Boolean(file.name)){
                    data.delete('photo')
                }
                updateDoctor([data, search.id]).then(()=>{
                    fetchOneDoctor(search.id)
                })
                
                break;
            case '/doctor_add':
                addPost(data)
                break;
            default:
                console.log('Ошибка')
                break;
        }
    }

    return (
    <div className='d-flex flex-column'>
        <h1 className='h1 text-center mb-5'>
            {
                location.pathname === '/doctor_edit'
                ? 'Изменение данных доктора'
                : 'Добавление доктора'
            }
        </h1>

        <div className="col-md-9 col-lg-7 mx-auto">
            <div className="row">
                <DoctorForm doctor={doctor || null} submitHandler={OnSubmitHandler} />
            </div>
        </div>
    
    </div>

 );
}