import express from "express";
import { ParamsDictionary } from "express-serve-static-core";

import { product, sum } from "./math";
import { validateOperands } from "./operand.validator";

const app = express();

app.use("/math", (req, res, next) => {
  validateOperands(req.query.x, req.query.y);
  next();
});

type QueryParams = {
  x: number | string;
  y: number | string;
};

app.get<ParamsDictionary, any, any, QueryParams>("/math/sum", (req, res) => {
  res.send({ result: sum(req.query.x, req.query.y).toString() });
});

app.get<ParamsDictionary, any, any, QueryParams>("/math/product", (req, res) => {
  res.send({ result: product(req.query.x, req.query.y).toString() });
});

app.use(function (err, req, res, next) {
  console.warn(err.message);
  res.status(500).send("Failed to make calculations");
});

export default function bootstrap(port: number) {
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
}
