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
import { Box } from "@mui/system";

function App() {
  const quest: string[] = ["Who?", "What?", "When?", "Where?"];
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
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
      }}
      className="App"
    >
      {question !== 4 ? (
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{
              fontFamily: "Monospace",
              fontSize: "h1.fontSize",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {quest[index]}
          </Typography>
          <TextField
            sx={{
              width: "100%",
              bgcolor: "white",
              fontFamily: "Monospace",
              fontSize: "h1.fontSize",
            }}
            onKeyDown={handleKeyDown}
          />
        </Box>
      ) : (
        <Typography
          sx={{
            fontFamily: "Monospace",
            fontSize: "h1.fontSize",
            fontWeight: "bold",
            color: "white",
          }}
        >
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
    </Box>
  );
}

export default App;
