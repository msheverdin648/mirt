

export interface IDoctor {
    id: number,
    fio: string, 
    photo: string | File,
    position: string,
    recording_order: string,
    certificate_data: string,
    additional_certificate_data: string
}


export interface DoctorState {
    error: string;
    isLoading: boolean;
    doctors: IDoctor[];
}