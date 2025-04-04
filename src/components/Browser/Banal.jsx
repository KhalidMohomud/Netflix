import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_IMAGE_URL from '../../constants';
import { MdInfo, MdPlayArrow } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import  modalState  from '../../assets/atom/atom';  
const Banal = () => {
  //const [showModal, setShowModal] = useRecoilState(modalState);  
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&with_networks=213`;
      console.log('API URL:', url);

      try {
        const response = await axios.get(url);
        console.log(response);

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

  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(' ')
        )}${suffix}`;

  // Toggle modal state on "More Info" button click
  // const toggleModal = () => {
  //   setShowModal(!showModal);  // Toggle modal visibility
  // };

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <img
          src={`${BASE_IMAGE_URL}${trending.backdrop_path || trending.poster_path}`}
          alt=''
          className='h-screen w-screen object-cover'
        />
      </div>

      <div className='relative mt-28'>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          {trending.title || trending.name || trending.original_name}
        </h1>

        <p className='max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
          {trending.overview && truncate(trending.overview, 200, '...')}
        </p>
        <div className='flex items-center space-x-2'>
          <button className='flex items-center rounded bg-white px-5 py-1 text-black transition hover:bg-gray-200 md:px-7 md:py-2 md:text-lg'>
            <MdPlayArrow className='mx-2 h-6 w-6 md:h-8 md:w-8' />
            Play
          </button>

          <button
          
            className='flex items-center rounded bg-[#5a7272] px-5 py-1 hover:bg-[#718a8a] md:px-7 md:py-2 md:text-lg'
          >
            <MdInfo className='mx-2 h-6 w-6 md:h-8 md:w-8' /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banal;
