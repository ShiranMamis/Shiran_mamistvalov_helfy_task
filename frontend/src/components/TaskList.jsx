import React from "react";
import Task from "./Task";
import { Search, CirclePlus } from "lucide-react";

function TaskList({
  tasks,
  isAddTask,
  newTask,
  setNewTask,
  handleAddNewTask,
  handleCancelAdd,
  handleTaskAdd,
  handleDeleteTask,
  handleToggleTask,
  handleUpdateTask,
}) {
  return (
    <div>
      <div className="flex gap-2 items-center max-w-[17.448rem] min-w-[16rem] mb-2">
        <button
          value="add"
          onClick={handleTaskAdd}
          className="bg-[#80f397] p-1 border-green-700 border-2  rounded-md"
        >
          <CirclePlus
            ndPlus
            width={30}
            height={30}
            className="text-green-700"
          />
        </button>
      </div>
      <div className="custom-scrollbar overflow-y-auto max-h-[28rem]">
        <div className="text-black">
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleToggleTask={handleToggleTask}
              handleUpdateTask={handleUpdateTask}
            />
          ))}
        </div>
        {isAddTask && (
          <div className="task-item p-2 border rounded-md mb-2 bg-gray-100">
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            />
            <input
              type="text"
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            />
            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
              className="mb-1 w-full border rounded p-1"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="flex gap-2">
              <button
                onClick={handleAddNewTask}
                className="rounded-2xl  bg-green-500 text-gray-800 h-[40px] w-[70px]"
              >
                OK
              </button>
              <button
                onClick={handleCancelAdd}
                className="rounded-2xl bg-red-500 text-gray-800 h-[40px] w-[70px]"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
