import StyledSongsContainer from './styles/SongsContainer.styled'


import Song from './Song'


const SongsContainer = ({ songs }) => {


    return (
        <StyledSongsContainer>
            {songs.map( song => <Song key={song.id} song={song} />)}
        </StyledSongsContainer>
    )
}

export default SongsContainer