import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { criarTarefa, deletarTarefa, deletarTodoList, putAtualizarTarefa } from '../../api/todoList';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function CardTarefa(props) {

   const {todo, setAtualizaTarefa, setTarefaSelecionada, todoListId, handleOpenModalTarefa}= props

   


   function atualizarTarefa(id,feito){
    const body = {
      feito: !feito
    }

    const resposta = putAtualizarTarefa(id,body);
    resposta.then((dados) => {
      setAtualizaTarefa(true);
    })

   
   }


   function deleteTodolist(id){
      const resposta = deletarTodoList(id);
      resposta.then((dados) => {
        setAtualizaTarefa(true);
      })
   } 

   function criarTarefa(){
    setTarefaSelecionada(todoListId)
    handleOpenModalTarefa()
   }

   function deleteTarefa(id){
     const resposta = deletarTarefa(id);
     resposta.then((dados) => {
       setAtualizaTarefa(true);
     })
  } 
   
 
  
    return (

    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
              {todo.titulo}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Tarefas:
            </Typography>
            {todo.tarefas && todo.tarefas.length > 0 && <Box>
               {todo.tarefas.map((tarefa)=> (

                <Typography key={tarefa.id}variant="body2">
                <Checkbox  checked={tarefa.feito} onClick={(e) => (atualizarTarefa(tarefa.id, tarefa.feito))} />
                  {tarefa.descricao}
                  <Button>
                  <DeleteForeverIcon onClick={(e) => (deleteTarefa(tarefa.id))}/>
                  </Button>
                  
                </Typography>
               ))}
                
            </Box>}
        </CardContent>
        <CardActions>
           <Button size="small" onClick={criarTarefa}>Criar Tarefa</Button>
            <Button size="small" onClick={(e) => (deleteTodolist(todoListId)) }>Remover</Button>

        </CardActions>

      </Card>
    </Box>
  );
}
