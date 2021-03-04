import { createContext } from "react";

type TContext = {
  id: string;
  name: string;
  surname: string | null;
  phone: string | null;
} | null;

export const UserContext: React.Context<TContext> = createContext<TContext>(
  null
);
