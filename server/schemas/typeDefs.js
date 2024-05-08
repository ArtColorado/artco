const typeDefs = `
type Artwork {
    _id: ID!
    title: String!
    imageURL: String!
    stock: Int!
    description: String!
    artist: User!
}

type Artist {
    bio: String!
    events: [Event]
    artWorks: [Artwork]
}

type Event {
    name: String!
    location: String!
    date: Date!
    artists: [Artist]
}

type User {
    _id: ID!
    username: String!
    address: String
    email: String!
    password: String!
    artistData: Artist
    favorite_artists: [Artist]
    events: [Event]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]!
    user(userId: ID!): User
    artwork(artworkId: ID!): Artwork

}

type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String): Auth
    login(email: String!, password: String!): Auth
   addArtwork( title: String!, imageURL: String!, stock: Int!, description: String!) Artwork
   updateArtwork: ( title: String!, imageURL: String!, stock: Int!, description: String!) Artwork
   removeArtwork: Artwork
   createArtist: (bio: String): User
}

`;

module.exports = typeDefs;
