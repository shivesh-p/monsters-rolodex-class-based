import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [searchField, setsearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters((monsters) => (monsters = data));
      })
      .catch((error) => {
        return null;
      });
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((t) => {
      return t.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters((prevFilter) => (prevFilter = newfilteredMonsters));
  }, [monsters, searchField]);

  const filterMonsters = (e) => {
    debugger;
    const searchField = e.target.value.toLocaleLowerCase();
    setsearchField((prevState) => (prevState = searchField));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        filterMonsters={filterMonsters}
        placeholder="Search Monsters!👾"
        className="search-box"
      />
      {
        /* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <p>{monster.name}</p>
            </div>
          );
        })} */
        <CardList monsters={filteredMonsters} />
      }
    </div>
  );
}

export default App;
