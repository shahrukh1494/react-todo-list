import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";

const TaskDisplay = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "go shopping",
      day: "10 March at 2 pm",
      reminder: false,
      editMode: false,
    },
    {
      id: 2,
      text: "visit friend",
      day: "11 March at 1 pm",
      reminder: false,
      editMode: false,
    },
    {
      id: 3,
      text: "meeting",
      day: "14 March at 2 pm",
      reminder: false,
      editMode: false,
    },
  ]);

  //add task function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //edit task function
  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editMode: !task.editMode } : task
      )
    );
  };

  //function to save edited task
  const saveEdit = (id, newText, newDay) => {
    if (newText.trim() === "") {
      alert("Please add a task");
      return;
    }
    if (newDay.trim() === "") {
      alert("Please add a day and date");
      return;
    }
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, editMode: false, text: newText, day: newDay }
          : task
      )
    );
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          component={() => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                  onEdit={editTask}
                  saveEdit={saveEdit}
                />
              ) : (
                "No Tasks Found"
              )}
            </>
          )}
        />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default TaskDisplay;
