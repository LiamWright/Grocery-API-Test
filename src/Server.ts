import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils/Index";
import middleware from "./middleware";
import routes from "./services/Produce/Routes";
 
const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
const server = http.createServer(router);

export = server;


