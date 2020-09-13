import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils/Index";
import middleware from "./middleware";
import routes from "./services/Produce/Routes";
import mongoose from "mongoose";

const mongoUrl = 'mongodb://localhost:27017/ProductDb'
const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

try {
    mongoose.connect(mongoUrl, {useNewUrlParser: true});
}
catch(e){
    console.log("Could not connect to MongoDB");
}


const server = http.createServer(router);

export = server;


