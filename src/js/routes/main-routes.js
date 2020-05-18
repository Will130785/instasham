const express = require("express");
let app = express();

app.set("views", "./src/js/views");

//ROOT
app.get("/", (req, res) => {
    res.render("root");
});

//INDEX
app.get("/posts", (req, res) => {
    res.render("posts")
});

//NEW
app.get("/posts/new", (req, res) => {
    res.render("new");
});

//CREATE
app.post("/posts", (req, res) => {
    res.send("This will redirect to the user feed once image has been posted");
});

//SHOW
app.get("/posts/:id", (req, res) => {
    res.render("show");
});

//EDIT
app.get("/posts/:id/edit", (req, res) => {
    res.render("edit");
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