import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BoardgamesContext } from "../../context/BoardgamesContext";
import { StoreContext } from "../../context/store";

function BoardgameDetails() {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreContext);
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(state.boardgames.find((game) => game.id === id));
  }, [state, id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGame((prevGame) => ({ ...prevGame, [name]: value }));
  };

  const handleSave = async () => {
    // replace this with your actual fetch call
    // const response = await fetch(`https://example.com/api/boardgames/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(game),
    // });
    // if (response.ok) {
    // const updatedGame = await response.json();
    dispatch({ type: "UPDATE_BOARDGAME", payload: game });
    // }
  };

  return game ? (
    <Container maxWidth="sm">
      <h1>{game.name}</h1>
      <form noValidate autoComplete="off">
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={game.name}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          value={game.description}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </form>
    </Container>
  ) : null;
}

export default BoardgameDetails;
