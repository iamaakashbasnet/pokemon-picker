import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  const [pokemon, setPokemon] = useState();
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${page}`)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
        setLoading(false);
      });
  }, [page]);

  const pageIncrement = () => {
    setPage(page + 10);
    setLoading(true);
  };

  return (
    <>
      <BrowserRouter>
        <Link
          to='/'
          className='font-title block text-5xl text-center py-3 border-b'
        >
          Pokemon Picker
        </Link>

        <Switch>
          <Route path='/about/:slug/' exact component={About} />
          <Route path='/' exact>
            <Home
              pokemon={pokemon}
              loading={loading}
              pageIncrement={pageIncrement}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
