/*function Child2({ p1, p2, p3 }) {

  
  return (
    <>
      <h2>Child2.jsx</h2>
      <h2>{p1}</h2>
      <h2>{p2}</h2>
      <h2>{p3}</h2>
    </>
  );
  export default Child2;
}*/

function Child2(props) {
  console.log(props);
  const { p1, p2, p3 } = props;
  return (
    <>
      <h2>Child2.jsx</h2>
    </>
  );
}
export default Child2;
