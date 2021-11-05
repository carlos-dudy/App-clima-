import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearchPlus } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () =>
    onSearch(document.getElementById("searchInput").value);

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        id="searchInput"
        placeholder="Agregar una ciudad..."
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <FaSearchPlus />
      </button>
    </div>
  );
}
