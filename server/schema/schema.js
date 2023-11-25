const typeDefs = `#graphql
    type ContactUs {
        id: ID!
        name: String!
        email: String!
        message: String!
    }

    type Query {
        getContactUs(id: ID!): ContactUs
    }

    type Mutation {
        addContactUs(name: String!, email: String!, message: String!): ContactUs
    }
`;

module.exports = typeDefs;
