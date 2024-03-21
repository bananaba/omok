import styled from "@emotion/styled";

export default function SelectStone({ setPlayerColor }) {
  const handleButton = (color) => {
    return () => {
      setPlayerColor(color);
    };
  };

  return (
    <Modal>
      <Buttons>
        <Button onClick={handleButton("black")} type="button">
          <Stone className="black" />
          흑돌
        </Button>
        <Button onClick={handleButton("white")} type="button">
          <Stone className="white" />
          백돌
        </Button>
      </Buttons>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10000;
  background-color: #00000088;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 144px;
  height: 64px;
  border: 1px solid black;
  border-radius: 32px 32px;
  background-color: white;
  cursor: pointer;
  font-size: 24px;
`;

const Stone = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid black;
  border-radius: 50%;
  &.black {
    background-color: black;
  }
  &.white {
    background-color: white;
  }
`;
