//In client sode componenet, we are using useeffect and usestate
// to store the data ans request the data
// In server Side component, we can still make a network request without 
// using state and effect

async function getAllUsers(){
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log("server data:",data);
    return data.users;
}

async function UserPages(){
const users = await getAllUsers();
return(
    <>
    <h1>Server Users:</h1>
    {
        users.map((user: {id: number, firstName: string}) => (
            <div key={user.id}>
                <h2>{user.firstName}</h2>
            </div>
        ))
    }

    </>
)
}
export default UserPages;