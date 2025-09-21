import React from "react";
import Task from "./Task";
import { Search, CirclePlus, ClipboardType, Check, X } from "lucide-react";
import Carousel from "./Carousel";

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
  format,
  setFormat,
}) {
  return (
    <>
      <div className=" flex-col items-center justify-center ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center max-w-[17rem] min-w-[16rem] mb-2">
            <button
              value="add"
              onClick={handleTaskAdd}
              className="bg-[#80f397] gap-2 p-1 flex border-green-700 border-2  rounded-md"
            >
              <CirclePlus
                ndPlus
                width={30}
                height={30}
                className="text-green-900"
              />
              <p className="text-xl text-green-900">Add a new task</p>
            </button>
          </div>
          <div className="flex gap-2 items-center max-w-[17rem] min-w-[16rem] mb-2">
            <button
              value="add"
              onClick={setFormat}
              className="bg-[#89f8f8] gap-2 p-1 flex border-blue-400 border-2  rounded-md"
            >
              <ClipboardType
                ndPlus
                width={30}
                height={30}
                className="text-blue-400 "
              />
              <p className="text-xl text-blue-400">Change format </p>
            </button>
          </div>
        </div>
        {format ? (
          <div className="custom-scrollbar overflow-y-auto flex-col justify-center  max-h-[80dvh] items-center">
            {isAddTask && (
              <div className="p-2 border  rounded-md mb-4 w-[70dvh] bg-gray-100">
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
                    className="rounded-2xl items-center bg-green-500 flex justify-center text-gray-800 h-[40px] w-[50px]"
                  >
                    <Check />
                  </button>
                  <button
                    onClick={handleCancelAdd}
                    className="rounded-2xl bg-red-500 text-gray-900 flex items-center justify-center h-[40px] w-[50px]"
                  >
                    <X />
                  </button>
                </div>
              </div>
            )}

            <div className="text-black ">
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
          </div>
        ) : (
          <div className=" items-center flex-col justify-center">
            <div>
              <Carousel
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                handleToggleTask={handleToggleTask}
                handleUpdateTask={handleUpdateTask}
              />
            </div>
            <div className="flex mt-10 justify-center">
              {isAddTask && (
                <div className="task-item items-center flex-col shadow-2xl justify-center p-2 w-[70dvh] border rounded-md mb-2 bg-gray-100">
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
                      className="rounded-2xl items-center bg-green-500 flex justify-center text-gray-800 h-[40px] w-[50px]"
                    >
                      <Check />
                    </button>
                    <button
                      onClick={handleCancelAdd}
                      className="rounded-2xl bg-red-500 text-gray-900 flex items-center justify-center h-[40px] w-[50px]"
                    >
                      <X />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TaskList;
