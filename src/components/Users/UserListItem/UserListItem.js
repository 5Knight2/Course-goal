
import React from "react";
import './UserListItem.css'

const UserListItem=(props)=>{
    return(<div className="goal-item">
        <h3>{props.name} ({props.age}) from {props.college}</h3>
        </div>)
}

export default UserListItem;