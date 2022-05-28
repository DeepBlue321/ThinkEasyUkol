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
import { motion } from "framer-motion";

function App() {
  const quest: string[] = ["Who?", "What?", "When?", "Where?"];
  const answers = useSelector((state: RootState) => state.data.answers);
  const question = useSelector((state: RootState) => state.data.question);

  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        return;
      }
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
        <Box
          component={motion.div}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          initial={{ opacity: 0 }}
          sx={{ width: "60%" }}
        >
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
            autoFocus={true}
            sx={{
              width: "100%",
              bgcolor: "white",
              fontFamily: "Monospace",
              fontSize: "29px",
            }}
            onKeyDown={handleKeyDown}
          />
        </Box>
      ) : (
        <Typography
          component={motion.div}
          animate={{ opacity: 1, y: "0" }}
          initial={{ y: "-100vh", opacity: 0 }}
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
