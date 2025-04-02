import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import BASE_IMAGE_URL from '../../constants';  

const Banal = () => {
  const [trending, setTrending] = useState(null); 
  console.log(BASE_IMAGE_URL);

  useEffect(() => {
    const fetchTrending = async () => {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`;
      console.log('API URL:', url); 

      try {
        const response = await axios.get(url);
        console.log(response);

        // Check if results exist before accessing
        if (response.data && response.data.results && response.data.results.length > 0) {
          setTrending(
            response.data.results[Math.floor(Math.random() * response.data.results.length)]
          );
        } else {
          console.error('No results found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrending();
  }, []);

  if (!trending) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <img
          src={`${BASE_IMAGE_URL}${trending.backdrop_path || trending.poster_path || ''}`} // fallback to an empty string if no path
          alt="Trending"
          className="h-screen w-screen object-cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {trending.title || trending.name || trending.original_name || 'No title available'}
      </h1>
    </div>
  );
};

export default Banal;
