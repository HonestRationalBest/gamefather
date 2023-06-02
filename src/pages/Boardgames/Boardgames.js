import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { StoreContext } from "../../context/store";
import { Link } from "react-router-dom";

function Boardgames() {
  const { state, dispatch } = useContext(StoreContext);
  const [newGame, setNewGame] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewGame((prevGame) => ({ ...prevGame, [name]: value }));
  };

  const handleAddGame = () => {
    // const response = await axios.post(
    //   "http://localhost:4000/api/board-game",
    //   {
    // ...newGame
    // }
    // );

    //id: response.data.id
    dispatch({ type: "ADD_BOARDGAME", payload: { ...newGame, id: "11" } });
    setNewGame({
      name: "",
      description: "",
    });
  };

  const handleRemoveGame = (id) => {
    dispatch({ type: "REMOVE_BOARDGAME", payload: id });
  };

  //   useEffect(() => {

  //     const fetchBoardgames = async () => {
  //       const response = await fetch("https://example.com/api/boardgames");
  //       const data = await response.json();
  //       setBoardgames(data);
  //     };

  //     fetchBoardgames();
  //   }, [setBoardgames]);
  console.log(state);

  return (
    <div>
      <h1>Your Boardgames</h1>
      {state.boardgames.map((game) => (
        <div key={game.id}>
          <h2>
            <Link to={`/boardgames/${game.id}`}>{game.name}</Link>
          </h2>
          <p>{game.description}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleRemoveGame(game.id)}
          >
            Remove Boardgame
          </Button>
        </div>
      ))}
      <Container maxWidth="sm">
        <h2>Add a new boardgame</h2>
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={newGame.name}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          value={newGame.description}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddGame}>
          Add Boardgame
        </Button>
      </Container>
    </div>
  );
}

export default Boardgames;
