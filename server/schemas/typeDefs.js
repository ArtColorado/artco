const typeDefs = `
type Artwork {
    _id: ID!
    title: String!
    imageURL: String!
    stock: Int!
    description: String!
}

type Artist {
    _id: ID!
    bio: String!
    events: [Event!]!
    artWorks: [Artwork!]!
}

type Event {
    name: String
    location: String
    date: Date
    artists: [Artist]
}

type User {
    _id: ID
    username: String
    address: String
    email: String
    password: String
    favorite_artists: [Artist]
    events: [Events]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userId: ID!): User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String): Auth
    login(email: String!, password: String!): Auth
   addArtwork( title: String!, imageURL: String!, stock: Int!, description: String!) Artwork
   updateArtwork: ( title: String!, imageURL: String!, stock: Int!, description: String!) Artwork
   removeArtwork: Artwork
   createArtist: (userId: ID!, bio: String)
}

type Mutation {
   
    addProfile(username: String!, email: String!, password: String!, address: String): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }



`;

module.exports = typeDefs;
