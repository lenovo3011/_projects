import axios from 'axios'


const api = axios.create( {
    baseURL :  'http://localhost:8080'
});

export const GetData = () => {
    return ( api.get('/students'))
}


export const DeleteStd = (id) => {
    return (api.delete(`students/${id}`))

}

export const UpdateStd = (id , data) => {
    return (api.put(`students/${id}` , data))

}

export const StdbyID = (id) => {
    return (api.get(`student/${id}`))
}

export const AddStd = (formData) => {
    return (api.post('/student', formData, { headers : {
        "Content-Type" : "multipart/form-data",
    }}))
}