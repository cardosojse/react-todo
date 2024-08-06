import { useState, FormEvent } from "react";
import { ClipboardList, Rocket } from "lucide-react";
import Button from "./components/button";
import Input from "./components/input";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleInputChange(event: ChangeEvent) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() != "") {
      setTasks((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }

  return (
    <>
      <header className="bg-black-400 p-20 relative flex justify-center items-center gap-2">
        <Rocket size={28} className="text-blue-200" />
        <h2 className="text-4xl font-black text-blue-200">
          to<span className="text-purple-100">do</span>
        </h2>
      </header>
      <main className="w-[calc(100%_-_50px)] max-w-[640px] m-auto">
        <form
          id="form"
          className="absolute top-[calc(0%_+_171px)] left-[50%] -translate-x-1/2 flex content-between items-center gap-2 w-[calc(100%_-_50px)] max-w-[640px]"
          onSubmit={handleSubmit}
        >
          <Input
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
          />
          <Button type="submit" onClick={addTask}>
            Add
          </Button>
        </form>
        <section>
          <div className="mt-16 mb-4 text-sm flex justify-between font-semibold">
            <p className="text-blue-200">Tarefas criadas: {tasks.length}</p>
            <p className="text-purple-200">Concluídas</p>
          </div>
          <div>
            <div className="border-t border-black-100 text-gray-300 rounded-lg flex flex-col items-center">
              <ClipboardList size={32}/>
              <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="flex justify-between">
                  <span>{task}</span>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Todo;
