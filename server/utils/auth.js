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
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Token invalid");
    }

    return req;
  },

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
