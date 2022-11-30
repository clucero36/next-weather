import Head from 'next/head'
import { useState } from 'react';

// fetches Los Angeles weather data on pre render
export async function getServerSideProps() {

  const res = await fetch('http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
    key: '277121a6f9ef4bd48c8222935222911',
    q: 'Los Angeles',
  }));

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState('')

  function onFormSubmit(event) {
    event.preventDefault();
    search();
  }

  const search = async () => {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
      key: '277121a6f9ef4bd48c8222935222911',
      q: input,
    }));

    const json = await res.json();

    if (!json) {
      return {
        notFound: true,
      }
    }
    
    setWeather(json);
  }

  return (
    <>
      { weather.length === 0 ? (
          <div>
            <Head>
              <title>Weather Checker Application</title>
            </Head>
            <section>
              <h1>Weather Checker</h1>
              <h3>Current Location: {data.location.country}, {data.location.name}</h3>
            </section>
            <form onSubmit={onFormSubmit}>
              <label>Search Weather</label>
              <div>
                <input 
                  type='text'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button>
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <Head>
              <title>Weather Checker Application</title>
            </Head>
            <section>
              <h1>Weather Checker</h1>
              <h3>Current Location: {weather.location.country}, {weather.location.name}</h3>
            </section>
            <form onSubmit={onFormSubmit}>
              <label>Search Weather</label>
              <div>
                <input 
                  type='text'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )
      }
    </>
  )
}
