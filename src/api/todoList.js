import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:3000"
});

export async function getTodolists(){
   const response = await axiosClient.get('/listar-todolist');

   return response
}

export async function putAtualizarTarefa(id,body){
    const response = await axiosClient.put(`/atualizar-tarefa/${id}`,body);

    return response 
}


export async function deletarTodoList(id){
        const response = await axiosClient.delete(`/deletar-todolist/${id}`);
    
        return response 
}

export async function deletarTarefa(id){
    const response = await axiosClient.delete(`/deletar-tarefa/${id}`);

    return response 
}

export async function criarTodolists(body){
    const response = await axiosClient.post('/criar-todolist', body);
 
    return response
 }

 export async function criarTarefa(body){
    const response = await axiosClient.post('/criar-tarefa', body);
 
    return response
 }