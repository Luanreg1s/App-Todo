import { criarTodolists, getTodolists} from './api/todoList'
import { useState, useEffect } from 'react'
import CardTarefa from './componentes/CardTarefa';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ModalForm from './componentes/ModalForm';
import ModalTarefa from './componentes/ModalTarefa';


function App() {

  const [todolists, setTodolists] = useState()
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)
  const [atualizaTarefa, setAtualizaTarefa] = useState(false)
  const [deletarTodolist, setDeletarTodolist] = useState(false)
  const [open, setOpen] = useState()
  const [openModalTarefa, setOpenModalTarefa] = useState()
  const [tarefaSelecionada, setTarefaSelecionada] = useState()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModalTarefa = () => setOpenModalTarefa(true);
  const handleCloseModalTarefa = () => setOpenModalTarefa(false);


  function abrirModal() {
    setOpen(true)

  }

  useEffect(() => {
    setCarregando(true)
    setErro(false)
    const resposta = getTodolists();
    resposta.then((dados) => {
      setAtualizaTarefa(false)
      setTodolists(dados.data);
    }).catch((erro) => {
      setErro(true)
    }).finally(() => {
      setCarregando(false)
    })
  }, [atualizaTarefa]);

  return (
    
    <div>
      {todolists && <div> 
        {
          todolists.map((todo) => (
            <CardTarefa 
            key={todo.id}
            todo={todo}
            setTarefaSelecionada={setTarefaSelecionada}
            setAtualizaTarefa={setAtualizaTarefa}
            todoListId={todo.id}
            handleOpenModalTarefa={handleOpenModalTarefa}/>
          ))
        }
      </div> }
      <Fab color="secondary" aria-label="add" onClick={handleOpen} >
        <AddIcon  />
      </Fab>
      <ModalForm 
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        setAtualizaTarefa={setAtualizaTarefa}/>
      <ModalTarefa 
        tarefaSelecionada={tarefaSelecionada}
        openModalTarefa={openModalTarefa}
        handleOpenModalTarefa={handleOpenModalTarefa}
        handleCloseModalTarefa={handleCloseModalTarefa}
        setAtualizaTarefa={setAtualizaTarefa}/>

    </div>
  )

}

export default App