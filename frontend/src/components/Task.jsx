import React, { useState } from "react";
import Carousel from "./Carousel";

function Task({ task, handleDeleteTask, handleToggleTask, handleUpdateTask }) {
  const [editing, setEditing] = useState(false);
  const [editTask, setEditTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
  });

  const handleSave = () => {
    handleUpdateTask(task.id, editTask);
    setEditing(false);
  };
  return (
    <>
      <div
        className={`p-2 border rounded-md mb-2 shadow-2xl w-[70dvh] h-[40dvh] ${
          task.completed ? "bg-green-100" : "bg-amber-50"
        }`}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            />
            <input
              type="text"
              value={editTask.description}
              onChange={(e) =>
                setEditTask({ ...editTask, description: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            />
            <select
              value={editTask.priority}
              onChange={(e) =>
                setEditTask({ ...editTask, priority: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-400 text-white p-1 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div>
            <div>
              <h3 className="font-bold mb-5 text-2xl text-gray-800">
                {task.title}
              </h3>
              <p className="text-xl text-gray-600">{task.description}</p>
              <p className="text-xl text-gray-600">Priority: {task.priority}</p>
              <p className="text-xl text-gray-600">Created: {task.createdAt}</p>
            </div>
            <div className="flex mt-20 gap-2 justify-center border-0">
              <button
                className=" rounded-2xl shadow-2xl 
              bg-blue-400 border-2 border-blue-500 text-gray-600 font-bold h-[40px] w-[100px]"
                onClick={() => handleToggleTask(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className=" rounded-2xl shadow-2xl bg-green-300 border-2 font-bold border-green-500 text-gray-600 h-[40px] w-[100px]"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
              <button
                className="rounded-2xl border-2 border-red-500 bg-red-400 font-bold text-gray-800 h-[40px] w-[100px]"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Task;
