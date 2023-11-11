import axios from "axios"

const dataURL = axios.create({
    baseURL: "http://localhost:3344"
})

export const getDataBase = async() => {
    try {
        return axios.get('http://localhost:3344/data').then((res) => {
           
            return res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getOneDataBase = async(id:any) => {
    try {
        return axios.get(`http://localhost:3344/data/${id}`).then((res) => {
           console.log(res);
            return res.data[id]
        })
    } catch (error) {
        console.log(error);
    }
}


export const deleteOneQuestion = async(id:any)=>{
    try {
        return await axios.delete(`http://localhost:3344/data/${id}`)
    } catch (error) {
        console.log(error);
        
    }
}