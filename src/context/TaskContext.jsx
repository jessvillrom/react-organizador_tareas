import { createContext, useState, useEffect } from "react";
import { datos as data } from "../data/task";


/* 
    La función createContext se usa para 
    proporciona una forma de compartir valores
     como estos entre componentes sin tener 
    que pasar explícitamente una prop a través 
    de cada nivel del árbol.
*/
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tarea, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tarea,
      {
        id: tarea.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }
  function deleteTask(id) {
    setTask(tarea.filter((task) => task.id !== id));
    //   console.log(id)
    //   console.log(tarea)
  }
    useEffect(() => {
      setTask(data);
    }, []);
  return (
    <TaskContext.Provider
      value={{ tarea: tarea, deleteTask,createTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

/*
Llamar desde el props 
 function TaskContext(props){
    return(
        <>
        <h1>Componente context</h1>
        {props.children}
        
        </>
    )
} */
export default TaskContext;
