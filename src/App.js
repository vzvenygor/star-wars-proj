import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import People from './components/main/people';
import Planets from './components/main/planets';
import Films from './components/main/films';
import Vehicles from './components/main/vehicles';
import Starships from './components/main/starships';
import Species from './components/main/species';
import Main from './components/main/main';
import Search from './components/search/search';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [species, setSpecies] = useState([]);
  const [main] = useState([]);
  
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }

    async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
    }
    
    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
    }

    async function fetchSpecies() {
      let res = await fetch('https://swapi.dev/api/species/?format=json');
      let data = await res.json();
      setSpecies(data.results);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchVehicles();
    fetchStarships();
    fetchSpecies();
  }, [])

  return (
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/'>
              <Main data={main} />
            </Route>
            <Route exact path='/people'>
              <People data={people} />
            </Route>
            <Route exact path='/planets'>
              <Planets data={planets} />
            </Route>
            <Route exact path='/films'>
              <Films data={films} />
            </Route>
            <Route exact path='/vehicles'>
              <Vehicles data={vehicles} />
            </Route>
            <Route exact path='/starships'>
              <Starships data={starships} />
            </Route>
            <Route exact path='/species'>
              <Species data={species} />
            </Route>
            <Route exact path='/search'>
              <Search />
            </Route>
          </Switch>
        <Main />  
        <Footer />
      </Router>
    </>
  );
}

export default App;
