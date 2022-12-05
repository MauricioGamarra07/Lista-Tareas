import { useEffect, useState } from 'react';
import './App.css'
import AñadirTarea from './assets/components/AñadirTarea'
import SectionTareas from './assets/components/SectionTareas'

function App() {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(lista);
    /* console.log(lista); */
  }, [lista]);

  function crearTarea(tarea) {
    setLista([...lista, {
      titulo: tarea,
      id: lista.length
    }]);
    /* console.log("Lista del CrearTarea:" + lista); */
  }

  function eliminarTarea(id) {
    /* alert("Eliminar Tarea"); */
    console.log(id);
    /* lista.filter(item => item !== id); */
    setLista(lista.filter(item => item.id !== id));
    console.log(lista);
  }

  return (
    <div className="App">
      <h1 className='title'>Lista de Tareas</h1>
      <AñadirTarea crearTarea={crearTarea} />
      <SectionTareas lista={lista} eliminarTarea={eliminarTarea} />
    </div>
  )
}

export default App
