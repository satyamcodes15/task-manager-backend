require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://satyamkachhi65_db_user:DATABASEUSEBYSATYAM@cluster0.peixcxn.mongodb.net/taskmanager?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));
app.get("/", (req, res) => {
    res.send("API Running");
});
app.use("/tasks", require("./routes/taskRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});