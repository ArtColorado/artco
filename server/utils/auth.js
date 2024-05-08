const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const expiration = "8h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, {
      expiresIn: expiration,
    });
  },
};
