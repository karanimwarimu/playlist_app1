// Boilerplate for SearchResults component
import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

// SearchResults component
const SearchResults = (props) => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist 
        userSearchResults={props.userSearchResults} 
        isRemoval={true} 
        onAdd={props.onAdd} 
      />
    </div>
  );
};

export default SearchResults;