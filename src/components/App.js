import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaGithub } from 'react-icons/fa';
import './App.scss';

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getRemoteData = async () => {
      const remoteData = await axios
        .get('https://icanhazdadjoke.com', {
          headers: {
            Accept: 'application/json',
          },
        })
        .then((response) => response.data);
      setData(remoteData);
    };
    getRemoteData();
  }, []);

  return (
    <>
      <div className="container max-w-screen-xl min-h-screen px-6 py-20 text-center page-wrapper">
        <h1 className="mb-8 text-4xl font-bold text-center underline">
          Tailwind CSS/React PWA Starter Template
          <br />
        </h1>
        <blockquote className="mx-auto text-3xl italic leading-normal text-center text-blue-200">
          {data ? <><FaQuoteLeft />{` ${data.joke}`}</> : '... loading dad joke ...'}
        </blockquote>
        <h2 className="mb-12 text-2xl font-semibold leading-tight text-center">
          <small className="text-base font-normal text-center">
            <a href="https://icanhazdadjoke.com/api" rel="noopener noreferrer" target="_blank">
              datasource: https://icanhazdadjoke.com/api
            </a>
          </small>
        </h2>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/tailwindcss-react-pwa-template">
	  <FaGithub/> 
	  {` Back to repo`}
	</a>
      </div>
    </>
  );
}
