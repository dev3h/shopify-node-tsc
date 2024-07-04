import express, { json, urlencoded } from "express";
import "dotenv/config";
import initRoutes from "./routes";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json()); 
app.use(json());
app.use(urlencoded({ extended: true }));

initRoutes(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
