import React from 'react'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../constants/axios'
import { useEffect,useState } from 'react'
import './RowPost.css'



function RowPost(props) {
    const[urlid,seturlid]=useState('')
    const [movies, setmovies] = useState([])
    useEffect(() => {
     axios.get(props.url).then(Response=>{
        console.log(Response.data);
        setmovies(Response.data.results)
     })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
       const movietailer=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
            if(response.data.results.length!==0){
                seturlid(response.data.results[0])
            }
            
        })

       }
     
  return (
    <div>
        <div className='row'>
            <h2>{props.tittle}</h2>
            <div className='posters'>

                {movies.map((obj)=>
                    <img onClick={()=>movietailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}
                  
                
            </div>
        {urlid &&  <YouTube videoId={urlid.key} opts={opts}  /> }
        </div>
    </div>
  )
}

export default RowPost


