import axios from "axios";
import React, { useEffect, useState } from "react";

const DummyRegister = () => {
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    data: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    axios
      .post("http://localhost:5500/employees", {
        name,
        age,
      })
      .then((response) => {
        console.log(response);
        // alert("Data saved successfully")
      });
  };

  const { name, age, data } = inputData;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5500/employees");
      console.log(data.data);
      setInputData({ ...inputData, data: data.data });
    };

    fetchData();
  }, []);

  const handleClick = async(id) => {
    console.log(id)
    let FinalData = await axios.get(`http://localhost:5500/employees/${id}`)
    console.log(FinalData.data)

  }

  console.log(inputData.data);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={handleInputChange}
          name="name"
          value={name}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          placeholder="Enter your Age..."
          onChange={handleInputChange}
          name="age"
          value={age}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {inputData.data.map((m) => {
          return (
            <p key={m._id} onClick={()=>handleClick(m._id)}>
              {m.name}
            </p>
          ); // update the key to match the _id field in your database, if you have one.  Otherwise, use the index as the key.  Also, you should sanitize the inputs to prevent potential XSS attacks.  For example, use `dangerouslySetInnerHTML={{ __html: m.name }}` if you're displaying user-generated content.  Also, consider using a pagination or infinite scrolling feature if the list is very large.  Lastly, you should handle the case where the API call fails gracefully, showing an error message or retrying the request.  Also, consider using a loading state or skeleton loading UI while the data is being fetched.  Finally, consider implementing proper error handling for the API call, such as handling network errors, server errors, and timeouts.  Also, consider implementing rate limiting or caching to improve performance and reduce
        })}
      </div>
    </div>
  );
};

export default DummyRegister;
