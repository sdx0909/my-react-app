import { useState } from "react";

// passing the state in props for as prop to child-component
// that makes child component to change the state.
function ParentComponent() {
  const [name, setName] = useState("John");
  return (
    <>
      <ChildComponent name={name} setName={setName} />
    </>
  );
}
function ChildComponent(props) {
  return (
    <>
      <div>Name: {props.name}</div>
      <button onClick={() => props.setName("Snow")}>Change</button>
    </>
  );
}

export default ParentComponent;
