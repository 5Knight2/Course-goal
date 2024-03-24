import React, { useState } from 'react';

import UserList from './components/Users/UserList/UserList';
import UserForm from './components/Users/UserForm/UserForm';
import './App.css';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

const App = () => {
  

const [user,setUser]=useState([{name:"Pratik",age:25,id:1}])
const [modal,setModal]=useState(<></>)

const modalHandler=()=>{
  console.log('handled')
  setModal(<></>)
}

const addUserHandler=(obj)=>{
  setUser((prevUser)=>{
    const latestUser=[...prevUser]
    obj.id=Math.random().toString();
    latestUser.push(obj);
    console.log(latestUser)
    return latestUser;

  })
}
const errorHandler=(msg)=>{
  console.log('oh')
  setModal(<ErrorModal message={msg} modalHandler={modalHandler} ></ErrorModal>)
}

  return (
    <div>
      {modal}
      <section id="user-form">
        <UserForm addUser={addUserHandler} Error={errorHandler}/>
      </section>
      <section id="users">
       <UserList items={user}></UserList>
        
      </section>
    </div>
  );
};

export default App;



















// import React, { useState } from 'react';

// import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
// import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
// import './App.css';

// const App = () => {
//   const [courseGoals, setCourseGoals] = useState([
//     { text: 'Do all exercises!', id: 'g1' },
//     { text: 'Finish the course!', id: 'g2' }
//   ]);

//   const addGoalHandler = enteredText => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = [...prevGoals];
//       updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
//       return updatedGoals;
//     });
//   };

//   const deleteItemHandler = goalId => {
//     setCourseGoals(prevGoals => {
//       const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
//       return updatedGoals;
//     });
//   };

//   let content = (
//     <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//   );

//   if (courseGoals.length > 0) {
//     content = (
//       <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
//     );
//   }

//   return (
//     <div>
//       <section id="goal-form">
//         <CourseInput onAddGoal={addGoalHandler} />
//       </section>
//       <section id="goals">
//         {content}
//         {/* {courseGoals.length > 0 && (
//           <CourseGoalList
//             items={courseGoals}
//             onDeleteItem={deleteItemHandler}
//           />
//         ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
//         } */}
//       </section>
//     </div>
//   );
// };

// export default App;
