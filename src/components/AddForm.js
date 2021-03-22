import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();

  const newToDo = (content) => {
    dispatch({ type: "NEW_TO_DO", payload: content });
  };

  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    if (!refContainer.current.value === "") {
      e.preventDefault();
      newToDo({ content: refContainer.current.value });
      refContainer.current.value = "";
    } else {
      alert("Write your todo!!");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" ref={refContainer} />
      </form>
    </div>
  );
};

export default AddForm;
