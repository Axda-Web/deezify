import StyledSongsContainer from './styles/SongsContainer.styled'


import Song from './Song'


const SongsContainer = ({ id, tracks }) => {


    return (
        <StyledSongsContainer>
            <p className='heading'>Tracklist</p>
            {tracks.map( (track, i) => <Song    key={i}
                                                track={track}
                                                id={id}
                                            />)}
        </StyledSongsContainer>
    )
}

export default SongsContainer