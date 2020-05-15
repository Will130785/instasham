const express = require("express");
let app = express();

//IMPORT ROUTES
const postRoutes = require("./routes/main-routes");

//USE ROUTES
app.use(postRoutes);

//Create server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});