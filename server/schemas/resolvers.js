const { Error } = require("mongoose");
const { User, Artwork, Event } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
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
  },

  Mutation: {
    addUser: async (parent, { username, email, password, is_artist }) => {
      const user = await User.create({ username, email, password, is_artist });
      const token = signToken(user);

      return { token, user, is_artist };
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
      { title, imageURL, stock, description, category },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const newArtwork = await Artwork.create({
        title,
        imageURL,
        stock,
        description,
        category,
      });

      const artworkId = newArtwork._id;

      const creditArtist = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          addToSet: {
            artworkId,
          },
        }
      );
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
      return Artwork.findOneandDelete({ _id: artworkId });
    },
    createArtist: async (parent, { name, bio }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return User.findOneandUpdate(
        { _id: context.user._id },
        {
          $addToSet: { artistData: { bio: bio, name: name } },
          is_artist: true,
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
