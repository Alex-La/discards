import React, { useEffect, useContext } from "react";

import { BottomNavContext } from "../context/BottomNavContext";
import SearchInput from "../Components/SearchInput";

const Main: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return (
    <div
      style={{
        padding: 20,
        marginBottom: 70,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SearchInput />
    </div>
  );
};

export default Main;
