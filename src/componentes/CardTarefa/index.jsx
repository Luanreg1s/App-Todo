import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function CardTarefa(props) {
   const {todo}= props
  
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
                  <Checkbox {...tarefa.descricao}  checked={tarefa.feito} />
                  {tarefa.descricao}
                </Typography>
               ))}
                
            </Box>}
        </CardContent>
        <CardActions>
            <Button size="small">Editar</Button>
            <Button size="small">Remover</Button>
        </CardActions>

      </Card>
    </Box>
  );
}
