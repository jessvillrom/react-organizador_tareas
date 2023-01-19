import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const value = useContext(TaskContext);
  console.log(value);
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    setTitle("");
    setDescription("");
    // console.log(title, description);
    createTask(newTask);
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" bg-slate-800 m-4 p-10">
        <h1 className="text-white font-bold text-3xl text-center">Crea tu tarea</h1>
        <input
          className="mb-4 p-3 w-full"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />

        <textarea
          className="mb-2 p-3 w-full"
          placeholder="Descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>

        <button className="bg-sky-600 hover:bg-sky-500 px-3 py-1 text-white text-lg font-medium rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
