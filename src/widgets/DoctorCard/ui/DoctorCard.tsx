import { IDoctor } from 'shared/api/Doctors/types';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DoctorCard.module.scss';

interface DoctorCardProps {
    className?: string;
    doctor: IDoctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = (props) => {
    const { className, doctor, ...otherProps } = props;

    return (
        <div className={classNames(cls.doctorCard, {}, ['card mb-4 wow fadeInUp', className])} style={{maxWidth: "540px"}} {...otherProps}>
            <h5 className="card-header montserrat-text py-3">{doctor.fio}</h5>
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                    <img src={ typeof(doctor.photo)==='string' ? doctor.photo : 'error'} className="img-fluid rounded-circle d-block m-4" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body pt-md-5">
                    <h5 className="card-title">{doctor.position}</h5>
                    <p className="card-text"><small className="text-muted">График приема пациентов: {doctor.recording_order}</small></p>
                    <p className="card-text italic">{doctor.certificate_data}</p>
                    <p className="card-text italic">{doctor.additional_certificate_data}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}