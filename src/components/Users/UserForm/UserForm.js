import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value.trim().length);
    if (event.target.value.trim().length == 0) setIsNameValid(false);
    else setIsNameValid(true);
  };

  const ageChengeHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
    if (event.target.value <= 0) setIsAgeValid(false);
    else setIsAgeValid(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid) {
      alert("Name not valid");
      return;
    }
    if (!isAgeValid) {
      alert("Age not valid");
      return;
    }
    console.log("submit", age, name);
    let obj={age:age,name:name}
    props.addUser(obj)
  };

  return (
    <div>
      <form className="form-control" onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" value={name} onChange={nameChangeHandler}></input>
        <label>Age</label>
        <input type="number" value={age} onChange={ageChengeHandler}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default UserForm;
