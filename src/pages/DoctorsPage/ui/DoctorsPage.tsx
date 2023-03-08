import { doctorsApi } from 'shared/api/Doctors/DoctrosApi';
import { classNames } from 'shared/lib/classNames/classNames';
import { DoctorCard } from 'widgets/DoctorCard';
import cls from './DoctorsPage.module.scss';

interface DoctorsPageProps {
    className?: string;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = (props) => {
    const { className } = props;

	const {isLoading, data: doctors} = doctorsApi.useFetchAllDoctorsQuery('')

    return (
        <>
         {/* <!-- HERO SECTION  --> */}
	<div className="site-hero_2">
		<div className="page-title">
			<div className="big-title montserrat-text uppercase">наши специалисты</div>
			<div className="small-title montserrat-text uppercase">главная / врачи</div>
		</div>
	</div>
	{/* <!-- CHOISE A DOCTOR --> */}
	<section>
		<div className="container pb-5 mb-5">
			<div className="d-flex flex-wrap justify-content-between">
				
				{
					isLoading
					?
						'Загрузка...'
					:
						doctors.map((doctor, index)=>(
							<DoctorCard key={doctor.id} doctor={doctor} data-wow-delay={`.${index}s`} />
						))
				}

			</div>
            {/* <!-- end row --> */}
		</div>
        {/* <!-- end container --> */}
	</section>
   
        </>
 );
}