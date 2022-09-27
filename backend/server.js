const express = require("express");
const dotenv = require("dotenv").config(); // allows you to decouple environment variables
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");
connectDB();
// middleware so that body data can be parsed and accessed
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes")); // collection of apis

// gives more information
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
