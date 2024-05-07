const typeDefs = `
type Artwork {
    _id: ID
    title: String
    image: String
    stock: Int
    description: String
}

type Artist {
    artistId: ID
    bio: String
    events: Array
    artWorks: Array
}



`;

module.exports = typeDefs;
