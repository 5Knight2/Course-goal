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
      props.Error("Name not valid");
      return;
    }
    if (!isAgeValid) {
      props.Error("Age not valid");
      return;
    }
    console.log("submit", age, name);
    let obj={age:age,name:name}
    props.addUser(obj)
  };

  return (
    <React.Fragment>
      <form className="form-control" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={nameChangeHandler}></input>
        <label>Age</label>
        <input htmlFor="age" type="number" value={age} onChange={ageChengeHandler}></input>
        <br></br>
        <input id="age" style={{backgroundColor:"gray"}} type="submit"></input>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
