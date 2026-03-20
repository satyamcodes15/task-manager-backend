const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// CREATE task
router.post("/", async (req, res) => {
    const task = new Task({ title: req.body.title });
    const saved = await task.save();
    res.json(saved);
});

// TOGGLE task
router.put("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.status = !task.status;
    await task.save();
    res.json(task);
});

// DELETE task
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;