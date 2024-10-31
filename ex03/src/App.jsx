import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fun1 from "./Comp1";
import Comp1 from "./Comp1";
import Child from "./Child";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>app.jsx</h2>
      <Child p1="안녕하세요" />
      <Child1 p2="반가워요 잘있어요" />
      <Child2 p1="hello" p2={100} p3="반가워요" />
      <Child3
        p1="안녕"
        p2={1000}
        p3="hi"
        student={{ name: "학생1", age: 20 }}
      />
      {/* <Comp1 />*/}
    </>
  );
}

export default App;
