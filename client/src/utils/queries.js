import { gql } from "@apollo/client";

export const QUERY_ARTIST = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      email
      is_artist
      artistData {
        events {
          location
          date
          name
        }
        bio
        artWorks {
          _id
          description
          imageURL
          stock
          title
        }
      }
      address
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
        name
      }
      date
      location
      name
    }
  }
`;
