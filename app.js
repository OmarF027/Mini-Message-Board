const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Per i form

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Errore interno del server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});