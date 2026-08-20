import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f52045f84f2a40099b2bfd13d671627f";

export default function Search({ foodData, setfoodData }) {
  const [searchquery, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${searchquery}&apiKey=${API_KEY}`);
      const data = await res.json();
      setfoodData(data.results);
    }
    fetchFood();
  }, [searchquery]);

  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={searchquery}
        />
      </div>
    </>
  );
}
