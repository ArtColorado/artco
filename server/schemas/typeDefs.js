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
    name: String!
}

type Event {
    name: String!
    location: String!
    date: String!
    artists: [User]
}

type User {
    _id: ID!
    username: String!
    address: String
    email: String!
    artistData: Artist
    is_artist: Boolean
    favorite_artists: [User]
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
    events: [Event]!
    event(eventId: ID!): Event

}

type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String): Auth
    login(email: String!, password: String!): Auth
   addArtwork( title: String!, imageURL: String, stock: Int!, description: String!, category: String): Artwork
   updateArtwork(title: String!, imageURL: String!, stock: Int!, description: String!): Artwork
   removeArtwork: Artwork
   createArtist(bio: String!, name: String!): User
   addEvent(name: String!, location: String!, date: String!): Event
   addArtisttoEvent(userId: ID, eventId: ID!): Event
   creditArtistWithArtwork(artworkId: ID!): User
}

`;

module.exports = typeDefs;
