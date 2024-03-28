import styled from "@emotion/styled";

export default function OmokTile({ pos, stone, setStone }) {
  const getAxis = (pos) => {
    let horizontalClass = "horizontal";
    let verticalClass = "vertical";
    const axis = [];

    if (pos[0] === 0) horizontalClass += " first";
    else if (pos[0] === 18) horizontalClass += " last";
    if (pos[1] === 0) verticalClass += " first";
    else if (pos[1] === 18) verticalClass += " last";

    axis.push(<Axis className={horizontalClass} />);
    axis.push(<Axis className={verticalClass} />);

    return axis;
  };

  const getMark = (pos) => {
    if ((pos[0] + 3) % 6 !== 0) return null;
    if ((pos[1] + 3) % 6 !== 0) return null;
    return <Mark />;
  };

  const getStone = (stone) => {
    if (!stone) return null;
    else if (stone === "black") return <Stone className="black" />;
    else if (stone === "white") return <Stone className="white" />;
    else return null;
  };

  return (
    <Tile onClick={!stone && setStone} className={!stone && "empty"}>
      {getAxis(pos)}
      {getMark(pos)}
      {getStone(stone)}
    </Tile>
  );
}

const Tile = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border: none;
  background: none;
  overflow: hidden;
  flex-shrink: 0;

  &.empty {
    cursor: pointer;

    &:hover {
      background-color: gray;
    }
  }
`;

const Stone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: solid 1px black;
  z-index: 10;

  &.black {
    background-color: black;
  }
  &.white {
    background-color: white;
  }
`;

const Axis = styled.div`
  position: absolute;
  border: none;
  background-color: black;

  &.horizontal {
    top: 50%;
    width: 100%;
    height: 2px;
    transform: translate(0, -50%);

    &.first {
      left: 50%;
    }
    &.last {
      left: -50%;
    }
  }
  &.vertical {
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translate(-50%, 0);

    &.first {
      top: 50%;
    }
    &.last {
      top: -50%;
    }
  }
`;

const Mark = styled.div`
  width: 15%;
  height: 15%;
  background-color: black;
  border: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
