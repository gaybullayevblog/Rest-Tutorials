import './App.css';
import ListTodos from "./components/ListTodos";
import { useState, useEffect } from 'react';


import React from 'react'

function App() {
  return (
    <ListTodos />
  )
}

export default App


// class App extends Component{
//   state = {
//     todos:[]
//   };
//   componentDidMount(){
//     this.getTodos();
//   }
//   getTodos(){
//     axios
//     .get('http://127.0.0.1:8000/api/')
//     .then(res=>{
//       this.setState({todos:res.data});
//     })
//     .catch(err=>{
//       console.log(err);
//     })
//   }
//   render(){
//     return(
//       <div>
//         {this.state.todos.map(item=>(
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <p>{item.body}</p>
//           </div>
//         ))}
//         <ListTodos />
//       </div>

//     )
//   }
// }

// export default App;