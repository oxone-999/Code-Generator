import * as React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Card(props) {
  const onInputChange = (event) => {
    props.setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.setEmployee([
      ...props.employee,
      { id: uuidv4(), name: props.input, completed: false },
    ]);
    props.setInput(""); 
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={props.input}
          required
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}
