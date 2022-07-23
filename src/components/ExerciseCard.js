import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="rows">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#7dcd16",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#7dcd16",
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#353D2F",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#353d2f",
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
