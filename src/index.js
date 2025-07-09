require("dotenv").config({
  path: require("path").resolve(__dirname, "../config.env"),
});
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;
const auth = require("./routes/auth.routes");
const tokenManager = require("./utils/tokenManager");
const contact = require("./routes/contact.routes");
const user = require("./routes/user.routes");

app.use(express.json());

// Default Route GET (/)
app.get("/", (req, res) => {
  console.log("Default Route called");

  res.send("Hello in nodejs-app-starter");
});

connectDB();

app.use("/api/auth", auth);
app.use("/api/contact", contact);
app.use("/api/user", user);


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
