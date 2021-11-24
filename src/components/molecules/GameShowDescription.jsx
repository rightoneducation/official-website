import React from "react";

export default function GameShowDescription(props) {
//   const { styles } = props;
  return (
    <div style={ {textAlign: 'center', marginTop: '30px', color: 'white'} }>
        <h3>Check out season highlights above and <u><a href="https://docs.google.com/spreadsheets/d/1HoT_r6AGKU6g7kldqFnvy47Mno3fHLXQE24cuNjY9eo/edit?usp=sharing" target="/">example questions and answers here!</a></u></h3>
        <br />
        <p>
            Students across the country met online and adapted the <b><i>RightOn!</i></b> beta app to a livestream game show
            <br /> 
            for youth where the best wrong answers win.
        </p>
    </div>
  );
}