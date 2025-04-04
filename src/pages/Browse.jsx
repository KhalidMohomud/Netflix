import React from 'react'
import Header from '../components/Browser/Header'
import Banal from '../components/Browser/Banal'
import Row from '../components/Browser/Row'
import requests from  '../request'

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-gradient-to-b'>
      
      <Header/>
       <main className='relative pl-4 lg:pl-10 space-y-24'>
       <Banal url={requests.fetchNetflixOriginals} />
                    <Row title="Tranding Now" url={requests.fetchTrending} />
                    <Row title="Actions Movies" url={requests.fetchActionMovies} />
                    <Row title="Top Rated" url={requests.fetchTopRated} />
                    <Row title="Romance Moviews" url={requests.fetchRomanceMovies} />
                    <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
                    <Row title="Documantaries" url={requests.fetchDocumantaries} />
                    <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
       </main>
     
    </div>

  
   
  )
}

export default Browse