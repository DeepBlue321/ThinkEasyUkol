import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeAnswer, changeQuestion } from "./redux/answSlice";
import { RootState } from "./redux/store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const quest: string[] = ["Who", "What", "When", "Where"];
  const answers = useSelector((state: RootState) => state.data.answers);
  const question = useSelector((state: RootState) => state.data.question);

  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      dispatch(changeAnswer(event.target.value));
      dispatch(changeQuestion(question + 1));
      setIndex(index + 1);
      event.target.value = "";
    }
  };
  return (
    <div className="App">
      {question !== 4 ? (
        <div>
          <Typography>{quest[index]}</Typography>
          <TextField onKeyDown={handleKeyDown} />
        </div>
      ) : (
        <Typography>
          {answers[0] +
            " " +
            answers[1] +
            " " +
            answers[3] +
            " " +
            answers[2] +
            "."}
        </Typography>
      )}
    </div>
  );
}

export default App;
