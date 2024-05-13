// const { Error } = require("mongoose");
const { User, Artwork, Event } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
      s;
    },

    artwork: async (parent, { artworkId }) => {
      return Artwork.findOne({ _id: artworkId });
    },
    events: async () => {
      return Event.find();
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .populate("favorite_artists")
          .populate("events")
          .populate("artworks");
        return user;
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    addArtwork: async (
      parent,
      { title, stock, description, category, imageURL },
      context
    ) => {
      if (context.user) {
        const newArtwork = await Artwork.create({
          title: title,
          stock: stock,
          description: description,
          category: category,
          imageURL: imageURL,
          artist: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { artworks: newArtwork._id } }
        );

        return newArtwork;
      }

      throw AuthenticationError;
      ("You need to be logged in!");
    },

    updateArtwork: async (
      parent,
      { title, imageURL, stock, description },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return Artwork.findOneandUpdate(
        { _id: _id },
        {
          $addToSet: {
            titel: title,
            imageURL: imageURL,
            stock: stock,
            description: description,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeArtwork: async (parent, { artworkId }) => {
      return Artwork.findOneAndDelete({ _id: artworkId });
    },

    createArtist: async (parent, { name, bio }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: { artistData: { bio: bio, name: name } },
        },

        { new: true, runValidators: true }
      );
    },

    addEvent: async (parent, { name, location, date }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return Event.create({ name, location, date });
    },
    addArtisttoEvent: async (parent, { artistData, eventId }) => {
      if (context.user) {
        throw AuthenticationError;
      }
      return Event.findOneandUpdate(
        { _id: eventId },
        { $addToSet: { artist: artistData } },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;
