//mongoose required
const { Schema, model } = require("mongoose");

const useSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});
