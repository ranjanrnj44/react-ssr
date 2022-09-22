import express from "express";
//file sys
import fs from "fs";
//path module
import path from "path";

//this module is required to use fetch
import fetch from "node-fetch-npm";

//to render react from our server side we need rct, rctDServer, app.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

//port
const PORT = 3001;
//app
const app = express();

// 1 route
app.get("/test", (req, res) => {
  res.json([{ id: 11, username: "Max" }]);
  // res.send("Hello World!");
});

//use async await to display the data, if not the content will not be there
app.use("^/$", async (req, res, next) => {
  //fetch and send
  let fetchedData = [];
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      fetchedData = data;
    });
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    //if err on reading the data handle here
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    //if no error,get the data and replace the mounting point from react app's file
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToPipeableStream(
          <App fetchedData={fetchedData} name="SSR" />
        )}</div>`
      )
    );
  });
});

// console.log(result);

//read our build's index html file

//server all the static files from build folder, provide path ..(1 leevel back)
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
