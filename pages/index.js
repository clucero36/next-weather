import Head from 'next/head'
import { useState } from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';
import SearchBar from '../components/searchBar';
import WeatherDisplay from '../components/weatherDisplay';

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
  const [weather, setWeather] = useState('');
  console.log(weather);
  return (
    <Box display='flex' flexDir='column' w='95%' m='5rem auto' p='1rem' gap={5} border='1px' borderColor='white'>
      <Head>
        <title>Weather Checker Application</title>
      </Head>
      { weather.length === 0 ? (
          <>
            <SearchBar setWeather={setWeather}/>
            <WeatherDisplay data={data}/>
          </>
        ) : (
          <>
            <SearchBar setWeather={setWeather}/>
            <WeatherDisplay data={weather} />
          </>
        )
      }
    </Box>
  )
}
