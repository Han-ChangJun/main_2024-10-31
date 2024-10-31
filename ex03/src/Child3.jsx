function Child3(props) {
  const { p1, p2, p3, student } = props;
  return (
    <>
      <h2> Child3.jsx</h2>
      <h3>학생이름:{student.name}</h3>
      <h3>학생나이:{student.age}</h3>
    </>
  );
}
export default Child3;
