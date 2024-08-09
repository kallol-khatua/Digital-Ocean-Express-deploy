import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get("http://178.128.84.238/api/getname")
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
