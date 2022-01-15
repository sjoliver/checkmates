import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => { setData(() => res.data.message)})
      .catch((er) => console.log(er))
    }, [])

  return (
    <div className="App">
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;
