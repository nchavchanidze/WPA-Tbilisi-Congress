import React, { useEffect } from "react";
import Abstract from "../Components/Abstract Submission/Abstract";
import ComponentLayout from "../Layouts/ComponentLayout";

const AbstractUpload = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <ComponentLayout>
      <Abstract />
    </ComponentLayout>
  );
};

export default AbstractUpload;
