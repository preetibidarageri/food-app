import { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import OuterComponent from "./components/OuterComponent";
import InnerComponent from "./components/InnerComponent";
import FoodDetails from "./components/FoodDetails";
import styles from "./components/outercomponent.module.css";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Search foodData={foodData} setfoodData={setfoodData} />
        <OuterComponent className={styles.box}>
          <InnerComponent>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerComponent>
          <InnerComponent>
            <FoodDetails setFoodId={setFoodId} foodId={foodId} />
          </InnerComponent>
        </OuterComponent>
      </main>
    </div>
  );
}

export default App;
