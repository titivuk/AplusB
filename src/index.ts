import bootstrap from "./server";

const port: number = Number.parseInt(process.env.PORT, 10) || 3333;
bootstrap(port);
