import React, { useState } from "react";

import "./TaskForm.css";


const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    status: "todo",
    tags: [],
  });
  

  console.log("Task Data :", taskData.task);
  console.log(taskData.description);

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData ];
    });
    setTaskData({
      task: "",
      description: "",
      status: "todo",
      tags: [],
    });
   
  };
  
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={taskData.description}
          className="task_input"
          placeholder="Task Decription"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">Pending</option>
              <option value="doing">Progress</option>
              <option value="done">Completed</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
            <span className="note">*Drag and drop to change the status of task</span>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
