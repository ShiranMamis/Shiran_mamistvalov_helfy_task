import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "./services/page";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addingTask, setAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [format, setFormat] = useState(true);
  useEffect(() => {
    fetchTasks();
  }, []);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      console.log(res);
      setTasks(res.data);
    } catch (err) {
      toast.error("ERROR");
      console.log(err);
    }
  };
  const handleAddNewTask = async () => {
    if (!newTask.title || !newTask.priority) {
      toast.error("Title and priority are required");
      return;
    }
    try {
      const res = await addTask(newTask);
      setTasks([...tasks, res.data]);
      setAddingTask(false);
      setNewTask({ title: "", description: "", priority: "low" });
    } catch (err) {
      toast.error("ERROR adding task");
      console.log(err);
    }
  };
  const handleCancelAdd = () => {
    setAddingTask(false);
    setNewTask({ title: "", description: "", priority: "low" });
  };
  const handleStartAdd = () => setAddingTask(true);
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
      toast.success("user was deleted ");
    } catch (err) {
      toast.error("Error deleting task");
      console.log(err);
    }
  };
  const handleToggleTask = async (id) => {
    try {
      const res = await toggleTask(id);
      setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
      toast.success("completed");
    } catch (err) {
      toast.error("Error toggling task");
      console.log(err);
    }
  };
  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const res = await updateTask(id, updatedTask);
      setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      toast.error("Error updating task");
      console.log(err);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="text-black ">
        <TaskList
          tasks={tasks}
          format={format}
          setFormat={() => setFormat(!format)}
          isAddTask={addingTask}
          newTask={newTask}
          setNewTask={setNewTask}
          handleAddNewTask={handleAddNewTask}
          handleCancelAdd={handleCancelAdd}
          handleTaskAdd={handleStartAdd}
          handleDeleteTask={handleDeleteTask}
          handleToggleTask={handleToggleTask}
          handleUpdateTask={handleUpdateTask}
        />
      </div>
    </div>
  );
}

export default App;
