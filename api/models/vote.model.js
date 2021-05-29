const mongoose = require("mongoose");

const VoteSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    type: {
      type: Boolean,
      required: true,
      // 0: down vote
      // 1: up vote
    },
    _post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vote", VoteSchema);
