import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState(""); // New state for search text

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Function to add a new item to the list
  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  // Function to handle changes in the search input
  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
  }

  // Filter items based on search text
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter searchText={searchText} onSearchChange={handleSearchInputChange} />
      <ShoppingList items={filteredItems} />
      <ItemForm addItem={addItem} />
    </div>
  );
}

export default App;
