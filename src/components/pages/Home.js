import CharTile from "../custom-components/CharTile";

import { useState, useEffect, useCallback } from "react";

function Home(props) {
  const [chosenChars, setChosenChars] = useState([]);
  const [chosenIndices, setChosenIndices] = useState([]);
  const [submit, setSubmit] = useState(false);

  const generateRandomLetter = useCallback(() => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }, []);

  const renderHexes = () => {
    return Array.from({ length: 84 }, (x, i) => i).map((el) => (
      <CharTile
        key={el}
        setChosenChars={setChosenChars}
        chosenChars={chosenChars}
        setChosenIndices={setChosenIndices}
        chosenIndices={chosenIndices}
        value={generateRandomLetter}
        index={el}
        submit={submit}
      />
    ));
  };

  useEffect(() => {
    console.log("chosenChars: ", chosenChars);
  }, [chosenChars]);

  useEffect(() => {
    console.log("chosenIndices: ", chosenIndices);
  }, [chosenIndices]);

  return (
    <div className="home-container">
      <button onClick={() => setSubmit(true)}>Submit</button>
      <div className="main">
        <div className="container">{renderHexes()}</div>
      </div>
    </div>
  );
}

export default Home;
