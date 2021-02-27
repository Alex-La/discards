import React from "react";

import Logo from "../assets/logo.svg";

const Preloader: React.FC = () => {
  return (
    <div className="center-wrapper">
      <div className="wrap">
        <img src={Logo} alt="logo" width={200} />
      </div>
    </div>
  );
};

export default Preloader;
