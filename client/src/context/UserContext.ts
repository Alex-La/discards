import { createContext } from "react";

type TContext = {
  id: String;
  name: String;
  surname: String | null;
  phone: String | null;
} | null;

export const UserContext: React.Context<TContext> = createContext<TContext>(
  null
);
