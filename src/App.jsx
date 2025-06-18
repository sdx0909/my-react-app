import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  const users = [
    { id: 1, name: "Nathan", role: "Web Developer" },
    { id: 2, name: "John", role: "Web Designer" },
    { id: 3, name: "Jane", role: "Team Leader" },
  ];

  return (
    <>
      <p>The currently active user list:</p>
      <ul>
        {users.map((user, index) => {
          console.log(`index > ${index}`);
          return (
            <li key={index}>
              {user.name} as the {user.role}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
