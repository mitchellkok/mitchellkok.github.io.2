import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Layout from '../components/layout';
import Link from 'next/link';

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

  return (
    <Layout>
      <p>
        <h1 className={utilStyles.headingXl}>
          Pokemon API
        </h1>
      </p>
      {!data && <div>
        <input
          type="text"
          value={ pokemonName }
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={() => fetchData()}>Fetch Pokemon Data</button>
      </div>}

      {data && <div key={ data }>
        <p className={utilStyles.headingLg}>{ toTitleCase(pokemonName) }</p>
        <p>
          <JsonEditor value={ data }/>
        </p>
        <p className="">
          <Link href="/poke-api" onClick={() => clearData()}>Reset</Link>
        </p>
      </div>}
    </Layout>
    );
}
