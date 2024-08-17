const express = require("express");
const path = require("path");
const multer = require("multer");
const indexRouter = require("./routes/index");

const app = express();
const PORT = 3000;
const upload = multer({ dest: "images/" });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("/images"));

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

// Use the router for handling routes
app.use("/", indexRouter);

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
