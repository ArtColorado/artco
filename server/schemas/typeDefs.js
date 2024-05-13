const typeDefs = `
type Artwork {
    _id: ID
    title: String!
    stock: String!
    description: String!
    category: String!
    imageURL: String!
    artist: User
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
    email: String!
    password: String!
    name: String
    bio: String
    favorite_artists: [User]
    events: [Event]
    artworks: [Artwork]
}

type Auth {
    token: ID
    user: User
}

type Query {
    users: [User]
    user(userId: ID!): User
    artwork(artworkId: ID!): Artwork
    events: [Event]!
    event(eventId: ID!): Event
    me: User

}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addArtwork( title: String!, stock: String!, description: String!, category: String!, imageURL: String!): Artwork
    updateArtwork(title: String!, imageURL: String!, stock: Int!, description: String!): Artwork
    removeArtwork: Artwork
    createArtist(bio: String, name: String): User
    addEvent(name: String!, location: String!, date: String!): Event
    addArtisttoEvent(userId: ID, eventId: ID!): Event
    creditArtistWithArtwork(artworkId: ID!): User
}

`;

module.exports = typeDefs;
