import express from "express";

import { product, sum } from "./math";
import { validateOperands } from "./operand.validator";

const app = express();

app.use("/math", (req, res, next) => {
  validateOperands(req.query.x, req.query.y);
  next();
});

app.get("/math/sum", (req, res) => {
  const x: string = req.query.x as string;
  const y: string = req.query.y as string;

  res.send({ result: sum(x, y).toString() });
});

app.get("/math/product", (req, res) => {
  const x: string = req.query.x as string;
  const y: string = req.query.y as string;

  res.send({ result: product(x, y).toString() });
});

app.use(function (err, req, res, next) {
  console.warn(err.message);
  res.status(500).send("Failed to make calculations");
});

export default function bootstrap(port: number) {
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}
