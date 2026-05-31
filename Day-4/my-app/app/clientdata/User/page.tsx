// runs on client
//client side components
//using usestate and useeffect

"use client";
import {useState,useEffect} from "react";
function UserPages(){
    const [users,setUsers]=useState([]);
    async function getAllUsers(){
       const response = await fetch("https://dummyjson.com/users");
       const data = await response.json();
       console.log("client data:",data);
       setUsers(data.users);
    }
    useEffect(()=>{
        getAllUsers();
    },[]);
    return(
        <>
        <h1>Client Users:</h1>
        {
            users.map((user: {id: number, firstName: string, lastName: string, email: string, phone: string}) => (
                <div key={user.id} style={{border:"1px solid #ccc", borderRadius:"8px", padding:"12px", margin:"10px", width:"300px", display:"inline-block"}}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>📧 {user.email}</p>
                    <p>📞 {user.phone}</p>
                </div>
            ))
        }
        </>
    )
}
export default UserPages;