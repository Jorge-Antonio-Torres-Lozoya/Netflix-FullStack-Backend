

import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getMovies_catalog: [Movie_catalog]
    loginUser(email: String, password: String): User
    findByTitle(title: String): [Movie_catalog]
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
    createMovie_catalog(
      title: String
      description: String
      likes: Int
      image: String
      date_of_released: Int
    ): Movie_catalog
    updateLikes_catalog(_id: ID, likes: Int): Movie_catalog
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Movie_catalog {
    _id: ID
    title: String
    description: String
    likes: Int
    image: String
    date_of_released: Int
  }
`;

export { typeDefs };
