import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $is_artist: String!
  ) {
    addUser(username: $username, email: $email, password: $password, is_artist: $is_artist) {
      token
      user {
        _id
        username
        is_artist
      }
    }
  }
`;

export const Create_Artist = gql`
  mutation createArtist($userId: ID!, $bio: String!) {
    createArtist(profileId: $profileId, skill: $skill) {
      _id
      name
      bop
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        userType
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent($name: String!, $location: String!, $date: String!) {
    addEvent(name: $name, location: $location, date: $date) {
      date
      location
      name
    }
  }
`;

export const ADD_ARTIST_TO_EVENT = gql`
  mutation AddArtisttoEvent($eventId: ID!, $userId: ID) {
    addArtisttoEvent(eventId: $eventId, userId: $userId) {
      artists {
        artistData {
          name
        }
      }
    }
  }
`;

export const ADD_ARTWORK = gql `
mutation Mutation($title: String!, $stock: Int!, $description: String!, $imageUrl: String, $category: String) {
  addArtwork(title: $title, stock: $stock, description: $description, imageURL: $imageUrl, category: $category) {
    _id
    address
    artistData {
      name
    }
  }
}`