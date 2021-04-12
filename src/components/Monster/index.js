/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from '@emotion/react';
import Wrapper from "./Wrapper";
import logo from "../../logo.svg";
import useMonsterCreator from "../../hooks/useMonsterCreator";

export default function Monster() {
  const [color, setColor] = useState("");
  const [lashes, setLashes] = useState();
  const [hair, setHair] = useState();
  const {
    monsterType,
    monsterColor,
    monsterLashes,
    monsterHair,
  } = useMonsterCreator();

  useEffect(() => {
    console.log('monsterType = ',monsterType )

    const url = monsterType.colors.filter((c) => c.id === monsterColor)[0].url;
    setColor(monsterType.url);
  }, [monsterType]);

  useEffect(() => {
    console.log('monsterType = ',monsterType )
    const url = monsterType.colors.filter((c) => c.id === monsterColor)[0].url;
    setColor(url);
  }, [monsterColor]);

  useEffect(() => {
    if (monsterLashes !== "") {
      const url = monsterType.eyelashes.filter((c) => c.id === monsterLashes)[0]
        .url;
      setLashes(url);
    }
  }, [monsterLashes]);

  useEffect(() => {
    if (monsterHair !== "") {
      const url = monsterType.hair.filter((c) => c.id === monsterHair)[0].url;
      setHair(url);
    }
  }, [monsterHair]);

  return (
    <div
    css={css`
    position: absolute;
    top: 75%;
    left: 100%;
    transform: translate(-100%, -75%);
    width: 470px;
    height: 830px;
    border: 1px solid green;
    `}
  >
      <div
      css={css`
      position: relative;
     
      `}
    >
        <img src={color} alt="logo" style={{ position: "absolute", top: 0 }} />
        {lashes && (
          <img src={lashes} alt="logo" style={{ position: "absolute", top: 0 }} />
        )}
        {lashes && (
          <img src={lashes} alt="logo" style={{ position: "absolute", top: 0 }} />
        )}
        {hair && (
          <img src={hair} alt="logo" style={{ position: "absolute", top: 0 }} />
        )}
      </div>
    </div>
  );
}
