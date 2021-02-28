import { DocumentNode, gql } from "@apollo/client";

const REG_MUTATION: DocumentNode = gql`
  mutation registration($form: IUser!) {
    registration(form: $form)
  }
`;

export default REG_MUTATION;
