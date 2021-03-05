import { DocumentNode, gql } from "@apollo/client";

const UPDATE_USER_MUTATION: DocumentNode = gql`
  mutation updateUser($form: IUpdate!) {
    updateUser(form: $form) {
      id
      name
      surname
      phone
    }
  }
`;

export default UPDATE_USER_MUTATION;
