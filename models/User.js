//mongoose required
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Email address must be matched!"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // In this case, we're overriding JSON's default behaviour and specifying that virtuals should be included in our response.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friend-Count").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("User", userSchema);

module.exports = User;
