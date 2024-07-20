// src/components/SearchBox/SearchBox.jsx

import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <p>Find contact by name:</p>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
