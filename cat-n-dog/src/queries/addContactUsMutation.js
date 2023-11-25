import { gql } from "@apollo/client";

export default gql`
    #graphql
    mutation AddContactUs($name: String!, $email: String!, $message: String!) {
        addContactUs(name: $name, email: $email, message: $message) {
            id
            name
            email
            message
        }
    }
`;
