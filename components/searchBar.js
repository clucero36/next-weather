import { useState } from 'react';
import {
  Box,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';

const SearchBar = ({ setWeather }) => {

  const [input, setInput] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    search();
  }

  const search = async () => {
    const res = await fetch('https://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
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
    <Box display='flex' flexDir='column' align='center' p='1rem' gap={10}>
      <Text>Search City Location: </Text>
      <Box>
        <Input 
          w='50%'
          size='sm'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button size='sm' onClick={onFormSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default SearchBar;