import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ pokemon, pageIncrement, loading }) => {
  return (
    <>
      <div className='flex flex-col md:flex-row space-between flex-nowrap md:flex-wrap justify-evenly'>
        {pokemon &&
          // eslint-disable-next-line array-callback-return
          pokemon.results.map((val, idx) => {
            return (
              <Link
                className='rounded bg-white dark:bg-gray-700 border-gray-200 shadow-md overflow-hidden m-3 p-4 transition duration-150 ease-in-out hover:bg-purple-700 hover:text-white uppercase transform hover:scale-110 motion-reduce:transform-none'
                key={idx}
                to={`/about/${val.idx}/`}
              >
                {val.name}
              </Link>
            );
          })}
      </div>
      <div className='text-center my-32'>
        <button
          className='text-gray-800 bg-white border border-gray-800 hover:bg-gray-800 hover:text-white transition p-3 rounded-sm'
          onClick={pageIncrement}
        >
          {loading ? 'Loading...' : 'Show more'}
        </button>
      </div>
    </>
  );
};

export default Home;
