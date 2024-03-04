import { getTodolists} from './api/todoList'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardTarefa from './componentes/CardTarefa';


function App() {

  const [todolists, setTodolists] = useState()
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    setCarregando(true)
    setErro(false)
    const resposta = getTodolists();
    resposta.then((dados) => {
      setTodolists(dados.data);
    }).catch((erro) => {
      setErro(true)
    }).finally(() => {
      setCarregando(false)
    })
  }, []);

  return (
    
    <div>
      {todolists && <div> 
        {
          todolists.map((todo) => (
            <CardTarefa key={todo.id} todo={todo}/>
          ))
        }
      </div> }

    </div>
  )

}

export default App