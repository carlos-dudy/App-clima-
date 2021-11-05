import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cards}>
      {cities.map((el) => (
        <Card
          key={el.name}
          name={el.name}
          min={el.main.temp_min}
          max={el.main.temp_max}
          img={el.weather[0].icon}
          onClose={() => alert(el.name)}
        />
      ))}
    </div>
  );
}
