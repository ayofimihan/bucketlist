import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebaseConfigurations";

const NewTask = () => {
  const [text, setText] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const tasksCollectionRef = collection(db, "tasks");
    const saveDoc = await addDoc(tasksCollectionRef, {
      text,
      completed: false,
    });

    console.log(saveDoc.id);
    setText("");
    alert("task added");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default NewTask;
