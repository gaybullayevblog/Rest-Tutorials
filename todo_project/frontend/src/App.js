import React, { Component } from 'react'
import './App.css';

const list = [
  {
    "id": 1,
    "title": "Men bugun django darslarini ko'rishim kk",
    "body": "Django darslari men uchun juda muhim hisoblanadi"
  },
  {
    "id": 2,
    "title": "Bugun Diqqat kitobini o'qib chiqishim kerak",
    "body": "Diqqat kitobi menga judayam yoqadi"
  },
  {
    "id": 3,
    "title": "Bu shunchaki sarlavha",
    "body": "Bu shunchaki sarlavhaga izoh"
  },
   {
        "id": 4,
        "title": "Sarlavha",
        "body": "Bu shunchaki matn"
   }
]

class App extends Component{
  constructor(props){
    super(props);
    this.state={ list };
  }
  render(){
    return(
      <div>
        {this.state.list.map(item=>(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
