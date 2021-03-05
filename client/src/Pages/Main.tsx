import React, { useEffect, useContext } from "react";

import { BottomNavContext } from "../context/BottomNavContext";
import { SearchTextField } from "../MUI/CssComponents";
import { InputAdornment } from "@material-ui/core";
import { Search, Notify } from "../Icons";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchTextField
          style={{ marginRight: 13 }}
          variant="outlined"
          size="small"
          placeholder="Поиск"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Notify count={1} />
      </div>
    </div>
  );
};

export default Main;
