import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebaseConfigurations";

const SingleTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchSingleTask = async () => {
      const docRef = doc(db, "tasks", id);
      const fetchDoc = await getDoc(docRef);
      console.log(fetchDoc.data());

      setTask(fetchDoc.data());
    };

    fetchSingleTask();
  }, []);

  return <div>{task.text}</div>;
};

export default SingleTask;
