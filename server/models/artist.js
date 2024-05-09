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
    description: "bio can not be lnger than 1,000 characters",
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],
  artWorks: [
    {
      type: Schema.Types.ObjectId,
      ref: "artWork",
    },
  ],
});

module.exports = artistSchema;
