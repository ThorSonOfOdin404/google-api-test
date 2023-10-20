import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req: any, res: any) => {
  res.json({ msg: "Hi there from the server" });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
