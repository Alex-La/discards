import React, { useEffect, useContext } from "react";

import { BottomNavContext } from "../context/BottomNavContext";

const Main: React.FC = () => {
  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return <div style={{ padding: 20, marginBottom: 70 }}></div>;
};

export default Main;
