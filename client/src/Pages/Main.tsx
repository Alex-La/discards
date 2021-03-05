import React, { useEffect, useContext } from "react";

import { BottomNavContext } from "../context/BottomNavContext";
import SearchInput from "../Components/SearchInput";
import { Add } from "../Icons";

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
    </div>
  );
};

export default Main;
