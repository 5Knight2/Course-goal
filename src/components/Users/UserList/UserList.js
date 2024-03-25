import React from "react";
import './UserList.css'
import UserListItem from '../UserListItem/UserListItem'

const UserList=(props)=>{

const data=props.items.map((element)=>{return (<UserListItem key={element.id} age={element.age} name={element.name} college={element.college} ></UserListItem>)})

return(
    <div className="goal-list"><ul>
{data}
</ul>
    </div>
)
}

export default UserList;