import axios from "axios";


export function GetRegister()
{
    return axios.get(`http://localhost:9000/user`)

}

export  function PostRegister(data){
    return axios.post(`http://localhost:9000/user`,data);
}
export function Deleteuserbyid(id){
    return axios.delete(`http://localhost:9000/user/${id}`);
}
export function Getuserbyid(id){
    return axios.get(`http://localhost:9000/user/${id}`);
}

//updating the user
export function Updateuserbyid(id,data){
    return axios.put(`http://localhost:9000/user/${id}`,data)
}