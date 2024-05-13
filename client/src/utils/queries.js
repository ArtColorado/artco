import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      username
      email
      name
      bio
      favorite_artists {
        username
      }
      events {
        name
        location
        date
      }
      artworks {
        title
        stock
        description
        category
        imageURL
      }
    }
  }
`;

export const QUERY_ARTISTS = gql`
  query Users {
    users {
      is_artist
      artistData {
        events {
          date
          location
          name
        }
      }
    }
  }
`;

export const QUERY_ARTWORK = gql`
  query Artwork($artworkId: ID!) {
    artwork(artworkId: $artworkId) {
      _id
      description
      imageURL
      stock
      title
      category
    }
  }
`;

export const QUERY_EVENT = gql`
  query Event($eventId: ID!) {
    event(eventId: $eventId) {
      artists {
        name
      }
      date
      location
      name
    }
  }
`;

export const QUERY_EVENTS = gql`
  query Events {
    events {
      artists {
        username
      }
      date
      location
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      username
      email
      name
      bio
      favorite_artists {
        username
      }
      events {
        name
        location
        date
      }
      artworks {
        title
        stock
        description
        category
        imageURL
      }
    }
  }
`;
