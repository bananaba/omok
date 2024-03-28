import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const __dirname = "../client/dist";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
