const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Artist = require("./artist");

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
      match: [/.+@.+\..+/, "Must be valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    artistData: Artist,
    favorite_artists: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "events",
      },
    ],
    artworks: [
      {
        type: Schema.Types.ObjectId,
        ref: "artworks",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("users", userSchema);

module.exports = User;
