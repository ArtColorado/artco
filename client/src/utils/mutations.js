import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Create_Artist = gql`
  mutation createArtist($userId: ID!, $bio: String!) {
    createArtist(profileId: $profileId, skill: $skill) {
      _id
      name
      bio
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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

export const ADD_ARTWORK = gql`
  mutation addArtwork(
    $title: String!
    $imageURL: String
    $stock: Int!
    $description: String!
    $category: String
  ) {
    addArtwork(
      title: $title
      imageURL: $imageURL
      stock: $stock
      description: $description
      category: $category
    ) {
      artwork {
        title
        imageURL
        stock
        description
        category
      }
    }
  }
`;
