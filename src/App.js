import "./styles.css";
import Header from "./Header/Header.js";
import {useState} from "react";

export default function App() {
  const initialTasks = [
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ];

  const [tasks, setTasks] = useState(
    initialTasks.map((name) => ({ name, completed: false }))
  );

  const handleTaskClick = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveClick = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="App">
      <Header /><hr />
      <div >
        {tasks.length !== 0 ? (
        <ul>
        { tasks.map((task, index) => (
            <li key={index} >
              <button 
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  background: "none",
                  border: "none",
                  cursor: "pointer" }}
                onClick={() => handleTaskClick(index)}
              >
                 {task.name}
              </button>
            </li>
          ))}
        </ul>
        ) 
        : (<h2 >"Nothing to do buddy.Sleep!"</h2> )
      }
      </div>
      <div className="remove">
      {tasks.length !== 0 
      ? (<button onClick={handleRemoveClick}>Remove Completed</button>)
      : ""
      }
      </div>
   </div>
  );
}