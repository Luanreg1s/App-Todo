import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import { criarTodolists } from '../../api/todoList';


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

export default function ModalForm(props) {
  const {open, handleOpen, handleClose, setAtualizaTarefa}=props
  const [titulo, setTitulo]= React.useState()

  function novaTodolists(){
    const body = {
      titulo: titulo,
      usuarioUsuarioId: "55aecdad-d094-4e06-8138-380ba56f9009"
    }

    const resposta = criarTodolists(body);
    resposta.then((dados) => {
      setAtualizaTarefa(true);
      handleClose(false)
    })

   
   }
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Criar TodoListt
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <OutlinedInput placeholder="Lista de Tarefas" onChange={(e) => {setTitulo(e.target.value)}} />
          <Button variant="contained" size="small" onClick={novaTodolists} sx={{marginLeft:"2px"}}>
          Criar
        </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
