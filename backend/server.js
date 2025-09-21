import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let tasksArry = [
  {
    id: 1,
    title: "School",
    description: "have very important lesson ",
    completed: false,
    createdAt: new Date().toLocaleDateString().toString(),
    priority: "low",
  },
  {
    id: 2,
    title: "hi",
    description: "fvsdv",
    completed: true,
    createdAt: new Date().toLocaleDateString().toString(),
    priority: "low",
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasksArry);
});

app.post("/api/tasks", (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !priority) {
    return res
      .status(400)
      .json({ message: "Title and priority are required." });
  }

  const newTask = {
    id: tasksArry.length ? tasksArry[tasksArry.length - 1].id + 1 : 1,
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString().slice(0, 10),
    priority,
  };

  tasksArry.push(newTask);
  res.status(201).json(newTask);
});
app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasksArry.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description, priority } = req.body;
  task.title = title || task.title;
  task.description = description || task.description;
  task.priority = priority || task.priority;

  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasksArry.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasksArry.splice(index, 1);
  res.status(204).send();
});

app.patch("/api/tasks/:id/toggle", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasksArry.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`runing on port -> ${PORT}`);
});
