import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClimbingBoxLoader color="#fc904d" size={20} />
    </div>
  );
};

export default Loader;
