import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import { criarTarefa, criarTodolists } from '../../api/todoList';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalTarefa(props) {
  const {openModalTarefa, handleOpenModalTarefa, handleCloseModalTarefa, tarefaSelecionada, setAtualizaTarefa}=props
  const [descricao, setDescricao]= React.useState()

  function novaTarefa(){
    const body = {
      descricao: descricao,
      todoListId: Number(tarefaSelecionada)
    }

    const resposta = criarTarefa(body);
    resposta.then((dados) => {
      setAtualizaTarefa(true);
      handleCloseModalTarefa()
    })

   
   }
 

  return (
    <div>
      <Modal
        open={openModalTarefa}
        onClose={handleCloseModalTarefa}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Criar Tarefa #{tarefaSelecionada}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <OutlinedInput placeholder="Criar Tarefa" onChange={(e) => {setDescricao(e.target.value)}} />
          <Button variant="contained" size="small" onClick={novaTarefa} sx={{marginLeft:"2px"}}>
          Criar
        </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
