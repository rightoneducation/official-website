import React from "react";

export default function GameShowDescription(props) {
  //   const { styles } = props;
  return (
    <div className="first-description-below" style={{ marginLeft: "50px" }}>
      <h3 className="game-show-description1">Check out season highlights <br className="desktop-break" /> and <u><a href="https://docs.google.com/spreadsheets/d/1HoT_r6AGKU6g7kldqFnvy47Mno3fHLXQE24cuNjY9eo/edit?usp=sharing" target="/" className="game-show-link">example questions <br className="desktop-break" /> and answers</a></u>!
        <hr className="game-show-underline" />
      </h3>
      <p className="game-show-description2">
        Students across the country met online <br className="desktop-break" /> and adapted the <i>RightOn!</i> beta app to a <br /> livestream game show for youth where <br className="desktop-break" /> the best wrong answers win.
      </p>
    </div>
  );
}