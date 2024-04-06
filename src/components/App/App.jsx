import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { SearchBar, SearchResults, Playlist, Track, Tracklist } from '../index';
import {Spotify} from '../../utils/Spotify/Spotify';

function App() {

  const [searchResults, setSearchResults] = useState([ 
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:1
    },
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:2
    },
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:3
    },
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:4
    },
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:5
    },
    {
      name:'James Blunt',
      artist: 'James Blunt',
      album:'Beautiful',
      id:6

    }]
  );

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:1
      },
      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:2
      },

      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:3
      },
      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:4
      },
      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:5
      },
      {
        name:'James Blunt',
        artist: 'James Blunt',
        album:'Beautiful',
        id:6
      },
    ]
    );

    const addTrack = (track) => {
      const existingTrack = playlistTracks.find(t => t.id === track.id);
      const newTrack = playlistTracks.concat(track);
      if (!existingTrack) {
        setPlaylistTracks(newTrack);
      }else {
        console.log('Track already exists in playlist');
      }
    };

    const removeTrack = (track) => {
      const existingTrack = playlistTracks.filter(t => t.id !== track.id);
      setPlaylistTracks(existingTrack);
    };

    const updatePlaylistName = (name) => {
      setPlaylistName(name);
    };

    const savePlaylist = () => {
      const trackURIs = playlistTracks.map((t) => t.uri);
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
      });
    };

    const search = (term) => {
      Spotify.search(term).then((result) => setSearchResults(result));
      console.log(term);
    };
  return(
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1> 
      <div className={styles.App}>

        {/* SearchBar Component */}

        <SearchBar onSearch={search} />

        <div className={styles["App-playlist"]}>
        
        {/* SearchResults Component */}

          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          
          {/* Playlist Component */}
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName} 
            onSave={savePlaylist}
          />
          <Track />
          <Tracklist />
        </div>
      </div> 
    </div>
  );
}

export default App;
