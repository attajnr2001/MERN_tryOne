const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    profileImageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // (createdAt, updatedAt)
  }
);

module.exports = mongoose.model("User", UserSchema);
