import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    //similar to ngoninit
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            monsters: data,
            originalMonsters: data,
          };
        });
      })
      .catch((error) => {
        // common error
        return null;
      });
  }
  //using arrow functions preserves the lexical scope of this, but in regular function you need to explicitly bind to
  //'this' to the method
  filterMonsters = (e) => {
    debugger;
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { filterMonsters } = this;

    const filteredMonsters = monsters.filter((t) => {
      return t.name.toLocaleLowerCase().includes(searchField);
    });

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
}

export default App;
