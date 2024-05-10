import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $address: String!
  ) {
    addUser(name: $name, email: $email, password: $password, adress: $adress) {
      token
      user {
        _id
        name
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
