const express = require("express");
let app = express();

//ROOT
app.get("/", (req, res) => {
    res.send("Welcome to the login/Register page root page");
});

//INDEX
app.get("/posts", (req, res) => {
    res.send("This will be the user feed and will display posts from users they follow");
});

//NEW
app.get("/posts/new", (req, res) => {
    res.send("This will be the page to post a new image");
});

//CREATE
app.post("/posts", (req, res) => {
    res.send("This will redirect to the user feed once image has been posted");
});

//SHOW
app.get("/posts/:id", (req, res) => {
    res.send("This will be an individual post and its comments");
});

//EDIT
app.get("/posts/:id/edit", (req, res) => {
    res.send("This will be where you can edit your post");
});

//UPDATE
app.put("/posts/:id", (req, res) => {
    res.send("You will be returned to the post once you have updated");
});

//DESTROY
app.delete("/posts", (req, res) => {
    res.send("You will be returned to the posts page once you have deleted a post");
});

//EXPORT ROUTES
module.exports = app;