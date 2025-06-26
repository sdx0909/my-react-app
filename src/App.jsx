import { useEffect, useState } from "react";
import "./App.css";
import CSSCompo from "./components/CSSCompo";

function App() {
  const [title, setTitle] = useState("");

  const getData = async () => {
    // promise-based-response
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log(response);

    // json-based-object
    const task = await response.json();

    console.log(task);
    setTitle(task.title);
  };

  // useEffect called initially []
  useEffect(() => {
    getData();
  }, []);

  return <h1>{title}</h1>;
}

export default App;
