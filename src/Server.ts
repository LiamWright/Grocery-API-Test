import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils/Index";
import middleware from "./middleware";
import routes from "./services/Produce/Routes";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
