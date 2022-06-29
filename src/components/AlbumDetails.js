import StyledAlbumDetails from './styles/AlbumDetails.styled'

import SongsContainer from './SongsContainer'
import { MdOutlineClose } from 'react-icons/md'


const AlbumDetails = ({ data: { id, name, date, imgUrl, tracks, artist }, handleCloseAlbumDetailsClick}) => {


    return (
        <StyledAlbumDetails>
            <div className='modal'>
                <MdOutlineClose className='close-btn' onClick={handleCloseAlbumDetailsClick}/>
                <header>
                    <div className='text-container'>
                        <p className='artist-name'>{artist}</p>
                        <h3 className='album-name'>{name}</h3>
                        <p><span className='info-track'>Length</span> {tracks.length} tracks</p>
                        <p><span className='info-date'>Release Date</span> {date}</p>
                    </div>
                    <img src={imgUrl} alt="" />
                </header>
                <SongsContainer tracks={tracks} />
            </div>
        </StyledAlbumDetails>
    )
}

export default AlbumDetails