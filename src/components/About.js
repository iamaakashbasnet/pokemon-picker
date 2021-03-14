import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { slug } = useParams();

  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      {info && (
        <>
          <div className='flex justify-center mt-3 mb-1'>
            <img
              className='w-auto md:w-1/6'
              src={info.sprites.front_default}
              alt={info.name}
            />
            <img
              className='w-auto md:w-1/6'
              src={info.sprites.back_default}
              alt={info.name}
            />
          </div>
          <p className='text-center uppercase font-title text-2xl'>
            {info.species.name}
          </p>
          <div className='bg-white dark:bg-gray-700 mt-5 p-5 shadow border rounded'>
            <h4 className='text-2xl border-b mb-4'>Abilities</h4>
            <ul className='list-disc list-inside'>
              {info.abilities.map(({ ability, slot }) => (
                <li key={slot} className='capitalize'>
                  {ability.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default About;
