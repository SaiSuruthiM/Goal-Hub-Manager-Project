import React, { useState } from "react";
import educationIcon from "../image/educationIcon.png";

function TodoEducation() {

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [completed, setCompleted] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Handle Save Task
  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      taskName,
      description,
      dueDate,
      priority,
      completed,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  // Handle Edit Task
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskName(taskToEdit.taskName);
    setDescription(taskToEdit.description);
    setDueDate(taskToEdit.dueDate);
    setPriority(taskToEdit.priority);
    setCompleted(taskToEdit.completed);
    handleDelete(id);
  };

  // Reset Form
  const resetForm = () => {
    setTaskName("");
    setDescription("");
    setDueDate("");
    setPriority("low");
    setCompleted(false);
  };

  // Handle Delete Task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L40,208C80,224,160,256,240,234.7C320,213,400,139,480,138.7C560,139,640,213,720,229.3C800,245,880,203,960,176C1040,149,1120,139,1200,165.3C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div className="">
        <div className="pt-10">
          <div className="flex justify-center items-center space-x-4 ">
            <div className="pr-10">
              <img className="w-24 h-24 relative " src={educationIcon} />
            </div>
            <p className="text-black font-semibold  relative text-4xl">
              Education
            </p>
          </div>
        </div>
      </div>

      <div className="font-playfair pt-32">
        {/* Add Task Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5">Add Task</h2>
          <form className="border-2 border-blue-400 p-8 rounded-lg bg-blue-100 shadow-md w-full max-w-md">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full mb-4 p-3 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mb-4 p-3 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
            />
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full mb-4 p-3 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full mb-4 p-3 rounded-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="w-5 h-5 mr-2"
              />
              <label className="text-xl">Completed</label>
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="w-full py-3 bg-blue-600 text-white text-xl rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save Task
            </button>
          </form>
        </div>

        {/* Task List Section */}
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5">Task List</h2>
          <ul className="border-2 border-blue-400 p-8 rounded-lg bg-blue-100 shadow-md w-full max-w-3xl">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <li key={task.id} className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">
                    {task.taskName}
                  </h3>
                  <p className="text-lg mb-2">
                    <span className="font-bold">Description:</span>{" "}
                    {task.description}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-bold">Due Date:</span> {task.dueDate}
                  </p>
                  <p className="text-lg mb-2">
                    <span className="font-bold">Priority:</span> {task.priority}
                  </p>
                  <p className="text-lg mb-4">
                    <span className="font-bold">Completed:</span>{" "}
                    {task.completed ? "Yes" : "No"}
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(task.id)}
                      className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-lg font-semibold text-gray-600">
                No tasks available. Add a new task!
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoEducation;
