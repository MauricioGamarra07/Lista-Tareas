import React, { useEffect } from 'react'

function SectionTareas({ lista, eliminarTarea }) {

  return (
    <div className='section-tareas'>
      {
        lista.map((item, index) => (
          <div className="cont-tarea" key={index}>
            <input type="checkbox" id="chkTarea" />
            <h1>{item.titulo}</h1>
            <button onClick={() => { eliminarTarea(index) }} className="btnEliminar" id={index}>
              <i className='bx bxs-trash bx-lg'></i>
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default SectionTareas