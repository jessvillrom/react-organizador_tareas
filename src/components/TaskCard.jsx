import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ datos }) {
  // function mostraAlerta() {
  //   alert("Eliminando");
  // }
  const { deleteTask } = useContext(TaskContext);
  // console.log(valor)
  return (
    // <div key={datos.id}>

    <div className="bg-gray-800 text-white p-5 rounded-md">
      <div className="">
        <h2 className="text-3xl font-bold capitalize">{datos.title}</h2>
        <h4 className="text-gray-300 text-lg">{datos.description}</h4>
      </div>
      <button className="m-3 bg-red-500 px-2 py-1 rounded-md hover:bg-red-400" onClick={() => deleteTask(datos.id)}>
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
