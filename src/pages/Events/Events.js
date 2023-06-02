import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/store";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function Events() {
  const { state, dispatch } = useContext(StoreContext);
  const [newEvent, setNewEvent] = useState({
    name: "",
    datetime: "",
    boardgames: [],
  });

  const handleCheckboxChange = (gameId) => {
    if (newEvent.boardgames.includes(gameId)) {
      setNewEvent({
        ...newEvent,
        boardgames: newEvent.boardgames.filter((id) => id !== gameId),
      });
    } else {
      setNewEvent({
        ...newEvent,
        boardgames: [...newEvent.boardgames, gameId],
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = () => {
    dispatch({
      type: "ADD_EVENT",
      payload: { ...newEvent, id: Date.now().toString() },
    });
    setNewEvent({
      name: "",
      datetime: "",
      boardgames: [],
    });
  };

  // console.log(state?.boardgames);

  return (
    <div>
      <h1>Events</h1>
      {state?.events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.datetime}</p>
          {event.boardgames.map((gameId) => {
            const game = state?.boardgames.find((game) => game.id === gameId);
            return (
              <div key={game.id}>
                <h4>{game.name}</h4>
              </div>
            );
          })}
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              dispatch({
                type: "REMOVE_EVENT",
                payload: event.id,
              })
            }
          >
            Remove Event
          </Button>
        </div>
      ))}
      <TextField
        name="name"
        label="Event Name"
        variant="outlined"
        value={newEvent.name}
        onChange={handleInputChange}
      />
      <TextField
        name="datetime"
        label="Event Datetime"
        variant="outlined"
        value={newEvent.datetime}
        onChange={handleInputChange}
      />
      <InputLabel id="boardgame-select-label">Select Boardgames</InputLabel>
      {state.boardgames.map((game) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={newEvent.boardgames.includes(game.id)}
              onChange={() => handleCheckboxChange(game.id)}
              name={game.name}
              color="primary"
            />
          }
          label={game.name}
          key={game.id}
        />
      ))}
      {/* You can add a multiple select input for boardgames here */}
      <Button onClick={handleAddEvent}>Add Event</Button>
    </div>
  );
}

export default Events;
