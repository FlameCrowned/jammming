import { React, useState} from 'react';
import TextField from "@mui/material/TextField";
import List from "./Components/songList";
import './App.css';
import { Button } from '@mui/material';
import addToPlaylist from "./Helpers/playlist";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
      <div className="main">
      <h1>Jammming</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
      <Button onClick={addToPlaylist(inputText)}>Add to Playlist</Button>
      <Button>Go to Playlist</Button>
      <Button>Save to Spotify</Button>
    </div>
    
  );
}

export default App;
