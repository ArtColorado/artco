const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const secret = `${process.env.SECRET}`;
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
  contextProvider: async ({ req }) => {
    const token = req.headers.authorization?.trim().split(" ").pop();
    if (!token) {
      return {};
    }
    try {
      const payload = await jwt.verify(token, secret);
      return { user: payload };
    } catch {
      return {};
    }
  },
};
