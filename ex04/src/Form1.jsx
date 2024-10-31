import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const inputName = (e) => {
    console.log("함수호출");
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <>
      <h2>Form1.jsx</h2>
      이름:
      <br></br>
      <input type="text" onChange={inputName} />
      <br></br>
      입력한이름:{name}
      <br></br>
      나이:{""}
      <br></br>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br></br>
      입력한나이:{age}
    </>
  );
}
export default Form1;
