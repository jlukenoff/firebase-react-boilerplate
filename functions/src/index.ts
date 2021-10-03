import * as functions from "firebase-functions";
import express from "express";

const app = express();

app.use(express.static("public"));

exports.app = functions.https.onRequest(app);
