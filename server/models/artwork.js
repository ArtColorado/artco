const { Schema, model } = require("mongoose");

const artworkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
      description: "description can not be more than 500 characters",
    },
    category: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    artist: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// artworkSchema.virtual("artworkCount").get(function () {
//   return this.title.length;
// });

const Artwork = model("artworks", artworkSchema);

module.exports = Artwork;
