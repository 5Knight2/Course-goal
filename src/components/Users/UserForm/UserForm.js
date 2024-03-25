import React, { useRef, useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);

  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const collegeInputRef=useRef();

  // const [isNameValid, setIsNameValid] = useState(false);
  // const [isAgeValid, setIsAgeValid] = useState(false);
  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  //   console.log(event.target.value.trim().length);
  //   if (event.target.value.trim().length == 0) setIsNameValid(false);
  //   else setIsNameValid(true);
  // };

  // const ageChengeHandler = (event) => {
  //   console.log(event.target.value);
  //   setAge(event.target.value);
  //   if (event.target.value <= 0) setIsAgeValid(false);
  //   else setIsAgeValid(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef)
const name=nameInputRef.current.value;
const age=ageInputRef.current.value;
const college=collegeInputRef.current.value;
    if (name.trim().length == 0) {
      props.Error("Name not valid");
      return;
    }
    if (age <= 0) {
      props.Error("Age not valid");
      return;
    }
    console.log("submit", age, name);
    let obj={age:age,name:name,college:college}
    props.addUser(obj)
    ageInputRef.current.value=0
    nameInputRef.current.value=''
    collegeInputRef.current.value=''
  };

  return (
    <React.Fragment>
      <form className="form-control" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameInputRef}  ></input>
        <label>Age</label>
        <input htmlFor="age" type="number" ref={ageInputRef} ></input>
        <label htmlFor="collegeName">College Name</label>
        <input id="collegeName" type="text" ref={collegeInputRef}  ></input>
        <br></br>
        <input id="age" style={{backgroundColor:"gray"}} type="submit"></input>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
