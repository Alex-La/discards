import { DocumentNode, gql } from "@apollo/client";

const LOGIN_MUTATION: DocumentNode = gql`
  mutation login($form: IUser!) {
    login(form: $form) {
      token
      user {
        id
        name
      }
    }
  }
`;

export default LOGIN_MUTATION;
