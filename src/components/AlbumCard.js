import { useState, useEffect } from 'react'
import StyledAlbumCard from './styles/AlbumCard.styled'


const AlbumCard = ({ albumData: { id, queryParamValue, name, date }}) => {

    const [imgUrl, setImgUrl] = useState('')
    const [tracks, setTracks] = useState([])
    const [artist, setArtist] = useState('')

    useEffect( () => {

        const fetchData = async () => {
          const res = await fetch(`http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=b45767d91449f5e67718614a6a628476&artist=Red%20Hot%20Chili%20Peppers&album=${queryParamValue}&format=json`)
          const json = await res.json()
          setArtist(json.album.artist)
          setImgUrl(json.album.image[2]['#text'])
          setTracks(json.album.tracks)
        }
        fetchData()
    
      }, [] )

    return (
        <StyledAlbumCard>
            <div className='img-container'>
                <img src={imgUrl} alt={`${name} album cover`} />
            </div>
            <p className="album-name">{name}</p>
            <p className="artist-name">{artist}</p>
            <p className="released-date">Release Date <span className='date'>{date}</span></p>

        </StyledAlbumCard>
    )
}

export default AlbumCard