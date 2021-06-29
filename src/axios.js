import axios from "axios";


export function GetRegister()
{
    return axios.get(`https://registration-be.herokuapp.com/user`)

}

export  function PostRegister(data){
    return axios.post(`https://registration-be.herokuapp.com/user`,data);
}
export function Deleteuserbyid(id){
    return axios.delete(`https://registration-be.herokuapp.com/user/${id}`);
}
export function Getuserbyid(id){
    return axios.get(`https://registration-be.herokuapp.com/user/${id}`);
}

//updating the user
export function Updateuserbyid(id,data){
    return axios.put(`https://registration-be.herokuapp.com/user/${id}`,data)
}