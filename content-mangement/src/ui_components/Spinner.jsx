import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Spinner = () => {
  return (
    <ClipLoader
      cssOverride={override}
      size={450}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
