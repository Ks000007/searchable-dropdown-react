import React from "react";
import SearchableDropsown from "./components/SearchableDropsown";

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Dragon Fruit",
  "Fig",
  "Grapes",
  "Guava",
  "Kiwi",
  "Lemon",
  "Lime",
  "Lychee",
  "Mango",
  "Melon",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Watermelon",
];

export default function App() {
  function getFruits() {
    return fruits;
  }
  return (
    <div>
      <SearchableDropsown fetchFruits={getFruits} />
    </div>
  );
}
