import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../constants/axios'
import {API_KEY,imageUrl} from '../../constants/constants'
function Banner() {
    const [movie, setMovies] = useState([])

    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        setMovies(response.data.results[9])
      })
    }, [])
    
    
    return (
        <div 
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path: ''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <p className='description'>{movie ? movie.overview : ""}</p>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
