// ------------------ Lec_7 -----------------

/*

import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>

      <h3 className={styles.name}>{cityName}</h3>

      <time className={styles.date}>{formatDate(date)}</time>

      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;

*/

// ------------------- Lec_9 -------------------

import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  /*

function CityItem({ city }) {
  const { cityName, emoji, date , id} = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <span className={styles.emoji}>{emoji}</span>

        <h3 className={styles.name}>{cityName}</h3>

        <time className={styles.date}>{formatDate(date)}</time>

        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;

*/


// ---------------- Lec_10 ----------------

function CityItem({ city }) {
    const { cityName, emoji, date , id , position} = city;
  
    return (
      <li>
        <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
          <span className={styles.emoji}>{emoji}</span>
  
          <h3 className={styles.name}>{cityName}</h3>
  
          <time className={styles.date}>{formatDate(date)}</time>
  
          <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    );
  }
  
  export default CityItem;