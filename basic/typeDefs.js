import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    category: Category!  # Changed to lowercase to match your data model
  }

  type Category {
    id: ID!
    name: String!
    stock: Stock!  # Changed to lowercase to match resolver
  }

  type Stock {
    id: ID!
    quantity: Int!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
`;

export default typeDefs;