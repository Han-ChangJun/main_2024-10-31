import express from "express";

const app = express();
app.use(express.json());
app.listen(8000, () => {
  console.log("서버시작!");
});
app.get("/", () => {
  console.log("기본주소 요청");
});
//hello get 요청이 오면 콘솔에 hello 주소 요청 출력
app.get("/hello", () => {
  console.log("hello 주소요청");
});
app.get("/qs", (req) => {
  console.log(req.query);
  const { p1, p2 } = req.query;
  console.log(`p1: ${p1},p2:${p2}`);
});

//board/10 , product/6
app.get("/:id", (req) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
});
app.post("/hello", () => {
  console.log("hello post호출 요청");
});
