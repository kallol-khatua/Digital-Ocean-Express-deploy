import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  // const getname = async () => {
  //   let response = await axios.get("http://localhost:8080/api/getname");
  //   console.log(response);
  // };
  useEffect(() => {
    // getname();
    axios
      .get("http://localhost:8080/api/getname")
      .then((response) => setName(response.data.name))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>My website</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;
