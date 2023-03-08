import axios from "axios"
import { config } from "process"



export const FormSubmitHandler = (formData: any, file: File) => {

    const headers= {
        'Content-Type': 'multipart/form-data'
      }
    const url = 'http://127.0.0.1:8000/api/v1/doctors/'
    // const url = 'https://api.scr-broker.ru/api/v1/doctors'
    const full_data = {...formData }
    full_data.photo = file
    axios.post(url, full_data, {headers: headers})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
}