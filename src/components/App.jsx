import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { FaGithub, FaQuoteLeft } from 'react-icons/fa';

import './App.css';

const dataAtom = atom(null);

export default function App() {
  const [data, setData] = useAtom(dataAtom);

  useEffect(() => {
    const getRemoteData = async () => {
      const remoteData = await fetch('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => response.json());

      setData(remoteData);
    };

    getRemoteData();
  }, [setData]);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">
              React/Tailwind PWA Starter Template
            </h1>
            <blockquote className="mx-auto text-3xl italic leading-normal text-center text-blue-200">
              {data ? (
                <>
                  <FaQuoteLeft className="inline mr-1 mb-2" />
                  {` ${data.joke}`}
                </>
              ) : (
                '... loading dad joke ...'
              )}
            </blockquote>
            <h2 className="my-12 text-2xl font-semibold leading-tight text-center">
              <small className="text-base font-normal text-center">
                <a
                  href="https://icanhazdadjoke.com/api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  source: https://icanhazdadjoke.com/api
                </a>
              </small>
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed min-w-full text-base text-center bottom-2">
        <a href="https://github.com/mikesprague/react-tailwind-ghpages-starter">
          <FaGithub className="inline" />
          {' Back to repo'}
        </a>
      </div>
    </>
  );
}
