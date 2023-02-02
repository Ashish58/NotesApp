import React from "react";
import deleteIcon from "../../assets/delete.svg";
import "./Note.css";

function Note(props) {
  const { note, deleteNote, updateText } = props;
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        placeholder="write your note!!!"
        defaultValue={note.text}
        onChange={(event) => updateText(event.target.value, note.id)}
      />
      <div className="note_footer">
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
