import axios from "axios";
import React, { useState } from "react";

const Main = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value });

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data)

    axios.post('http://localhost:5500/data', {
        name,
        age,
    }).then((response)=>{
        alert("Data saved successfully")
    }).catch((err)=>{
        alert("Error saving data")
        // console.log(err)
    })

    setData({name: "", age: ""});
    // console.log("Submitted");
  };

  const {name, age} = data;
  const increment = () => {
    setCount((pre)=>pre+10)
  }
  const decrement = () => {
    setCount((pre)=>pre-3)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={handleChange}
          name="name"
          value={name}
        />
        <input
          type="text"
          placeholder="Enter your age..."
          onChange={handleChange}
          name="age"
          value={age}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
      {count}
      <br />
        <button onClick={increment}>Add 10</button>
        <button onClick={decrement}>Subtract 3</button>
      </div>
    </div>
  );
};

export default Main;
