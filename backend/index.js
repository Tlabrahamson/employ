const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job");

dotenv.config(); 

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/job", jobRoute);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
}
app.listen(port, () => console.log("Server is Up"));

app.get("/", (req, res) => {
  res.send("Hello");
});
