// boilerplate for Tracklist component
import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

// Tracklist component
const Tracklist = (props) => {
  if (!props.tracks) {
    return null; 
  }
  
  return (
    <div className={styles.Tracklist}>
      {/* You will add a map method that will render a set of Track components*/}
      {props.userSearchResults.map((track) => (
        <Track 
          key={track.id} 
          track={track} 
          isRemoval={props.isRemoval} 
          onAdd={props.onAdd} 
          onRemove={props.onRemove} 
        />
      
      ))}
    </div>
  );
};

export default Tracklist;