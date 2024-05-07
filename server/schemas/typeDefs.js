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



`;

module.exports = typeDefs;
