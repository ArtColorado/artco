const { Schema, model } = require("mongoose");

const artWorkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    stock: {
      type: Int,
      default: 1,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
      description: "description can not be more than 500 characters",
    },
    categorey: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
artWorkSchema.virtual("artWorkCount").get(function () {
  return this.title.length;
});

const ArtWork = model("artwork", artWorkSchema);

module.exports = ArtWork;
