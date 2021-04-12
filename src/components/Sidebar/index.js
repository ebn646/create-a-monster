import React from "react";
import Header from "./Header";
import Swatches from "./Swatches";
import Accessories from "../Accessories";

import useMonsterCreator from "../../hooks/useMonsterCreator";
import "./sidebar.scss";

export default function Sidebar() {
  const { currentStep } = useMonsterCreator();

  return (
    <div style={{zIndex: 1}}>
      <Header />
      {currentStep === 2 && <Swatches />}
      {currentStep === 3 && <Accessories />}
    </div>
  );
}
