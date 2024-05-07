const { Schema } = require("mongoose");

const artistSchema = new Schema(
  {
    artistId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
  },
  {
    toJson: {
      getters: true,
    },
    id: false,
  }
);

module.exports = artistSchema;
