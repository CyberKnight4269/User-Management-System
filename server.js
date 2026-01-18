if (!process.env.VERCEL) {
  require("dotenv").config();
}

const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");

const authRoute = require("./routes/authRoute.js");
const userRoute = require("./routes/userRoute.js");
const superAdminRoute = require("./routes/superAdminRoute.js");

const app = express();

app.use(express.json());
app.use(cors());

// ✅ Connect DB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("User Management System API is running!");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", superAdminRoute);

// ✅ Local run only
const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// ✅ For Vercel
module.exports = app;
