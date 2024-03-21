import styled from "@emotion/styled";
import OmokTile from "./OmokTile";
import SelectStone from "./SelectStone";
import { useState, useEffect } from "react";

export default function Game() {
  const [table, setTable] = useState(new Array(18 * 18));
  const [turn, setTurn] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const tiles = new Array(18);

  const setStone = (x, y) => {
    return () => {
      const copy = [...table];
      copy[y * 18 + x] = turn ? "white" : "black";
      setTable(copy);
      setTurn(!turn);
    };
  };

  const setPlayerColor = (color) => {
    setPlayer(color);
  };

  for (let y = 0; y < 18; y++) {
    const tile = [];
    for (let x = 0; x < 18; x++)
      tile.push(
        <OmokTile
          key={"tile-" + x + "-" + y}
          pos={[x, y]}
          stone={table[y * 18 + x]}
          setStone={setStone(x, y)}
        />
      );
    tiles[y] = <OmokTable key={"table-" + y}>{tile}</OmokTable>;
  }

  return (
    <>
      {!player && <SelectStone setPlayerColor={setPlayerColor} />}
      <GameTable>{tiles}</GameTable>
    </>
  );
}

const GameTable = styled.div`
  position: relative;
  top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OmokTable = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
