const { Schema } = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
    maxLength: 1000,
    description: "bio can not be longer than 1,000 characters",
  },
});

module.exports = artistSchema;
