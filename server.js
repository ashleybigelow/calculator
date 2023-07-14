import express from "express";

const app = express();

app.use("/", express.static("./client"));

app.listen(3000, () => console.log("go to localhost:3000"));