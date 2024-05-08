const { User, Artwork } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    artwork: async (parent, {artworkId}) => {
      return Artwork.findOne({_id: artworkId})
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, address }) => {
      const user = await User.create({ username, email, password, address });
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

    addArtwork: async (parent, { title, imageURL, stock, description }) => {
      return Artwork.create({ title, imageURL, stock, description });
    },

    updateArtwork: async (parent, { title, imageURL, stock, description }) => {
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
    createArtist: async (parent, { userId, bio }, context) => {
      if (context.user) {
        return User.findOneandUpdate(
          { _id: userId },
          {
            $addToSet: { bio: bio },
          },

          { new: true, runValidators: true }
        );
      }
    },
  },
};

module.exports = resolvers;
