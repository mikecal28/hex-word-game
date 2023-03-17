import { useState, useEffect } from "react";

function CharTile(props) {
  const [charColor, setCharColor] = useState(false);
  const [tileValue, setTileValue] = useState("");

  const { value } = props;

  const handleClick = (e) => {
    e.preventDefault();

    setCharColor((cC) => !cC);
    if (!charColor) {
      props.setChosenChars((chC) => [
        ...chC,
        { char: tileValue, index: props.index },
      ]);
      props.setChosenIndices((cI) => [...cI, props.index]);
    } else {
      const tempArr = [...props.chosenChars];
      const filteredArr = tempArr.filter((char) => char.index !== props.index);
      props.setChosenChars(filteredArr);

      const tempArr2 = [...props.chosenIndices];
      const filteredArr2 = tempArr2.filter((index) => index !== props.index);
      props.setChosenIndices(filteredArr2);
    }
  };

  useEffect(() => {
    setTileValue(value());
  }, [value]);

  return (
    <div
      className="char-tile"
      style={{
        backgroundColor: charColor ? "yellow" : "red",
        visibility:
          props.submit && props.chosenIndices.includes(props.index)
            ? "hidden"
            : "visible",
      }}
    >
      <button onClick={handleClick}>{tileValue}</button>
    </div>
  );
}

export default CharTile;
