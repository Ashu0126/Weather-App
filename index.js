const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./views");

app.use(express.static(publicDirectoryPath));

app.set("views", viewsPath);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`Server is up on port ${port}.`));
