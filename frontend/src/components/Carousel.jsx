import React, { useState, useEffect } from "react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import Task from "./Task";

function Carousel({
  tasks,
  handleDeleteTask,
  handleToggleTask,
  handleUpdateTask,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!tasks || tasks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === tasks.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [tasks]);

  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available</p>;
  }

  const moveLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? tasks.length - 1 : prev - 1));
  };
  const moveRigth = () => {
    setCurrentIndex((prev) => (prev === tasks.length - 1 ? 0 : prev + 1));
  };
  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available</p>;
  }
  return (
    <div>
      <div className="relative w-full flex items-center   justify-center">
        <button
          onClick={moveLeft}
          className="absolute left-10   rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowBigLeft size={32} />
        </button>

        <div className="w-[70dvh]">
          <Task
            task={tasks[currentIndex]}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
            handleUpdateTask={handleUpdateTask}
          />
        </div>
        <button
          onClick={moveRigth}
          className="absolute right-10  rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowBigRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
