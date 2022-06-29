import StyledSong from './styles/Song.styled'
import { BiPlay } from 'react-icons/bi'


const Song = ({track}) => {


    return (
        <StyledSong>
            <div className='container'>
                <span className='rank'>{track["@attr"].rank}</span>
                <BiPlay className='play-icon'/>
                <p className="title">{track.name}</p>
            </div>
            <span>
                {track.duration > 60 && `${Math.floor(track.duration / 60)}min`}
            </span>
        </StyledSong>
    )
}

export default Song