import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "heyyy ru sureeee?",
  "do u want me 2 kms",
  "PLEAAAAAAAASSSSEEE",
  "u want me soooo bad ik",
  "i'll tell our kids u said no",
  "ok faisalabadi",
  "pakar ke maaru gi",
  "we r litr married u cant say no LOL",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="emoji holding rose"
            src="https://i.postimg.cc/26cx8bgC/Whats-App-Image-2025-02-03-at-4-34-35-AM.jpg"
          />
          <div className="text">seeeee knew u had a crush on meeee😛</div>
        </>
      ) : (
        <>
          <img
            alt="yes or no"
            src="https://i.postimg.cc/SsXZwftW/Whats-App-Image-2025-02-03-at-2-41-21-AM.jpg"
          />

          <div>will u be my valentine plspls</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
