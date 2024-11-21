import express from "express";
import { usersRouter } from "./user_router.js";

const app = express();
const port = 3000;
app.use(express.json());

const loggerMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
};

app.use(loggerMiddleware);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
