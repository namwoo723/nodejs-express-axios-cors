// server.js

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORS 설정을 위한 헤더
app.use(cors({
  origin: "http://127.0.0.1:5500",
}));

app.use(express.text());

let data = { message: "여러분 화이팅!" }

// GET 요청 처리
app.get("/", (req, res) => {
  res.json(data);
})

// POST 요청 처리
app.post("/", (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
})

// PUT 요청 처리
app.put("/", (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
})

// DELETE 요청 처리
app.delete("/", (req, res) => {
  data = {};
  res.send("데이터가 삭제되었습니다")
})

app.listen(PORT, () => {
  console.log(`Express 서버 싱행: http://localhost:${PORT}`)
})