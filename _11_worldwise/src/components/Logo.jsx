import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

// ------------- Lec_4 --------------

// After clciking on this logo we will re-direct to the root page or the home page.

function Logo() {
  return <Link to='/'><img src="/logo.png" alt="WorldWise logo" className={styles.logo} /></Link>;
}

export default Logo;