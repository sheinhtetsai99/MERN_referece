const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// another layer of abstraction to prevent duplicates. They mean the same thing
router.route("/").get(protect, getGoals).post(protect, setGoals);
// router.get("/", getGoals); // if url is '/' execute the getGoals function
// router.post("/", setGoals);

router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
