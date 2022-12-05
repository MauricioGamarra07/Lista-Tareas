import React, { useState } from 'react'

function AñadirTarea({crearTarea}) {

    const nombreTarea = document.getElementById("tarea");

    const [tarea, setTarea] = useState("");

    return (
        <div className='agregar'>
            <input type="text" placeholder='Ingrese el nombre de tarea'
                id='tarea' onChange={(e) => { setTarea(e.target.value) }} />
            <button type="submit" id='btn-añadir' onClick={() => {
                /* console.log("Nombre de Tarea: " + tarea); */
                nombreTarea.value = "";
                /* console.log(nuevaTarea); */
                crearTarea(tarea);
            }}>Añadir</button>
        </div>
    )
}

export default AñadirTarea