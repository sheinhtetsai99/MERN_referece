const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// another layer of abstraction to prevent duplicates. They mean the same thing
router.route("/").get(getGoals).post(setGoals);
// router.get("/", getGoals); // if url is '/' execute the getGoals function
// router.post("/", setGoals);

router.route("/:id").put(updateGoals).delete(deleteGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
