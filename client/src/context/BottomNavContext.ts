import React, { createContext } from "react";

type TContext = {
  setShowNav: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const BottomNavContext = createContext<TContext>({
  setShowNav: () => {},
});
