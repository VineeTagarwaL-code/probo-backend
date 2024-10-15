import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "./config/env";
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

function start_server() {
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
}
(() => {
  start_server();
})();
