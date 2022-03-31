import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebaseConfigurations";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksRef = collection(db, "tasks");
      const fetchTasks = await getDocs(tasksRef);

      const allTasks = fetchTasks.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setTasks(allTasks);
    };

    getTasks();
  }, []);

  const changeStatus = async (id, completed) => {
    const docRef = doc(db, "tasks", id);
    await setDoc(docRef, { completed: !completed }, { merge: true });
    alert("completed changed");
  };

  const deleteTask = async (id) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef);

    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "1rem" }}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p className={task.data.completed ? "completed" : "incomplete"}>
              {task.data.text}
            </p>

            <button onClick={() => changeStatus(task.id, task.data.completed)}>
              change status
            </button>

            <Link to={`/${task.id}`}>go to task</Link>

            <button onClick={() => deleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
