const asyncHandler = require("express-async-handler"); // to make the async database calls more consise https://stackoverflow.com/questions/56973265/what-does-express-async-handler-do

// @desc Get goals
// @route GET /api/goals
// @access Private

const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc set goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  //   console.log(req.body.message); //json keyvalue pair
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc update goals
// @route PUT /api/goals
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  // query db, see if entry exists
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // find by id, get request body and then update
  });

  res.status(200).json(updatedGoal);
});

// @desc Get goals
// @route DELETE /api/goals
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  // query db, see if entry exists
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
