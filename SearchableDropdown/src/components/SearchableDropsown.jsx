import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
export default function SearchableDropsown({ fetchFruits }) {
  const [fruits, setFruits] = useState(() => {
    return fetchFruits();
  });
  const [searchedFruits, setSearchedFruits] = useState(fruits);
  const [listed, setListed] = useState([]);
  const [selected, setSelected] = useState(0);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setSelected(0);
  }, [searchedFruits]);

  function addItem(element) {
    setListed((prev) => {
      return [...prev, element];
    });
    setSearchedFruits((prev) => {
      let temp = [...prev];
      return temp.filter((item, index) => {
        return element !== item;
      });
    });
    setFruits((prev) => {
      let temp = [...prev];
      return temp.filter((item, index) => {
        return element !== item;
      });
    });
  }

  function handleSelect(element, index) {
    setSelected(index);
    addItem(element);
  }

  function removeTag(element, index) {
    setSearchedFruits((prev) => {
      let temp = [...prev, element];
      return temp.sort();
    });
    setFruits((prev) => {
      let temp = [...prev, element];
      return temp.sort();
    });
    setListed((prev) => {
      let temp = [...prev];
      temp.splice(index, 1);
      return temp;
    });
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem(searchedFruits[selected]);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected((prev) => (prev === 0 ? 0 : prev - 1));
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected((prev) =>
        prev === searchedFruits.length - 1 ? prev : prev + 1,
      );
    }
  };

  return (
    <div>
      <div className="tags">
        {listed.length > 0 &&
          listed.map((element, index) => {
            return (
              <div key={index} className="tag">
                <h6>{element}</h6>
                <span
                  className="cross"
                  onClick={() => {
                    removeTag(element, index);
                  }}
                >
                  x
                </span>
              </div>
            );
          })}
      </div>
      <div className="input">
        <input
          type="text"
          onChange={(e) => {
            setSearchItem(e.target.value);
            setSearchedFruits(() => {
              return fruits.filter((element, index) => {
                return element
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLocaleLowerCase());
              });
            });
          }}
          value={searchItem}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
      </div>
      <div className="dropdown">
        {searchedFruits.map((element, index) => {
          return (
            <div
              key={index}
              className={`dropdown-item ${element === searchedFruits[selected] ? "selected" : ""}`}
              onClick={() => handleSelect(element, index)}
            >
              <span>{element}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
