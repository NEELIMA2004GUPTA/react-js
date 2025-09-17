
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { useState,useEffect } from "react";

//? Exercise 1: Create a "Hello World!" React app with a simple component.
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div className='blank'>Hello  World!!!</div>
//     </>
//   )
// function App(){
//   return 
// }

//? Exercise 2: Create a counter app with increment/decrement/reset.


// function Counter(){
//   const[count,setCount]=useState(0)
//   return (
//     <div>
//       <p>Count:{count}</p>
//     <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
//     <button onClick={()=>setCount(prev=>prev-1)}>  Decrement</button>
//     <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   )
// }
// function App() {
//   return <Counter />;
// }

// ? Exercise 3: Render a list of tasks and mark completed ones differently.
// function Tasks(){
//   const task=[
//     { id: 1, title: "Learn React", completed: true },
//     { id: 2, title: "Practice Coding", completed: false },
//     { id: 3, title: "Build a Project", completed: true },
//     { id: 4, title: "Read Documentation", completed: false }
//   ];

//   return (
//     <div>
//       <p>Tasks</p>
//       <ul>
//         {task.map((t)=>(
//           <li key={t.id}
//           style={{
//             color: t.completed=== true ? "green" : "red"
//           }}>{t.title}</li>
//         )
//         )}
//       </ul>
//     </div>
//   )
// }

// function App(){
//   return <Tasks />
// }

//! Practice questions --
// ? Q1: First initialise nickname then click on button to display full name

// function NickToFull(){
//   const[nick,setNick]=useState("Niyati")
//   const fullname="Neelima gupta";
//   return (
//     <div>
//       <p>Name : {nick}</p>
//       <button onClick={()=>setNick(fullname)}>Reset Name</button>
//     </div>
//   )
// }
// function App() {
//   return <NickToFull />;
// }


//? Q2 : initialise the use state hook with the python full stack skills and display all skills using map method . make a onclick to change it into java full stack skills

// function ArrayMap() {
//   const [skills, setSkills] = useState(["Python", "Django", "SQL"]);
//   const javaFullStack = ["Java", "Spring Boot", "SQL"];

//   return (
//     <div>
//       <p>Skills Required:</p>
//       <ul>
//         {skills.map((skill, i) => (
//           <li key={i}>{skill}</li>
//         ))}
//       </ul>
//       <button onClick={() => setSkills(javaFullStack)}>
//         Switch to Java Full Stack
//       </button>
//     </div>
//   );
// }

// function App()
// {
//   return <ArrayMap />
// }


// ? Q3 :

// function Details(){
//   const [detail,setDetail]=useState({
//     "name": "neelima",
//     "course": "btech",
//     "branch": "cse",
//     "grade": "A"
//   })

//   const student2={
//     "name": "dhruv",
//     "course": "btech",
//     "branch": "IT",
//     "grade": "A"
//   }

//   return(
//     <div>
//       <p>Student Details:</p>
//       <ul>
//         {Object.entries(detail).map(([key,value],i)=>(
//           <li key={i}>
//             <strong>{key}:</strong>{value}
//           </li>
//         ))}
//       </ul>
//       <button onClick={()=>setDetail(student2)}>Student 2</button>
//     </div>
//   )
// }

// function App(){
//   return <Details />
// }

// ? Q4 : gender male/female click on the button to chnage the gender

// function Gender(){
//   const[gender,setGender]=useState("Male");
//   const Change=((prev)=>(prev==="Male" ? "Female":"Male"));
//   return (
//     <div>
//       <p>Gender:{gender}</p>
//       <button onClick={()=>setGender(Change)}>Toggle</button>
//     </div>
//   )
// }
// function App(){
//   return <Gender />
// }

//? Q5: fetch api and make a button to sort them.

// function FakeStoreApi() {
//   const [products, setProducts] = useState([]);
//   const [sorted, setSorted] = useState([]);

 
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setSorted(data); 
//       })
//       .catch((err) => console.error(err));
//   }, []);

  
//   const sortProducts = () => {
//     const sortedData = [...products].sort((a, b) =>
//       a.title.localeCompare(b.title)
//     );
//     setSorted(sortedData);
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {sorted.slice(0, 10).map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//       <button onClick={sortProducts}>Sort Products</button>
//     </div>
//   );
// }

// function App() {
//   return <FakeStoreApi />;
// }

// ? Q6: && conditional rendering
// function App({hasmessage}){
//   return(
//     <div>
//     <h1>Inbox:</h1>
//     {"reema" && <p> you have new message</p>} 
//     </div>
//   )
// }

// ? input name and alert message submmited name using controlled component

// function Form(){
//   const[name,setName]=useState("");
//   const handleClick=(e)=>{
//     e.preventDefault();
//     alert(`Submitted by : ${name}`)
//   }
//   return (
//     <form onSubmit={handleClick}>
//       <input type="text" value={name} onChange={(f)=>setName(f.target.value)} />
//       <button type="Submit">Submit</button>
//     </form>
//   )
// }

// function App(){
//   return <Form />
// }

// ? Handling multiple input fields-
// function Multiple(){
//   const [form,setForm]=useState(
//     {
//       username:"",
//       isSubscribed:false,
//       country:"india"
//     })

//   const handleChange=(e)=>{
//         const{name,type,checked,value}=e.target

//         setForm({...form,
//           [name]:type==="checkbox" ? checked : value
//         })
//     }

//   return (
//     <form>
//       <input type="text" name="username" value={form.username} onChange={handleChange} />
//       <label >
//         <input type="checkbox" name="isSubscribed" value={form.isSubscribed} onChange={handleChange} />Subscribe
//         </label>
//       <select name="country" value={form.country} onChange={handleChange}>
//         <option value="India">India</option>
//         <option value="USA">USA</option>
//         <option value="UK">UK</option>
//       </select>
//       <p>{JSON.stringify(form)}</p>
//     </form>
//   )
  
// }
// function App(){
//   return <Multiple />
// }

export default App
