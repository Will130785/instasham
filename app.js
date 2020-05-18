const express = require("express");
let app = express();

//IMPORT ROUTES
const postRoutes = require("./src/js/routes/main-routes");


//SET TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", "./src/js/views");

//SERVE STATIC FILES FROM
app.use(express.static(__dirname + "/public"));
console.log(__dirname);

//USE ROUTES
app.use(postRoutes);

//Create server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});