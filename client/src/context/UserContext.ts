import { createContext } from "react";

type TContext = {
  id: String;
  name: String;
} | null;

export const UserContext: React.Context<TContext> = createContext<TContext>(
  null
);
