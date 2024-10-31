import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";

function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    setCount(count + 1);
  };
  const down = () => {
    setCount(count - 1);
  };

  return (
    <>
      <>
        <h2>count값: {count}</h2>
        {/*클릭하면 count 값을 하나 올리는 Up함수호출*/}
        <button onClick={up}>UP</button>
        <button onClick={down}>down</button>
        <Form1 />;
        <Form2 />;
      </>
    </>
  );
}

export default App;
