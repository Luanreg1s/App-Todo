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
