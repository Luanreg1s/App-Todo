import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:3000"
});

export async function getTodolists(){
   const response = await axiosClient.get('/listar-todolist');

   return response
}