import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';

import utilStyles from "../styles/utils.module.css"

const JsonEditor = dynamic(
  {
    loader: () => import("nextjs-jsoneditor").then((mod) => mod.JsonEditor),
    render: (JsonEditor) => {
    return JsonEditor;
    },
  },
  {
    ssr: false,
  }
);

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


export default function PokeApi({ postData }) {
  const [data, setData] = useState('');
  const [pokemonName, setPokemonName] = useState('bulbasaur'); // State to hold the Pokemon name
  const [pokemonSprite, setPokemonSprite] = useState(''); // State to hold the Pokemon name

  const clearData = async () => {
    setData("");
  }
  
  const fetchData = async () => {
    console.log("Attempting API test,", pokemonName)

    // Prepare the request with the Pokemon name in the body
    const requestOptions = {
      method: 'POST', // Use POST to send data in the body
      body: JSON.stringify({ pokemonName }), // Use the user-inputted Pokemon name
    };
    const rawResponse = await fetch(`/api/pokemon`, requestOptions)
    
    const { text } = await rawResponse.json();
    setData(text);
  };

  useEffect(() => {
    const sprites = data?.sprites?.front_default;
    console.log(sprites);
  }, [pokemonSprite]);

  return (
    <Layout>
      <h1 className={utilStyles.headingXl}>
        Pokémon API
      </h1>
      {!data && <div>
        <input
          type="text"
          value={ pokemonName }
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={() => fetchData()}>Fetch Pokemon Data</button>
      </div>}

      {data && <div key={ data }>
        <div className={[utilStyles.headingLgBold, utilStyles.flexItem].join(" ")}>
          <Image
              priority
              src={ data?.sprites?.front_default }
              height={72}
              width={72}
              // className={utilStyles.borderCircle}
              alt=""
            />
            { toTitleCase(pokemonName) }
        </div>
        <div>
          <JsonEditor value={ data }/>
        </div>
        <p className="">
          <Link href="/poke-api" onClick={() => clearData()}>Reset</Link>
        </p>
      </div>}
    </Layout>
    );
}
