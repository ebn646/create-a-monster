import React from "react";
import useMonsterCreator from "../../hooks/useMonsterCreator";

export default function Swatch({ id, type, url }) {
  const {
    setMonsterColor,
    setMonsterLashes,
    setMonsterHair,
  } = useMonsterCreator();

  function setAccesories() {
    switch (type) {
      case "lashes":
        setMonsterLashes(id);
        return;
      case "color":
        setMonsterColor(id);
        return;
      case "hair":
        setMonsterHair(id);
        return;
      default:
        return;
    }
  }

  return (
    <button
      onClick={() => {
        setAccesories();
      }}
      id={id}
    >
      <img src={url} />
    </button>
  );
}
