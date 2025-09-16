import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Spinner() {
  return <div style={{ textAlign: "center" }}>Loading...</div>;
}
function UsersList(){
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)

  useEffect(()=>{
    const fetchUsers=async ()=>{
      try{
        const response =await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok) throw new Error("Network or server disabled ")
        const data = await response.json()
        setUsers(data)
      }
      catch (err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
    };
    fetchUsers()  },[])


 if (loading) return <Spinner />;
 if(error) return <p>Error:{error}</p>
 return (
    <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <strong>{user.name}</strong> <br />
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App(){
  return <UsersList />
}


export default App

