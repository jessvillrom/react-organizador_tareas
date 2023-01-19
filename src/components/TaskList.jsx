import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  // fetch("./file.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((e) => {
  //     console.error("Error en ", e);
  //   });

  const { tarea } = useContext(TaskContext);

  if (tarea.length === 0) {
    return (
      <div className="m-4 p-10">
        <h1 className="text-center font-semibold text-5xl text-white">No hay tareas aún</h1>
      </div>
    );
   
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tarea.map((datos) => (
        <TaskCard key={datos.id} datos={datos} />
      ))}
    </div>
  );
}

export default TaskList;
