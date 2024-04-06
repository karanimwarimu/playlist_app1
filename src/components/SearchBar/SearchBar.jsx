// boiler plate for search bar component
import React, {useState} from 'react';
import styles from  './SearchBar.module.css';


// SearchBar component
const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const passTerm = () => {
    props.onSearch(term);
  };

  const handleTermChange = ({target}) => {
    setTerm(target.value);
  };
  return (
    <div className={styles.SearchBar}>
      <input 
        type="text" 
        placeholder="Enter A Song, Album, or Artist" 
        onChange={handleTermChange}
      />
      <button className={styles.SearchButton} onClick={passTerm}>search...</button>
    </div>
  );
};

export default SearchBar;