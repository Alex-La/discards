import React, { useEffect, useContext, useState } from "react";

import { BottomNavContext } from "../context/BottomNavContext";
import SearchInput from "../Components/SearchInput";
import BottomModal from "../Components/Main/BottomModal";
import { Add } from "../Icons";

const Main: React.FC = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const toggleDrawer = (state: boolean) => setDrawerState(state);

  const { setShowNav } = useContext(BottomNavContext);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return (
    <div
      style={{
        padding: 20,
        marginBottom: 70,
        position: "absolute",
        height: "auto",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <SearchInput />

      <div
        onClick={() => toggleDrawer(true)}
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn-circle"
          style={{
            width: 45,
            height: 45,
            backgroundColor: "#FF5151",
            marginRight: 10,
          }}
        >
          <Add />
        </button>
        <p
          style={{
            fontWeight: 600,
            fontSize: 15,
            lineHeight: "18.29px",
            color: "#FF5151",
          }}
        >
          Добавить
        </p>
      </div>
      <BottomModal drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Main;
