import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Layout from '../components/layout';

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

export default function PokeApi() {
  const [data, setData] = useState('');
  
  useEffect(() => {
    (async function () {
      console.log("Attempting API test")
      const { text } = await( await fetch(`/api/pokemon`)).json();
      setData(text);
    })();
  }, []);
  // console.log(data);

  return (
    <Layout>
      <JsonEditor value={ data }/>
    </Layout>
    );
}

