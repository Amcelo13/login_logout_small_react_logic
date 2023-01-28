import React,{useState} from 'react'
import './App.css';

//Local Storage - To store the data on user's computer locally.
/* localStorage.setItem("Name",item)                     //ALWAYS IN KEY VALUE PAIRS
/* localStorage.getItem("Name")
/* localStorage.removeItem("Name")
/* localStorage.clear("Name")
*/
export default function App() {

  const [name,setName] =useState('')
  const [email,setemail] = useState('')
  const [password,setPassword] = useState('')
  const [isloggedIn,setIsloggedIn] = useState(false)

  const login = (e)=>{
    const userData = {   //make an object with these keys below and their data in it.
      name,
      email,
      password
    }
    localStorage.setItem('token-info',JSON.stringify(userData))         //setting the keys with their values from their states in localStorage
    setIsloggedIn(true)         //And logged in now it will now activate the line -------------46
    setName('')       
    setemail('')
    setPassword('')
  }

  const logout=()=>{
    localStorage.removeItem('token-info')
    setIsloggedIn(false)
  }
  return (
    <div>
      <h1>This is local storage login logout</h1>
      {/* If not logged in/(false) just create a form */}
      {!isloggedIn ? (   
        <form>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" value={name} />
          <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Email" value={email} />
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" value={password} />
          <button onClick={login}>Login</button>
        </form>
      ) : (
        <>
        <h1>User is Logged In</h1>
        <button onClick={logout}>  Logout</button>
        </>
      )}
    </div>
  )
}

// export default function App() {
//   const [name,setName] = useState('')
//   const [password,setPassword] = useState('')

//   const handle=()=>{                                  //Storing in LocalStorage
//     localStorage.setItem('Name',name)
//     localStorage.setItem('Password',password)
//   }
//   const remove=()=>{                                   //Removing from LocalStorage
//     localStorage.removeItem('Name')
//     localStorage.removeItem('Password')
//   }

//   return (
//     <div>
//       <h1>Enter your name : </h1>
//       <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>

//       <h1>Password of the user : </h1>
//       <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

//       <button onClick={handle}>Done</button>
  
//                             {/* If values there showing/GETTING  them */}
//       <div>
//          {localStorage.getItem('Name') && (<div>Name  : <p>{localStorage.getItem('Name')}</p></div>)}     
//          {localStorage.getItem('Password') && (<div>Password  : <p>{localStorage.getItem('Password')}</p></div>)}       
//       </div>

//       <div>
//         <button onClick={remove}>Remove</button>
//       </div>

//     </div>
//   )
// }

