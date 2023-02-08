import React, { useEffect, useState } from "react";

import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
// import uniqueId from "./utils/helper";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const [isLoading, setIsLoading] = useState(true);

  const addNote = (color) => {
    const tempNotes = [...notes];
    const Id = Math.random(1, 10000);
    tempNotes.push({
      id: Id,
      text: "",
      color,
    });
    setNotes(tempNotes);
    console.log("add vayo....", tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
    console.log("delete vayo....", tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
    console.log("update vayo....", tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <h1>Notes</h1>
          <span>
            <CircularProgress />
          </span>
        </div>
      ) : (
        <>
          <Sidebar addNote={addNote} />
          <NoteContainer
            notes={notes}
            deleteNote={deleteNote}
            updateText={updateText}
          />
        </>
      )}
    </div>
  );
}

export default App;
