import { useEffect, useState } from 'react';
import './App.css'
import AñadirTarea from './assets/components/AñadirTarea'
import SectionTareas from './assets/components/SectionTareas'

function App() {

  const [lista, setLista] = useState([]);

  const [id, setId] = useState(1);

  useEffect(() => {
    setLista(lista);
    /* console.log(lista); */
  }, [lista]);

  function crearTarea(tarea, numero) {
    setLista([...lista, {
      titulo: tarea,
      id: numero
    }]);
  }

  function eliminarTarea(id) {
    /* alert("Eliminar Tarea"); */
    /* console.log(parseInt(id)); */
    /* lista.filter(item => item !== id); */
    setLista(lista.filter(elem => elem.id !== parseInt(id)));
    console.log(lista);
  }

  return (
    <div className="App">
      <h1 className='title'>Lista de Tareas</h1>
      <AñadirTarea crearTarea={crearTarea} setId={setId} id={id} />
      <SectionTareas lista={lista} eliminarTarea={eliminarTarea}/>
    </div>
  )
}

export default App
