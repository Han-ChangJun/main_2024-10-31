import { useState } from "react";

function ConditionalRendering() {
  const condtion = false;
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <h2>ConditionalRendering.jsx</h2>
      {condtion ? <h2>참</h2> : <h2>거짓</h2>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </>
  );
}
export default ConditionalRendering;