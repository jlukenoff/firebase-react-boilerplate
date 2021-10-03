import * as functions from "firebase-functions";
import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../", "public", "index.html"));
});

exports.app = functions.https.onRequest(app);
