const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true, // add time stamp
  }
);

module.exports = mongoose.model("Goal", goalSchema); // name of database comes from "Goal", it is smallcase and pluralised
// export model called goals, which takes in the
// goal schema and exports it
