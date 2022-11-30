import {
  Box,
  Text,
  Icon
} from '@chakra-ui/react';
import Image from 'next/image'
const WeatherDisplay = ({ data }) => {
  
  return (
    <Box display='flex' flexDir='column' gap={2}>
      <Box display='flex' justifyContent='space-around' mb='1.5rem'>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
        <Text fontSize='2xl' fontWeight='bold' pt='1rem'>Weather Display</Text>
        <img alt='icon' src={data.current.condition.icon} style={{width:'75px', height:'75px'}} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Box className='left box' display='flex' flexDir='column' gap={5} w='40%'>
          <Text fontSize='xl' fontWeight='bold'>Location</Text>
          <Box display='flex' gap={2}>
            <Text>{data.location.region},</Text>
            <Text>{data.location.name}</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Lattitude:</Text>
            <Text>{data.location.lat}</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Longitude:</Text>
            <Text>{data.location.lon}</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Local Time:</Text>
            <Text>{data.location.localtime}</Text>
          </Box>
        </Box>
        <Box className='left box' display='flex' flexDir='column' w='40%' gap={5}>
          <Text fontSize='xl' fontWeight='bold'>Weather</Text>
          <Box display='flex' gap={2}>
            <Text>{data.current.condition.text}</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Temp:</Text>
            <Text>{data.current.temp_f} f</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Wind:</Text>
            <Text>{data.current.wind_mph} mph</Text>
          </Box>
          <Box display='flex' justifyContent='space-between' borderBottom='1px' borderColor='white'>
            <Text>Visual Distance:</Text>
            <Text>{data.current.vis_miles} miles</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WeatherDisplay;