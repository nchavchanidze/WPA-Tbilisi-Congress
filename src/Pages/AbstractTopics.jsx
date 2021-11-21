import React, { useEffect } from "react";
import Topics from "../Components/Abstract Submission/Topics";
import ComponentLayout from "../Layouts/ComponentLayout";

const AbstractTopics = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <ComponentLayout>
      <Topics />
    </ComponentLayout>
  );
};

export default AbstractTopics;
